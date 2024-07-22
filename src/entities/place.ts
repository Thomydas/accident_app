/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Accident } from './accident';
// import { Accident } from './accident';

@Entity()
export class Place {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  place_id: number;

  @Column()
  accident_number: string;

  @Column()
  category: string;

  @Column()
  traffic_lane: string;

  @Column()
  circulation: string;

  @Column()
  reserved_lane: string;

  @Column()
  road_profile: string;

  @Column()
  road_plan: string;

  @Column()
  surface_condition: string;

  @Column()
  infrastructure: string;

  @Column()
  situation: string;

  @OneToMany(() => Accident, accident => accident.place)
  accidents: Accident[];

}