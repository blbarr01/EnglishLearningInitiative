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
  constructor(private router: Router, private decksService: DecksService) { 
  }



  getOptions()
  {
    let randomElement = Math.floor(Math.random()*4);
     this.options =this.gameDeck.cards[randomElement].image;
      if(this.gameDeck.cards[this.i].image !==  this.options)
      console.log( this.options);
      else
      this.getOptions();
  }

pop()
{
  this.getOptions();
 
}
    currentAnswer:any;
     options:any=0;
     options2:any;

  ngOnInit(): void {
    this.CurrentCategory = this.quizzes;
    this.deckSub = this.decksService.deck$.subscribe((d) => {
      this.gameDeck = d;
      
    }) 
  }
  i:number=0;
  isCorrect: boolean=false;
  isInCorrect:boolean=false;
  CurrentCategory:any;
  questionCorrect:number=0;
  answerSelected=false;
  currentQuiz = 0;

  quizzes:any = [
    {
          answer :[
           { option:'spple',correct: false},//pull a random image not equal to correct image from array of images(option.[index] if equal call function againif not set and counter++)
           //run as long as coutner is less than 4=> so we can populate the answer chocies 
           { option:'appppplee',correct: false},//pull a random image not equal to correct image
           { option:'apple',correct: true}// correct image
          ]
        },
        {
         
          answer :[
            { option:'grape',correct: true},
            { option:'graaaep',correct: false},
            { option:'srape',correct: false}
          ]
        },
  
        {
          answer :[
            { option:'ball',correct: true},
            { option:'bounce',correct: false},
            { option:'red',correct: false}
          ]
        },
  
  ]
  answerStatus(option:any)
  {
    setTimeout(() => {
      this.currentQuiz++;
      this.answerSelected=false;
      this.isCorrect =false;
      this.isInCorrect=false;
      this.i++;
      this.getOptions();
      
    }, 2000);
    this.answerSelected=true;

    if(option===this.gameDeck.cards[this.i].keyWord)
    {
      this.isCorrect=true;
      this.questionCorrect++;
      
    }
    else
    this.isInCorrect=true;
    }
  }

