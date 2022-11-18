import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
f: any;
Id: any;
loading: any;
onSubmit() {
throw new Error('Method not implemented.');
}
submitted: any;

  constructor(private router: Router) { 
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
