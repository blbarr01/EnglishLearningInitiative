import { Injectable } from '@angular/core';
import { Deck } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor() {}

  getCategories(): string[] {
    return ['Fruits', 'Medical'];
  }
}
