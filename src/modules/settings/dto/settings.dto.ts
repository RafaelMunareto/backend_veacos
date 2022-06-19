import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { User } from 'src/modules/users/models/users.model';
import { Grupo } from '../models/settings.model copy';

export class SettingsDto {
  @ApiProperty({ description: 'Imagem do usuário.' })
  @IsNotEmpty()
  @IsString()
  urlImage: string;

  @ApiProperty({ description: 'Grupo do usuário.' })
  @IsNotEmpty()
  grupo: Grupo;

  @ApiProperty({ description: 'Usuário' })
  @IsNotEmpty()
  user: User;
}
