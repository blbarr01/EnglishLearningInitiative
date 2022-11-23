import { Injectable } from '@angular/core';
import { Card, Deck} from '../models'


@Injectable({
  providedIn: 'root'
})
export class DecksService {
  
  decks: Deck[] = [
    //TODO: Hard CODED test data here
  ];

  deck: Deck = {deckTitle: 'Medical', cards: []};
  
  
  constructor() { }

  filterByCategory(category: string): void{

    //TODO: filter decks by the passed in category
  }
}
