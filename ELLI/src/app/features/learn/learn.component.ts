import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css'],
})
export class LearnComponent implements OnInit {
  constructor(private router: Router) {}

  name: String = 'Rohan';

  card: string = 'Flashcard';

  showHome() {
    this.router.navigateByUrl('');
  }

  ngOnInit(): void {}
}
