import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { Deck } from 'src/app/shared/models';
import { DecksService } from 'src/app/shared/services/decks.service';
import {cloneDeep} from 'lodash-es';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit, OnDestroy {
  index: number = 0;
  gameMode: number = 1;
  gameDeck: any;
  tempGameDeck: any;
  answer: string = '';
  counter: number = 40;
  displayOutput: string = '';
  deckSub: Subscription = Subscription.EMPTY;
  clockSub: Subscription = Subscription.EMPTY;

  constructor(private router: Router, private decksService: DecksService) {}
 
  showHome(){
    this.router.navigateByUrl("");
  }

  ngOnInit(): void {
    this.deckSub = this.decksService.deck$.subscribe((d) => {
      this.gameDeck = d;
      this.tempGameDeck = cloneDeep(this.gameDeck);
    }); 
    this.displayOutput = this.counter.toString(); 

  }

  ngOnDestroy(): void {
    this.deckSub?.unsubscribe();
    this.clockSub?.unsubscribe();
  }

  


  startGame(){    
      const clock$ = interval(1000)
      this.clockSub = clock$.subscribe((t)=> {
          this.counter -= 1;
          if(this.counter <= 0){
            this.displayOutput = "Game Over";
            this.resetGame();
          } else {
            this.displayOutput = this.counter.toString();
          }
      })
  }

  resetGame(){
    this.index = 0;
    this.clockSub?.unsubscribe();
    if(this.gameMode === 3){
      this.hardMode();
    } else if (this.gameMode === 2) {
      this.mediumMode();
    } else {
      this.easyMode();
    }
  }

  skipCard(){
    this.counter -= 5;
    if(this.counter <= 0){
      this.displayOutput = "Game Over";
    } else {
      this.displayOutput = this.counter.toString();
      this.index++;

      if(this.index === this.tempGameDeck.length()){
        this.index = 0;
      }
    } 
  }

  submitAnswer(){
    this.answer = this.answer.trim().toLowerCase();
    this.index++;

    if(this.answer === this.tempGameDeck[this.index].keyWord){
      this.counter += 2;
      this.displayOutput = this.counter.toString();
      this.tempGameDeck.splice(this.index - 1,1);
      this.index--;
      
    } else if(this.tempGameDeck.length() === this.index){
      this.index = 0;
    }
  }
  

  hardMode(){
    this.counter = 20;
    this.displayOutput = this.counter.toString();
    this.gameMode = 3;
  }

  mediumMode(){
    this.counter = 30;
    this.displayOutput = this.counter.toString();
    this.gameMode = 2;
  }

  easyMode(){
    this.counter = 40;
    this.displayOutput = this.counter.toString();
    this.gameMode = 1;
  } 
}
