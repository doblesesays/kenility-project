import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
    constructor() {}

    async validateUser(username: string, password: string): Promise<any> {
        // dummy validation
        if (username==="kenility" && password==="password") {
            const user = new User();
            return user;
        }
        return null;
    }
}