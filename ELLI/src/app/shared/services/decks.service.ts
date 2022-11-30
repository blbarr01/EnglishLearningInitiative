import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Card, Deck } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DecksService {
  decks: Deck[] = [
    {
      deckTitle: 'Fruits',
      cards: [
        {
          keyWord: 'bananna',
          image: 'assets/images/banana.png',
          audio: '',
        },
        {
          keyWord: 'apple',
          image: 'assets/images/apple.png',
          audio: '',
        },
        {
          keyWord: 'orange',
          image: 'assets/images/orange.png',
          audio: '',
        },
        {
          keyWord: 'pear',
          image: 'assets/images/pear.png',
        },
        {
          keyWord: 'strawberry',
          image: 'assets/images/strawberry.png',
        },
        {
          keyWord: 'watermelon',
          image: 'assets/images/watermelon.png',
        },
        {
          keyWord: 'cantelope',
          image: 'assets/images/cantelope.png',
        },
        {
          keyWord: 'kiwi',
          image: 'assets/images/kiwi.png',
        },
        {
          keyWord: 'cherry',
          image: 'assets/images/cherry.png',
        },
        {
          keyWord: 'peach',
          image: 'assets/images/peach.png',
        },
        {
          keyWord: 'pineapple',
          image: 'assets/images/pineapple.png',
        },
        {
          keyWord: 'blueberry',
          image: 'assets/images/blueberry.png',
        },
      ],
    },
    {
      deckTitle: 'Medical',
      cards: [
        {
          keyWord: 'ambulance',
          image: 'assets/images/ambulance.png',
          audio: '',
        },
        {
          keyWord: 'doctor',
          image: 'assets/images/doctor.png',
          audio: '',
        },
        {
          keyWord: 'medicine',
          image: 'assets/images/medicine.png',
          audio: '',
        },
        {
          keyWord: 'bone',
          image: 'assets/images/bone.png',
          audio: '',
        },
        {
          keyWord: 'arm',
          image: 'assets/images/arm.png',
          audio: '',
        },
        {
          keyWord: 'leg',
          image: 'assets/images/leg.png',
          audio: '',
        },
        {
          keyWord: 'head',
          image: 'assets/images/head.png',
          audio: '',
        },
        {
          keyWord: 'hand',
          image: 'assets/images/hand.png',
          audio: '',
        },
        {
          keyWord: 'finger',
          image: 'assets/images/finger.png',
          audio: '',
        },
        {
          keyWord: 'foot',
          image: 'assets/images/foot.png',
          audio: '',
        },
        {
          keyWord: 'hot',
          image: 'assets/images/hot.png',
          audio: '',
        },
        {
          keyWord: 'cold',
          image: 'assets/images/cold.png',
          audio: '',
        },
      ],
    },
    //TODO: Hard CODED test data here
  ];

  private deckSubject = new BehaviorSubject<Deck>(this.decks[0]);
  public deck$ = this.deckSubject.asObservable();

  constructor() {}

  filterByCategory(category: string): void {
    console.log(category);
    let deck = this.decks.filter((d) => d.deckTitle === category)[0];
    this.deckSubject.next(deck);
  }
}
