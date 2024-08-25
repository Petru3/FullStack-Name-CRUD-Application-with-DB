/* eslint-disable prettier/prettier */
import { IsString, Length } from 'class-validator';

export class CreateNameDto {
  @IsString()
  @Length(1, 255, { message: 'Name length is invalid' })
  name: string;
}
