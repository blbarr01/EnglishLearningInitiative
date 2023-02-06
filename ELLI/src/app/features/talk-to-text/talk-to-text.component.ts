import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-talk-to-text',
  templateUrl: './talk-to-text.component.html',
  styleUrls: ['./talk-to-text.component.css']
})
export class TalkToTextComponent implements OnInit {

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

}

  // Start recognition