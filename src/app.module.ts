/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccidentControler } from './controllers/accident.controller';
import { AppService } from './app.service';
import { Holyday } from './entities/holyday';
import { Person } from './entities/person';
import { Place } from './entities/place';
import { Vehicle } from './entities/vehicle';
import { Accident } from './entities/accident';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa', // Nom d'utilisateur de la base de donnée et pas ssms. Bisous
      password: 'P@ssw0rd123!', // Mot de passe SSMS
      database: 'accidentDB', // Nom de la base de données
      entities: [Person, Holyday, Place, Vehicle, Accident],
      // synchronize: true,
      options: {
        encrypt: false
      }
    }), // PQ ???
    TypeOrmModule.forFeature([Person, Holyday, Place, Vehicle, Accident]),
  ],
  controllers: [AccidentControler],
  providers: [AppService],
})
export class AppModule {}
