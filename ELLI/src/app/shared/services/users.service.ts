import { Injectable } from '@angular/core';
import { User } from '../models';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

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
  constructor(private fireAuth : AngularFireAuth, private router: Router) {}

  login(email : string, password : string){
    this.fireAuth.signInWithEmailAndPassword(email,password).then( () => {
        alert('Login Successful');
        localStorage.setItem('token', 'true');
        this.router.navigate(['/home']);
  }, err => {
        //alert('Somthing went wrong');
        alert(err.message);
        this.router.navigate(['/login']);
  })
  }

  signup(email : string, password : string){
    this.fireAuth.createUserWithEmailAndPassword(email,password).then( () => {
        alert('Sign-up Successful');
        localStorage.setItem('token', 'true');
        this.router.navigate(['/login']);
  }, err => {
        alert(err.message);
        this.router.navigate(['/signup']);
  })
  }

  logout(){
    this.fireAuth.signOut().then( () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
  }, err => {
        alert(err.message);
  })
  }

  getUsers(): User[]{
    return this.users;
  }
}
