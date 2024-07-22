/* eslint-disable prettier/prettier */

import { Accident } from "src/entities/accident";


export class AccidentIndexDTO {
    
  accident_id: string;
  accident_date: Date;
  luminosity: string;
  agglomeration: string;
  atmospheric: string;
  intersection: string;  
  collision: string;
  place_id: number;

  constructor(accident: Accident) {
    // Mapping
    this.accident_id = accident.accident_id;
    this.accident_date = accident.accident_date;
    this.luminosity = accident.luminosity;
    this.agglomeration = accident.agglomeration;
    this.atmospheric = accident.atmospheric;
    this.intersection = accident.intersection;
    this.collision = accident.collision;
    this.place_id = accident.place_id;
  }
}