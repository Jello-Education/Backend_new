import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("studentUsers")
class StudentUser {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  socialName: string;

  @Column()
  telephone: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  isAdmin: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { StudentUser };
