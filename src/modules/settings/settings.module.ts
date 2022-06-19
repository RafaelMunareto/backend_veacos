import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GrupoSchema } from './schemas/grupo.schema';
import { SettingsSchema } from './schemas/settings.schema';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Settings',
        schema: SettingsSchema,
      },
      {
        name: 'Grupo',
        schema: GrupoSchema,
      },
    ]),
  ],
  controllers: [SettingsController],
  providers: [SettingsService],
})
export class SettingsModule {}
