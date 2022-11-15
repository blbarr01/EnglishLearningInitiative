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
}

