import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appendFile } from 'fs/promises';
import { DecksService } from 'src/app/shared/services/decks.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  gameDeck: any;
  deckSub: Subscription = Subscription.EMPTY;
  isanswerSelected=false;
  isCategorySelector=true;
  isQuestionShowing=false;


  constructor(private router: Router, private decksService: DecksService) { 
  }


  randomElement:number=0;;
  getOption1()
  {
     this.randomElement = Math.floor(Math.random()*(this.gameDeck.cards.length));
     this.options =this.gameDeck.cards[this.randomElement].image;
      if(this.gameDeck.cards[this.j].image !== this.options)
      console.log( this.options);
      else
      {
      this.getOption1();
      }
      this.getOption2();
  } 

  getOption2()
  {
     this.randomElement = Math.floor(Math.random()*(this.gameDeck.cards.length));
     this.options2 =this.gameDeck.cards[this.randomElement].image;
      if(this.gameDeck.cards[this.j].image !==  this.options && this.gameDeck.cards[this.j].image !==  this.options2 &&this.options2!=this.options )
      {
        console.log( this.options2);
      }
      else
      this.getOption2();
  } 
  
pop()
{
  this.getOption1();
  this.isanswerSelected=true;
  this.isCategorySelector=false;
  this.isQuestionShowing=true;
 
}
randomElement2:any;
     options:any=0;
     options2:any;

  ngOnInit(): void {
  
    this.deckSub = this.decksService.deck$.subscribe((d) => {
      this.gameDeck = d;
      
    }) 
  }
  i:number=0;
  j:number=0;
  isCorrect: boolean=false;
  isInCorrect:boolean=false;

 
  
  
  tempanswer:any;
  
  answerStatus(option:any)
  {
    setTimeout(() => {
   
      this.isanswerSelected=true;
      this.isCorrect =false;
      this.isInCorrect=false;
      this.i++; 
    
    }, 2000);
    setTimeout(() => {
    this.j++;
      this.getOption1();
    }, 200);
    
    this.getOption1();
    this.isanswerSelected=false;

    if(option===this.gameDeck.cards[this.i].keyWord)
    {
      this.isCorrect=true; 
    }
    else
    {
      this.isCorrect=true;
    this.isInCorrect=true;
    this.tempanswer=option;
    
    }
  }

}