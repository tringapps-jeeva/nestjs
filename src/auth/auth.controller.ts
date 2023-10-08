import { Body, Controller, Post } from '@nestjs/common';
import { loginUserdto } from './dto/loginUser.dto';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
    constructor(private userService : UserService){}
    @Post('login')
     async login(@Body() logindto: loginUserdto){
        console.log(logindto.emailid)
         const user = await this.userService.findbymail(logindto.emailid)
        if(user){
            if(user.password === logindto.password){
                return "successfully logined"
            }
            else{
                return "username or password may be wrong"
            }
        }
        else{
            return "user is not found"
        }
    }
}
