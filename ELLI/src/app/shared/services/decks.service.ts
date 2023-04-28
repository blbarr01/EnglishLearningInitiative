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
          category:'',
          term: 'Banana',
          image: 'assets/images/banana.png',
        },
        {
          category:'',
          term: 'Apple',
          image: 'assets/images/apple.png',
        },
        {
          category:'',
          term: 'Orange',
          image: 'assets/images/orange.png',
        },
        {
          category:'',
          term: 'Pear',
          image: 'assets/images/pear.png',
        },
        {
          category:'',
          term: 'Strawberry',
          image: 'assets/images/strawberry.png',
        },
        {
          category:'',
          term: 'Watermelon',
          image: 'assets/images/watermelon.png',
        },
        {
          category:'',
          term: 'Cantelope',
          image: 'assets/images/cantelope.png',
        },
        {
          category:'',
          term: 'Kiwi',
          image: 'assets/images/kiwi.png',
        },
        {
          category:'',
          term: 'Cherry',
          image: 'assets/images/cherry.png',
        },
        {
          category:'',
          term: 'Peach',
          image: 'assets/images/peach.png',
        },
        {
          category:'',
          term: 'Pineapple',
          image: 'assets/images/pineapple.png',
        },
        {
          category:'',
          term: 'Blueberry',
          image: 'assets/images/blueberry.png',
        },
      ],
    },
    {
      deckTitle: 'Medical',
      cards: [
        {
          category:'',
          term: 'Ambulance',
          image: 'assets/images/ambulance.png',
        },
        {
          category:'',
          term: 'Doctor',
          image: 'assets/images/doctor.png',
        },
        {
          category:'',
          term: 'Medicine',
          image: 'assets/images/medicine.png',
          
        },
        {
          category:'',
          term: 'Bone',
          image: 'assets/images/bone.png',
          
        },
        {
          category:'',
          term: 'Arm',
          image: 'assets/images/arm.png',
          
        },
        {
          category:'',
          term: 'Leg',
          image: 'assets/images/leg.png',
          
        },
        {
          category:'',
          term: 'Head',
          image: 'assets/images/head.png',
          
        },
        {
          category:'',
          term: 'Hand',
          image: 'assets/images/hand.png',
          
        },
        {
          category:'',
          term: 'Finger',
          image: 'assets/images/finger.png',
          
        },
        {
          category:'',
          term: 'Foot',
          image: 'assets/images/foot.png',
          
        },
        {
          category:'',
          term: 'Hot',
          image: 'assets/images/hot.png',
          
        },
        {
          category:'',
          term: 'Cold',
          image: 'assets/images/cold.png',
          
        },
      ],
    },
    {
      deckTitle: 'Forgot',
      cards: [
        {
          category:'',
          term: '',
          image: '',
          
        },
        {
          category:'',
          term: '',
          image: '',
          
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
