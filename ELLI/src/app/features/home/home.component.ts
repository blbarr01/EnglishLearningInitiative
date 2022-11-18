import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { 
  }

  showGame(){
    this.router.navigateByUrl("/game");
  }
  
  showLearn(){
    this.router.navigateByUrl("/learn");
  }

  showTest(){
    this.router.navigateByUrl("/test");
  }

  showTalkToText(){
    this.router.navigateByUrl("/speech");
  }

  ngOnInit(): void {
  }

}
