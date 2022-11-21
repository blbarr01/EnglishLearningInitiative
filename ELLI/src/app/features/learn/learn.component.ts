import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
interface Words {
  qnum: number;
  word: string;
  image: string;
}
interface Buttons {
  ButtonNumber: any;
}
@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css'],
})
export class LearnComponent implements OnInit {
  constructor(private router: Router) {}
  isCorrect: boolean = false;
  isInCorrect: boolean = false;
  CurrentCategory: any;
  questionCorrect: number = 0;
  answerSelected = false;
  currentQuiz = 0;
  currCard = 1;

  bottomNum: number = 1;

  terms: Words[] = [
    {
      qnum: 1,
      word: 'Apple',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDaaKrZaoxww5T_YGHlPuW_vwqGAociPcqBQ&usqp=CAU',
    },
    {
      qnum: 2,
      word: 'Bus',
      image:
        'https://image.shutterstock.com/image-vector/illustration-school-kids-riding-yellow-260nw-453788725.jpg',
    },
    {
      qnum: 3,
      word: 'Train',
      image:
        'https://st.depositphotos.com/1000135/3953/i/950/depositphotos_39533739-stock-photo-modern-train.jpg',
    },
    {
      qnum: 4,
      word: 'Paper',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS4ce0ncrUzAqlGT3XbZDc75r-yEHdwJYMaQ&usqp=CAU',
    },
    {
      qnum: 5,
      word: 'Computer',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuXxhuWBwzrHXB2Cpyy4FHCQZTCV7DD4QRGQ&usqp=CAU',
    },
    {
      qnum: 6,
      word: 'Ruler',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXW63eAbaxob3TMOTgIoVGr8v3k3T8upPAFw&usqp=CAU',
    },
  ];

  updateQuiz(i: number) {
    this.CurrentCategory = this.terms.filter((Word) => {
      return Word.qnum === i; //hard coded but will make quiz choice dynamic
    });
  }
  click() {
    this.currentQuiz++;
    this.questionCorrect++;
    this.bottomNum++;
    console.log(this.terms[this.currentQuiz].word);
    this.currCard++;
  }
  clickBack() {
    this.currentQuiz--;
    this.questionCorrect--;
    this.bottomNum--;
    this.currCard--;
  }

  ngOnInit(): void {}
}
