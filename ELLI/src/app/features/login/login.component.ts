import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
submitted: any;
f: any;
loading: any;
onSubmit() {
throw new Error('Method not implemented.');
}
form: any;

  constructor(private router: Router) { 
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
