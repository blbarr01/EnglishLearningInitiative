import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Deck } from 'src/app/shared/models';
import { DecksService } from 'src/app/shared/services/decks.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  gameDeck: any;
  constructor(private router: Router, private decksService: DecksService) {}
 
  showHome(){
    this.router.navigateByUrl("");
  }

  ngOnInit(): void {
    this.gameDeck = this.decksService.deck;
  }

  counter: number = 60;

  runCounter(){
  }
  
}
