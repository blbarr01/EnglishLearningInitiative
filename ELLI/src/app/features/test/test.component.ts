import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appendFile } from 'fs/promises';
import { DecksService } from 'src/app/shared/services/decks.service';
import {Card, Deck} from 'src/app/shared/models/Deck'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit, OnDestroy  {
  gameDeck:Deck = {deckTitle:"gameDeck", cards:[]} ;
  deckSub: Subscription = Subscription.EMPTY;
  isanswerSelected: boolean = false;
  isCategorySelector: boolean = true;
  isQuestionShowing: boolean = false;
  isCorrect: boolean = false;
  isInCorrect: boolean = false;
  randomElement: number = 0;
  randomElement2: number = 0;
  randomElement3: number = 0;
  allAnswers: string[] = [];
  correctCounter: number = 0;
  incorrectCounter: number = 0;
  options: any = 0;
  options2: any;
  options3: any = 0;
  i: number = 0;
  j: number = 0;
  tempanswer: any;
  tempCorrectanswer: any;
  
  constructor(private decksService: DecksService) {}
  
  //on in init we subscribe to the deck service
  ngOnInit(): void {
    this.deckSub = this.decksService.deck$.subscribe((d) => {
      this.gameDeck = d;
    });
    console.log("hello im loaded ?");
    
  }
  ngOnDestroy(): void {
    this.deckSub?.unsubscribe();
  }

  pop() {
    this.getOption1();
    this.isanswerSelected = true;
    this.isCategorySelector = false;
    this.isQuestionShowing = true;
  }

  getOption1() {
    let random:number = Math.floor(Math.random() * this.gameDeck.cards.length);
    this.options = this.gameDeck.cards[random].imageUrl;
    if (this.gameDeck.cards[this.j].imageUrl !== this.options) {
      this.allAnswers.push(this.gameDeck.cards[this.j].imageUrl);
      this.allAnswers.push(this.options);
    } else {
      this.getOption1();
    }

    this.getOption2();
  }
  progress = 0;
  eachPercent=0;
  getOption2() {
    this.randomElement2 = Math.floor(
      Math.random() * this.gameDeck.cards.length
    );
    this.options2 = this.gameDeck.cards[this.randomElement2].imageUrl;
    if (
      this.gameDeck.cards[this.j].imageUrl !== this.options &&
      this.gameDeck.cards[this.j].imageUrl !== this.options2 &&
      this.options2 != this.options
    ) {
      this.allAnswers.push(this.options2);
    } else {
      this.getOption2();
    }

    this.getOption3();
  }

  getOption3() {
    this.randomElement3 = Math.floor(
      Math.random() * this.gameDeck.cards.length
    );
    this.options3 = this.gameDeck.cards[this.randomElement3].imageUrl;
    if (
      this.gameDeck.cards[this.j].imageUrl !== this.options &&
      this.gameDeck.cards[this.j].imageUrl !== this.options2 &&
      this.gameDeck.cards[this.j].imageUrl !== this.options3 &&
      this.options2 != this.options &&
      this.options2 != this.options3 &&
      this.options != this.options3
    ) {
      this.allAnswers.push(this.options3);
    } else {
      this.getOption3();
    }

    if (this.allAnswers.length != 4) {
      this.allAnswers.length = 0;
      this.getOption1();
    } else this.allAnswers.sort((a, b) => 0.5 - Math.random());
  }

  answerStatus(option: any) {
    setTimeout(() => {
      this.isanswerSelected = true;
      this.isCorrect = false;
      this.isInCorrect = false;
      this.i++;
    }, 2000);
    setTimeout(() => {
      this.j++;
      this.getOption1();
    }, 500);

    this.isanswerSelected = false;

    if (option === this.gameDeck.cards[this.i].imageUrl) {
      this.isCorrect = true;
      this.tempCorrectanswer = this.gameDeck.cards[this.i].imageUrl;
      this.correctCounter++;
    } else {
      this.isCorrect = true;
      this.isInCorrect = true;
      this.tempanswer = option;
      this.incorrectCounter++;
    }
    this.eachPercent=100/this.gameDeck.cards.length;
    this.progress +=this.eachPercent;
  }
}
