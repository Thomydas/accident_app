/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Holyday {
  @PrimaryGeneratedColumn()
  holyday_id: number;

  @Column()
  holyday_date: Date;

  @Column()
  holyday_name: string;
}