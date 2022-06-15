import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignupDto {
  @ApiProperty({ description: 'Nome do usuário.' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Email do usuário.' })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Senha do usuário.' })
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  password: string;
}
