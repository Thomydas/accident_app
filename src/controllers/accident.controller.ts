/* eslint-disable prettier/prettier */
//#region Imports
import { Controller, Get, /*Query*/ } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { AccidentIndexDTO } from 'src/dto/accident';
import { Accident } from 'src/entities/accident';
import { Holyday } from 'src/entities/holyday';
import { Person } from 'src/entities/person';
import { Place } from 'src/entities/place';
import { Vehicle } from 'src/entities/vehicle';
import { Repository } from 'typeorm';
//#endregion

@Controller('accident')
export class AccidentControler {
  logger: any;

  constructor(
    @InjectRepository(Accident)
    private accidentRepository: Repository<Accident>,
    @InjectRepository(Holyday)
    private holydayRepository: Repository<Holyday>,
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
    @InjectRepository(Place)
    private placeRepository: Repository<Place>,
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  @Get()
  async getAllAccidents() {
    console.log('Loading data...');

    const result = await this.accidentRepository
      .createQueryBuilder('a')
      .select('COUNT(a.accident_id)', 'countAll')
      .getRawOne();

    console.log('Data loaded : ', result);

    return result;
  }


  @Get('by-luminosity')
  async getByLuminosity() {
    console.log('Loading data...');

    const result = await this.accidentRepository
      .createQueryBuilder('a')
      .select('a.luminosity', 'luminosity')
      .addSelect('COUNT(a.accident_id)', 'count')
      .groupBy('a.luminosity')
      .getRawMany();

    console.log('Data loaded : ', result);

    return result;
  }

  @Get('by-atmospheric')
  async getAccidentByAtmospheric() {
    console.log('Loading data...');

    const result = await this.accidentRepository
      .createQueryBuilder('a')
      .select('a.atmospheric', 'atmospheric')
      .addSelect('COUNT(a.accident_id)', 'count')
      .groupBy('a.atmospheric')
      .getRawMany();
    
    console.log('Data loaded : ', result);
    
    return result;
  }

  @Get('by-agglomeration')
  async getAccidentByAgglomeration() {
    const result = await this.accidentRepository
      .createQueryBuilder('a')
      .select('a.agglomeration', 'agglomeration')
      .addSelect('COUNT(a.accident_id)', 'count')
      .groupBy('a.agglomeration')
      .getRawMany();

    console.log('Data loaded : ', result);

    return result;
  }

  @Get('by-pCirculation')
  async getByPlaceCirculation() {
    console.log('Loading data...');

    const result = await this.accidentRepository
      .createQueryBuilder('a')
      .select('p.circulation', 'circulation')
      .addSelect('COUNT(a.accident_id)', 'count')
      .innerJoin('a.place', 'p', 'a.place_id = p.place_id')
      .groupBy('p.circulation')
      .getRawMany();

    console.log('Data loaded : ', result);

    return result;
  }

  @Get('by-persGravity')
  async getByGravity() {
    const result = await this.accidentRepository
      .createQueryBuilder('a')
      .select('pers.gravity', 'gravity')
      .addSelect('COUNT(a.accident_id)', 'count')
      .innerJoin('a.participer', 'pa', 'a.accident_id = pa.accident_id')
      .innerJoin('pa.persons', 'pers', 'pa.person_id = pers.person_id')
      .groupBy('pers.gravity')
      .getRawMany();

    return result;
  }

  // @Get('by-persGravity')
  // async getByGravity() {
  //   console.log('Loading data...');
    
  //   const result = await this.accidentRepository
  //     .findOne({
  //       where: {
  //         accident_id: '200500000001'
  //       }, relations: ['persons']
  //     })
      

  //   console.log('Data loaded : ', result);
    
  //   return result;
  // }
}