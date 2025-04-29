import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Project } from '../../projects/entities/project.entity';
import { Investment } from '../../investments/entities/investment.entity';
import { Interest } from '../../interests/entities/interest.entity';
import { UserRole } from '../../common/enums/roles.enum';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.ENTREPRENEUR
  })
  role: UserRole;

  @OneToMany(() => Project, project => project.owner)
  projects: Project[];

  @OneToMany(() => Investment, (investment: Investment) => investment.investor)
  investments: Investment[];

  @ManyToMany(() => Interest)
  @JoinTable()
  interests: Interest[];
} 