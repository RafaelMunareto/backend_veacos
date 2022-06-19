import { Injectable } from '@nestjs/common';
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
    return this.settingsModel.find();
  }

  public async show(id: string): Promise<Settings[]> {
    return this.settingsModel.findById(id);
  }

  public async store(settingsDto: SettingsDto): Promise<Settings> {
    const settings = new this.settingsModel(settingsDto);
    return settings.save();
  }
  public async update(settingsDto: SettingsDto, id: String): Promise<Settings> {
    const settings = await this.settingsModel.findById(id);
    return settings.updateOne(settingsDto);
  }
  public async delete(id: String): Promise<Settings> {
    const settings = await this.settingsModel.findById(id);
    return settings.deleteOne();
  }
}
