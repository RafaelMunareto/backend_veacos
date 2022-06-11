import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: String;
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: String;
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  password: String;
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  grupo: String;
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  photo: String;
}
