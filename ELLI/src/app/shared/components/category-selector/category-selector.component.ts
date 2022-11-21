import { Component, OnInit } from '@angular/core';

interface arrr {
  button: number;
}

@Component({
  selector: 'category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.css']
})
export class CategorySelectorComponent implements OnInit {
  selectedCategory: string = 'pick a category';

  categories = {
    0: 'none',
    1: 'medical terms',
    2: 'groceries',
    3: 'automobile'
  };

  constructor() {}

  buttons: arrr[] = [
    { button: 1 },
    { button: 2 },
    { button: 3 },
    { button: 4 },
    { button: 5 },
    { button: 6 }
  ];
  ngOnInit(): void {}
}
