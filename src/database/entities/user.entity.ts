import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({type:'integer'})
   id: number;
 @Column({type:'varchar',length:250})
  name: string;
  @Column({type:'varchar',length:250})
  address: string;
  @Column({type:'varchar',length:250})
  email: string;
  @Column({type:'int'})
  ege: number;
}
