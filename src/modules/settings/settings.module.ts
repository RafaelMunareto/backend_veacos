import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from '../users/schemas/users.schema';
import { GrupoController } from './grupo.controller';
import { GrupoService } from './grupo.service';
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
      {
        name: 'User',
        schema: UsersSchema,
      },
    ]),
  ],
  controllers: [SettingsController, GrupoController],
  providers: [SettingsService, GrupoService],
})
export class SettingsModule {}
