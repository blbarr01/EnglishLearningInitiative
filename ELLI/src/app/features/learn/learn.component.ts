import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { Deck } from 'src/app/shared/models';
import { DecksService } from 'src/app/shared/services/decks.service';
import { Subscription } from 'rxjs';
interface Words {
  qnum: number;
  keyWord: string;
  image: string;
}
interface Buttons {
  ButtonNumber: any;
}
@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css'],
})
export class LearnComponent implements OnInit {
  constructor(private router: Router, private decksService: DecksService) {}
  currCard = 1;
  cardDeck: any;
  deckSub: Subscription = Subscription.EMPTY;
  i: number = 0;

  bottomNum: number = 1;

  terms: Words[] = [];

  click() {
    if (this.i > this.cardDeck.cards.length - 2) {
    } else {
      this.bottomNum++;
      // console.log(this.terms[this.i].keyWord);
      this.currCard++;
      this.i++;
    }
  }
  clickBack() {
    if (this.i < 1) {
    } else {
      this.bottomNum--;
      this.currCard--;
      this.i--;
    }
  }
  playAudio(url: string) {
    new Audio(url).play();
  }
  currDeck: number = 0;

  ngOnInit(): void {
    this.deckSub = this.decksService.deck$.subscribe((d) => {
      this.currDeck++;
      this.cardDeck = d;
      console.log(d.cards[this.i]);
      // this.click();
    });
  }
  ngOnDestroy(): void {
    this.deckSub?.unsubscribe();
  }
}
