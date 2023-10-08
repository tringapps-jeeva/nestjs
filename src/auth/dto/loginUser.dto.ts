import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class loginUserdto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly emailid: string;

  @IsString()
  readonly password: string;
}
