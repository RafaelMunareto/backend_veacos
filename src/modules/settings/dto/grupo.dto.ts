import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GrupoDto {
  @ApiProperty({ description: 'Grupo do usuário.' })
  @IsNotEmpty()
  @IsString()
  grupo: string;
}
