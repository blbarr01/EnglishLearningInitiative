import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Card } from 'src/app/shared/models';
import { DecksService } from 'src/app/shared/services/decks.service';
import { CardService } from 'src/app/shared/services/card.service';
import { AngularFireModule } from '@angular/fire/compat';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fruits:Card[] = []
  tools:Card[] = []
  medical:Card[] = []

  constructor(private router: Router, private ds: DecksService) { 
  }

  sub: Subscription = Subscription.EMPTY
  cardSub:Subscription = Subscription.EMPTY
  showGame(){
    this.router.navigateByUrl("/game");
  }
  
  showLearn(){
    this.router.navigateByUrl("/learn");
  }

  showTest(){
    this.router.navigateByUrl("/test");
  }

  showTalkToText(){
    this.router.navigateByUrl("/speech");
  }

  showMe(){
    console.log("you clicked me");
    console.log(this.fruits);
    
  }

  ngOnInit(): void {
    this.sub = this.ds.deck$.subscribe((d) => {
      // console.log(this.ds);
      this.fruits = this.ds.decks[0].cards
      this.medical = this.ds.decks[1].cards
      this.tools = this.ds.decks[2].cards

    })
    
    
    
  }
}


