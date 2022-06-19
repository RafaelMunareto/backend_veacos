import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Settings } from 'http2';
import { Model } from 'mongoose';
import { User } from '../users/models/users.model';
import { SettingsDto } from './dto/settings.dto';

@Injectable()
export class SettingsService {
  constructor(
    @InjectModel('Settings')
    private readonly settingsModel: Model<Settings>,
  ) {}

  public async index(): Promise<Settings[]> {
    return this.settingsModel.find().populate(['user', 'grupo']);
  }

  public async show(id: string): Promise<Settings[]> {
    return await this.settingsModel.findById(id).populate(['user', 'grupo']);
  }

  public async store(settingsDto: SettingsDto): Promise<Settings> {
    const match = await this.settingsModel.findOne({ user: settingsDto.user });
    if (match) {
      throw new ConflictException('Settings já existe!');
    }
    const settings = new this.settingsModel(settingsDto);
    return settings.save();
  }
  public async update(settingsDto: SettingsDto, id: String): Promise<Settings> {
    await this.checkId(id);
    const grupo = await this.settingsModel.findById(id);
    return grupo.updateOne(settingsDto);
  }
  public async delete(id: String): Promise<Settings> {
    await this.checkId(id);
    const settings = await this.settingsModel.findById(id);
    return settings.deleteOne();
  }

  public async checkId(id: String) {
    const user = await this.settingsModel.findById(id);
    if (!user) {
      throw new NotFoundException('Settings não encontrado.');
    }
  }
}
