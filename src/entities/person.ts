/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Vehicle } from './vehicle';
import { Accident } from './accident';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  person_id: number;

  @Column()
  accident_number: string;

  @Column()
  person_category: string;

  @Column()
  gravity: string;

  @Column()
  gender: string;

  @Column()
  route: string;

  @Column()
  security: string;

  @Column()
  birth_year: number;

  @Column()
  vehicle_number: string;

  @ManyToMany(() => Vehicle)
  @JoinTable()
  vehicle: Vehicle[]
  accident: any;

  @ManyToMany(() => Accident, accident => accident.persons)
  accidents: Accident[];
}
