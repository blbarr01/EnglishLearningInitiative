import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appendFile } from 'fs/promises';
import { DecksService } from 'src/app/shared/services/decks.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  gameDeck: any;
  deckSub: Subscription = Subscription.EMPTY;
  isanswerSelected:boolean = false;
  isCategorySelector:boolean = true;
  isQuestionShowing:boolean = false;
  isCorrect: boolean = false;
  isInCorrect: boolean = false;
  randomElement: number = 0;
  randomElement2: number = 0;
  allAnswers: string[] = [];
  correctCounter: number = 0;
  incorrectCounter: number = 0;
  options: any = 0;
  options2: any;
  i: number = 0;
  j: number = 0;
  tempanswer: any;
  tempCorrectanswer: any;

  ngOnInit(): void {
    this.deckSub = this.decksService.deck$.subscribe((d) => {
      this.gameDeck = d;
    });
  }

  constructor(private router: Router, private decksService: DecksService) {}
  pop() {
    this.getOption1();
    this.isanswerSelected = true;
    this.isCategorySelector = false;
    this.isQuestionShowing = true;
  }
  getOption1() {
    this.randomElement = Math.floor(Math.random() * this.gameDeck.cards.length);
    this.options = this.gameDeck.cards[this.randomElement].image;
    if (this.gameDeck.cards[this.j].image !== this.options) {
      this.allAnswers.push(this.gameDeck.cards[this.j].image);
      this.allAnswers.push(this.options);
    } else {
      this.getOption1();
    }

    this.getOption2();
  }

  getOption2() {
    this.randomElement2 = Math.floor(
      Math.random() * this.gameDeck.cards.length
    );
    this.options2 = this.gameDeck.cards[this.randomElement2].image;
    if (
      this.gameDeck.cards[this.j].image !== this.options &&
      this.gameDeck.cards[this.j].image !== this.options2 &&
      this.options2 != this.options
    ) {
      this.allAnswers.push(this.options2);
    } else {
      this.getOption2();
    }

    if (this.allAnswers.length != 3) {
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

    if (option === this.gameDeck.cards[this.i].image) {
      this.isCorrect = true;
      this.tempCorrectanswer = this.gameDeck.cards[this.i].image;
      this.correctCounter++;
    } else {
      this.isCorrect = true;
      this.isInCorrect = true;
      this.tempanswer = option;
      this.incorrectCounter++;
    }
  }
}
