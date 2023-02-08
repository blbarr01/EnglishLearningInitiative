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
  showSignup(){
    this.router.navigateByUrl("/signup");
  }
  showHome(){
    this.router.navigateByUrl("");
  }
  showAbout(){
    this.router.navigateByUrl("/about")
    
  }
  showSiteMap(){
    this.router.navigateByUrl('/site-map')
  }
}

