/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  vehicle_id: number;

  @Column()
  accident_number: string;

  @Column()
  obstacle: string;

  @Column()
  mobile_obstacle: string;

  @Column()
  shock_point: string;

  @Column()
  vehicle_number: string;
}