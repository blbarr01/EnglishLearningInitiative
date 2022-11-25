import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appendFile } from 'fs/promises';

 
interface Quiz{
  quizNumber:number;
  question: string;
  answer:  {option:string, correct: boolean} [];
}


interface arrr{
  button:number;
}


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 
  constructor(private router: Router) { 
  }
   buttons: arrr[] = [{button:1},{button:2},{button:3},{button:4},{button:5},{button:6}];

  ngOnInit(): void {
    this.CurrentCategory = this.quizzes;
  }

  isCorrect: boolean=false;
  isInCorrect:boolean=false;
  CurrentCategory:any;
  questionCorrect:number=0;
  answerSelected=false;
  currentQuiz = 0;

  quizzes: Quiz[] = [
    {
          quizNumber:1,
          question: "which one of these is apple",
          answer :[
           { option:'spple',correct: false},//pull a random image not equal to correct image from array of images(option.[index] if equal call function againif not set and counter++)
           //run as long as coutner is less than 4=> so we can populate the answer chocies 
           { option:'appppplee',correct: false},//pull a random image not equal to correct image
           { option:'apple',correct: true}// correct image
          ]
        },
        {
          quizNumber:2,
          question: "which one of these is grape",
          answer :[
            { option:'grape',correct: true},
            { option:'graaaep',correct: false},
            { option:'srape',correct: false}
          ]
        },
  
        {
          quizNumber:1,
          question: "which one of these is a ball",
          answer :[
            { option:'ball',correct: true},
            { option:'bounce',correct: false},
            { option:'red',correct: false}
          ]
        },
  
  ]
    
updateQuiz(i:number){
   this.CurrentCategory = this.quizzes.filter((Category)=>
  {
return Category.quizNumber===i;//hard coded but will make quiz choice dynamic 
  });
}

  answerStatus(option:boolean)
  {
    setTimeout(() => {
      this.currentQuiz++;
      this.answerSelected=false;
      this.isCorrect =false;
      this.isInCorrect=false;
    }, 2000);
    this.answerSelected=true;

    if(option===true)
    {
      this.isCorrect=true;
      this.questionCorrect++;
    }
    else
    this.isInCorrect=true;
    }
  }

