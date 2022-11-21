import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  counter: number = 60;
  constructor(private router: Router) {}
 
  showHome(){
    this.router.navigateByUrl("");
  }

  hardMode(): void{
    this.counter = 20;
  }
  
  mediumMode(): void{
    this.counter = 40;
  }

  EasyMode(): void{
    this.counter = 60;
  }
  
  ngOnInit(): void {}
}
