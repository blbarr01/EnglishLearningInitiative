import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Deck } from 'src/app/shared/models';
import { DecksService } from 'src/app/shared/services/decks.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit, OnDestroy {
  gameDeck: any;
  deckSub: Subscription = Subscription.EMPTY;

  constructor(private router: Router, private decksService: DecksService) {}
 
  showHome(){
    this.router.navigateByUrl("");
  }

  ngOnInit(): void {
    this.deckSub = this.decksService.deck$.subscribe((d) => {
      this.gameDeck = d;
    })    
  }

  ngOnDestroy(): void {
    this.deckSub?.unsubscribe();
  }

  counter: number = 60;


  runCounter(){
  }
  
}
