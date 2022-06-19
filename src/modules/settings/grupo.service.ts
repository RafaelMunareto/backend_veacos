import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GrupoDto } from './dto/grupo.dto';
import { Grupo } from './models/settings.model copy';

@Injectable()
export class SettingsService {
  constructor(
    @InjectModel('Grupo')
    private readonly grupoModel: Model<Grupo>,
  ) {}

  public async index(): Promise<Grupo[]> {
    return this.grupoModel.find();
  }

  public async show(id: string): Promise<Grupo[]> {
    return this.grupoModel.findById(id);
  }

  public async store(grupoDto: GrupoDto): Promise<Grupo> {
    const settings = new this.grupoModel(grupoDto);
    return settings.save();
  }
  public async update(grupoDto: GrupoDto, id: String): Promise<Grupo> {
    const settings = await this.grupoModel.findById(id);
    return settings.updateOne(grupoDto);
  }
  public async delete(id: String): Promise<Grupo> {
    const settings = await this.grupoModel.findById(id);
    return settings.deleteOne();
  }
}
