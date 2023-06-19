import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import argon2 from 'argon2';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @BeforeInsert()
  async before() {
    this.password = await argon2.hash(this.password);
  }
}
