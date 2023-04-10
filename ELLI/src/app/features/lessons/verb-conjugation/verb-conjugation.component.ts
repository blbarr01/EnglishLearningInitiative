import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-verb-conjugation',
  templateUrl: './verb-conjugation.component.html',
  styleUrls: ['./verb-conjugation.component.css']
})
export class VerbConjugationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
   
}
