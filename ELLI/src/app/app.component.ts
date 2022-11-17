import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ELLI';
  constructor(private router: Router) {}

  showLogin(){
    this.router.navigateByUrl("/login");
  }
<<<<<<< HEAD
=======
  showHome(){
    this.router.navigateByUrl("");
  }
>>>>>>> 354e2b38e895474f6dd7a9f08b8d3f9d5d8e39bc
}

