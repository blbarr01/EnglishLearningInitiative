import { Injectable } from '@angular/core';
import { User } from '../models';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth'

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
  constructor(private fireauth : AngularFireAuth, private router : Router) {}//private router : Router) { }
  
  login(email : string, password : string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( () => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/home']);
  }, err => {
        alert(err.message);
        this.router.navigate(['/login']);
  })
  }

  signup(email : string, password : string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then( () => {
        alert('Sign-up Successful');
        localStorage.setItem('token', 'true');
        this.router.navigate(['/login']);
  }, err => {
        alert(err.message);
        this.router.navigate(['/signup']);
  })
  }

  logout(){
    this.fireauth.signOut().then( () => {
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
