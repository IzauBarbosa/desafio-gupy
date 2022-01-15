import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('accounts')
export class AccountEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 120 })
  name: string;

  @Column('varchar', { length: 255, unique: true })
  email: string;

  @Column('varchar', { length: 255 })
  password: string;

  @Column('varchar', { length: 30 })
  type: "candidate" | "interviewer" | "recruiter";
}
