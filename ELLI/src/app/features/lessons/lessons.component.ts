import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  showPersons(){
    this.router.navigateByUrl("/lessons/persons");
  }
}
