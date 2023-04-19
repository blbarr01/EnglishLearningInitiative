import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-verb-conjugation',
  templateUrl: './verb-conjugation.component.html',
  styleUrls: ['./verb-conjugation.component.css']
})
export class VerbConjugationComponent implements OnInit {

  practiceForm!: FormGroup;
  constructor(private router: Router) { }

  ngOnInit(): void {


  }
  userAnswers = {
    1:"",
    2:"",
    3:"",
    4:"",
    5:""
  }; 
  answerKey = {
    1:"am",
    2:"are",
    3:"is",
    4:"are",
    5:"are"
  }
  slideText  ={
    "past": "I studied",
    "present": "I study",
    "future": "I will study"
  }
  displaytext:string = this.slideText["past"]  

  changeDisplayText(input:string):void{
    this.displaytext = input
   }

   showDashboard(){
    this.router.navigateByUrl("/lessons")
  }
   logAnswers(){
    console.log(this.userAnswers);
    
   }
}
