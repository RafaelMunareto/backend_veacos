import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './models/users.model';
import { AuthService } from '../auth/auth.service';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly usersModel: Model<User>,
    private readonly authService: AuthService,
    private mailService: MailService,
  ) {}

  public async findAll(): Promise<User[]> {
    return this.usersModel.find();
  }

  public async signup(signupDto: SignupDto): Promise<User> {
    const user = new this.usersModel(signupDto);
    return user.save();
  }

  public async signin(
    signinDto: SigninDto,
  ): Promise<{ name: string; jwtToken: string; email: string }> {
    const user = await this.findByEmail(signinDto.email);
    await this.checkPassword(signinDto.password, user);
    await this.findByEmail(user.email);
    const jwtToken = await this.authService.createAccessToken(user._id);
    return { name: user.name, jwtToken, email: user.email };
  }

  public async sendEmailPassword(email: String, res) {
    const user = await this.usersModel.findOne({ email });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado.');
    }
    await this.mailService.sendUserConfirmation(user);
    return res.status(HttpStatus.OK).json('Email enviado com sucesso!');
  }

  public async changePassword(id: string, body) {
    const user = await this.usersModel.findById(id);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado.');
    }
    await user.updateOne({ password: body.password });
    return user;
  }

  private async checkPassword(password: string, user: User): Promise<boolean> {
    const match = password == user.password;
    if (!match) {
      throw new NotFoundException('Senha inválida.');
    }
    return match;
  }

  private async findByEmail(email: string): Promise<User> {
    const user = await this.usersModel.findOne({ email });
    if (!user) {
      throw new NotFoundException('Email não encontrado.');
    }
    return user;
  }
}
