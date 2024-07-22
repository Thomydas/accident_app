/* eslint-disable prettier/prettier */

//#region Imports
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  PrimaryColumn,
} from 'typeorm';
import { Place } from './place';
import { Vehicle } from './vehicle';
import { Person } from './person';
//#endregion

//#region accident_table
@Entity()
export class Accident {
  @PrimaryColumn()
  accident_id: string;

  @Column()
  accident_date: Date;

  @Column()
  luminosity: string;

  @Column()
  agglomeration: string;

  @Column()
  atmospheric: string;

  @Column()
  intersection: string;

  @Column()
  collision: string;

  @Column()
  place_id: number;

  @ManyToOne(() => Place, place => place.accidents)
  @JoinColumn({ name: 'place_id' }) // Clé étrangère pour la jointure
  place: Place;

  @ManyToMany(() => Person, person => person.accidents)
  @JoinTable({
      name: 'participer', // Nom de la table de jointure
    joinColumn: {
      name: 'accident_id',
      referencedColumnName: 'accident_id'
    },
    inverseJoinColumn: {
      name: 'person_id',
      referencedColumnName: 'person_id'
    }
  })
  persons: Person[];

  @ManyToMany(() => Vehicle) // Joindre la table / class vehicle
  @JoinTable({ name: 'impliquer' }) // Créer automatiquement la table d'association impliquer
  vehicles: Vehicle[];
}
//#endregion