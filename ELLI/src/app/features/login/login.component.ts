import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = '';
  password : string = '';

  constructor(private router: Router,private usersService: UsersService) { 
  }
  
  login(){
    if(this.email == ''){
      alert('Please enter email');
      return
    }

    if(this.password == ''){
      alert('Please enter password');
      return
    }

    this.usersService.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }
  
  showHome(){
    this.router.navigateByUrl("");
  }

  showSignup(){
    this.router.navigateByUrl("/signup");
  } 
  
  ngOnInit(): void {
  }
}
