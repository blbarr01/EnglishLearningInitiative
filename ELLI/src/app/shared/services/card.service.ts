import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collectionData, } from '@angular/fire/firestore';
import { Card } from '../models/Deck';
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private firestore : Firestore = inject(Firestore)
  private cards$: Observable<Card[]>
  constructor() {
    const cardCollection = collection(this.firestore,'cards')
    
    this.cards$ = collectionData(cardCollection) as Observable <Card[]>
  }

  getCards(): Observable<Card[]> {
    return this.cards$  
  }

}
