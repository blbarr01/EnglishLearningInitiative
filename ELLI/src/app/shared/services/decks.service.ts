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
          keyWord: 'Banana',
          image: 'assets/images/banana.png',
          audio: '',
        },
        {
          keyWord: 'Apple',
          image: 'assets/images/apple.png',
          audio: '',
        },
        {
          keyWord: 'Orange',
          image: 'assets/images/orange.png',
          audio: '',
        },
        {
          keyWord: 'Pear',
          image: 'assets/images/pear.png',
        },
        {
          keyWord: 'Strawberry',
          image: 'assets/images/strawberry.png',
        },
        {
          keyWord: 'Watermelon',
          image: 'assets/images/watermelon.png',
        },
        {
          keyWord: 'Cantelope',
          image: 'assets/images/cantelope.png',
        },
        {
          keyWord: 'Kiwi',
          image: 'assets/images/kiwi.png',
        },
        {
          keyWord: 'Cherry',
          image: 'assets/images/cherry.png',
        },
        {
          keyWord: 'Peach',
          image: 'assets/images/peach.png',
        },
        {
          keyWord: 'Pineapple',
          image: 'assets/images/pineapple.png',
        },
        {
          keyWord: 'Blueberry',
          image: 'assets/images/blueberry.png',
        },
      ],
    },
    {
      deckTitle: 'Medical',
      cards: [
        {
          keyWord: 'Ambulance',
          image: 'assets/images/ambulance.png',
          audio: '',
        },
        {
          keyWord: 'Doctor',
          image: 'assets/images/doctor.png',
          audio: '',
        },
        {
          keyWord: 'Medicine',
          image: 'assets/images/medicine.png',
          audio: '',
        },
        {
          keyWord: 'Bone',
          image: 'assets/images/bone.png',
          audio: '',
        },
        {
          keyWord: 'Arm',
          image: 'assets/images/arm.png',
          audio: '',
        },
        {
          keyWord: 'Leg',
          image: 'assets/images/leg.png',
          audio: '',
        },
        {
          keyWord: 'Head',
          image: 'assets/images/head.png',
          audio: '',
        },
        {
          keyWord: 'Hand',
          image: 'assets/images/hand.png',
          audio: '',
        },
        {
          keyWord: 'Finger',
          image: 'assets/images/finger.png',
          audio: '',
        },
        {
          keyWord: 'Foot',
          image: 'assets/images/foot.png',
          audio: '',
        },
        {
          keyWord: 'Hot',
          image: 'assets/images/hot.png',
          audio: '',
        },
        {
          keyWord: 'Cold',
          image: 'assets/images/cold.png',
          audio: '',
        },
      ],
    },
    {
      deckTitle: 'Forgot',
      cards: [
        {
          keyWord: '',
          image: '',
          audio: '',
        },
        {
          keyWord: '',
          image: '',
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
    // console.log(category);
    let deck = this.decks.filter((d) => d.deckTitle === category)[0];
    this.deckSubject.next(deck);
  }
}
