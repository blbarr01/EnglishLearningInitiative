import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private router: Router) {}
 
  showHome(){
    this.router.navigateByUrl("");
  }

  
  
  ngOnInit(): void {}

  counter: number = 60;

  runCounter(){
  }

}
