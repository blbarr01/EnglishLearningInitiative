import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { Deck } from 'src/app/shared/models';
import { DecksService } from 'src/app/shared/services/decks.service';
import { Subscription } from 'rxjs';
declare let speechSynthesis: any;

let fruits: string[] = [];

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
  //currCard is for the diplay
  currCard = 1;
  cardDeck: any;
  deckSub: Subscription = Subscription.EMPTY;
  i: number = 0;

  bottomNum: number = 1;

  terms: Words[] = [];

  //change star color
  toggle = true;
  status = 'Enable';
  // for changing back button to gray
  backToggle = true;
  backOpaque = 'Enable';
  //hard coded number will need to change to dynamic
  progress = 12;
  audio = new Audio();

  click() {
    // need to ask rohan about this condition
    if (this.i > this.cardDeck.cards.length - 2) {
    } else {
      // console.log(this.cardDeck.cards.length);
      this.bottomNum++;
      // console.log(this.terms[this.i].keyWord);
      this.currCard++;
      this.i++;
      this.progress += 100 / this.cardDeck.cards.length;
      // this.toggle = !this.toggle;
      // this.status = this.toggle ? 'Enable' : 'Disable';
    }
  }
  clickBack() {
    if (this.i < 1) {
    } else {
      this.bottomNum--;
      this.currCard--;
      this.i--;
      this.progress -= 100 / this.cardDeck.cards.length;
    }
  }

  saveWord() {
    // console.log(this.cardDeck.cards[this.i].keyWord);
    fruits.push(this.cardDeck.cards[this.i]);

    console.log(fruits);

    // // this.cardDeck.getCategories['Forgot'].push(
    // //   this.cardDeck.cards[this.i].keyWord
    // // );

    // console.log();
  }

  clickStar() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
    // console.log(this.cardDeck.cards[this.i].keyWord);]
    this.saveWord();
  }

  // plays sound
  playSound() {
    let audio = new Audio();
    audio.src = '../assets/alien_danger.wav';
    audio.load();
    audio.play();
  }
  speak() {
    const text = this.cardDeck.cards[this.i].term; // get the current card's key word
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
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
