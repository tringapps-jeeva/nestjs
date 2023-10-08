import { Injectable } from '@nestjs/common';
import { createuserdto } from './dto/createuser.dto';
import { UpdateUserdto } from './dto/updateuser.dto';
import { Repository } from 'typeorm';
import { User } from './entity/uesr.entity';
import { InjectRepository } from '@nestjs/typeorm';

let msg;
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRespository: Repository<User>,
  ) {}
  getUser(): Promise<User[]> {
    console.log(this.userRespository);
    return this.userRespository.find();
  }
  createUser(Createuserdto: createuserdto) {
    console.log(Createuserdto);
    return this.userRespository.save(Createuserdto);
  }

  getaUser(id: number): Promise<User> {
    return this.userRespository.findOne({ where: { id } });
  }
  updateUser(UpdateUserdto: UpdateUserdto, id: number) {
    return this.userRespository.update(id, UpdateUserdto);
  }
  findbymail(emailid: string) {
    return this.userRespository.findOne({ where: { emailid } });
  }
}
