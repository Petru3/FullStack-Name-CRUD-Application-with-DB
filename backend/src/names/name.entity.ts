/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Name {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
