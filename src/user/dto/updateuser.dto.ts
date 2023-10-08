import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class UpdateUserdto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly emailid: string;
}
