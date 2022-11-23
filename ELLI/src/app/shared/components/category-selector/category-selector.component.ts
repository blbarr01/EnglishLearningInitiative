import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { DecksService } from '../../services/decks.service';

interface ButtonOptions{
  button:number;
}

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.css']
})
export class CategorySelectorComponent implements OnInit {
  
  categories: string[] = [];
  constructor(private categoriesService: CategoriesService, private deckService: DecksService) { }

  ngOnInit(): void {
    this.categories = this.categoriesService.getCategories();
  }

  updateQuiz(cat: string){
    this.deckService.filterByCategory(cat);
  }

}
