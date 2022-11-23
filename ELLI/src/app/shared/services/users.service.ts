import { Injectable } from '@angular/core';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
/***
 * 
 * this is the list of mock users for the login component 
 */

  users: User[] = [
  {
      email: "greg@gregisgreat.com",
      password: "aba"
  },
  {
      email: "foo@bar.com",
      password:"P@$$w0rd" 
  },
  {
      email: "adaca@aol.com",
      password:"test" 
  },
  {
      email: "test@test.com",
      password:"t3$t" 
  }
]
  constructor() { }

  getUsers(): User[]{
    return this.users;
  }
}
