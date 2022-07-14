import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService){}

    async validateUser(username: string, passowrd: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if(user && user.password === passowrd){
            const { password, username, ...rest } = user;
            return rest;
        }
        return null;
    }
}
