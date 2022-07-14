import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {id: 1, name: 'Nabendu', username: 'nabs82', password: 'pass123'},
        {id: 2, name: 'Shikha', username: 'shikha82', password: 'pass345'},
        {id: 3, name: 'Hriday', username: 'hriday13', password: 'pass678'},
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
