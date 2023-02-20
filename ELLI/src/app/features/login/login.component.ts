import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private usersService: UsersService) { 
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
