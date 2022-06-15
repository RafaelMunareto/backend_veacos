import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/models/users.model';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: User, token: string) {
    const url = `example.com/auth/confirm?token=${token}`;

    await this.mailerService.sendMail({
      to: user.email,
      from: '"Veacos Team" <suporte@munatask.com>',
      subject: 'Redefinição de senha App Veacos',
      template: 'templates/confirmation.hbs',
      context: {
        name: user.name,
        url,
      },
    });
  }
}
