import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email : string = '';
  password : string = '';

  constructor(private router: Router ,private usersService: UsersService) { 
  }

  signup(){
    if(this.email == ''){
      alert('Please enter email');
      return
    }

    if(this.password == ''){
      alert('Please enter password');
      return
    }

    this.usersService.signup(this.email, this.password);

    this.email = '';
    this.password = '';
  }

  showLogin(){
    this.router.navigateByUrl("/login");
  }

  showHome(){
    this.router.navigateByUrl("");
  }

  ngOnInit(): void {
  }

}
