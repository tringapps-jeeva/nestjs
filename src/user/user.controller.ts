import { Body, Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { createuserdto } from './dto/createuser.dto';
import { UpdateUserdto } from './dto/updateuser.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUser() {
    return this.userService.getUser();
  }
  @Post()
  createUser(@Body() Createuserdto: createuserdto) {
    console.log('_______', Createuserdto);
    return this.userService.createUser(Createuserdto);
  }
  @Get('/:id')
  getaUser(@Param('id') id:number) {
    // console.log("id",id)
    return this.userService.getaUser(id);
  }

  @Patch('/:id')
  updateUser(
    @Body() updateuserdto: UpdateUserdto,
    @Param('id') id:number,
  ) {
    console.log("id",id)
    console.log("body",updateuserdto)
    return this.userService.updateUser(updateuserdto, id);
  }
}
