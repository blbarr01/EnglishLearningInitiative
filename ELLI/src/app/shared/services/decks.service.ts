import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Card, Deck} from '../models'


@Injectable({
  providedIn: 'root'
})
export class DecksService {
  
  

  decks: Deck[] = [
    {
      deckTitle: "Fruits",
      cards: [
        {
          keyWord: "bananna",
          image: "https://via.placeholder.com/150",
          audio: "",
        }
      ],

    },
    {
      deckTitle: "Sports",
      cards: [
        {
          keyWord: "baseball",
          image: "https://via.placeholder.com/150",
          audio: "",
        }
      ]
    }
    //TODO: Hard CODED test data here
  ];

  private deckSubject = new BehaviorSubject<Deck>(this.decks[0]);
  public deck$ = this.deckSubject.asObservable();


  
  
  constructor() {}

  filterByCategory(category: string): void{
    console.log(category);
    let deck = this.decks.filter((d) => d.deckTitle === category)[0];
    this.deckSubject.next(deck);
  }
}
