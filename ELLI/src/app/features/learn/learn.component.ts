import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface words = {
  name: string
  
}

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css'],
})
export class LearnComponent implements OnInit {
  constructor(private router: Router) {}

  terms = [
    {
      word: 'Apple',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDaaKrZaoxww5T_YGHlPuW_vwqGAociPcqBQ&usqp=CAU',
    },
  ];

  flipped = false;
  imgSrc =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkL8GlKZ775j3f0VVgS1rU8L2LoX5UEM6fKv_eGLzeza27WYH';

  toggle() {
    this.flipped = !this.flipped;
  }

  showHome() {
    this.router.navigateByUrl('');
  }

  ngOnInit(): void {}
}
