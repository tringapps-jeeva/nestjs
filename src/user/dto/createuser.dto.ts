import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class createuserdto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly emailid: string;

  @IsString()
  readonly password: string;
}
