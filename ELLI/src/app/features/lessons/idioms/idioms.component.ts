import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-idioms',
  templateUrl: './idioms.component.html',
  styleUrls: ['./idioms.component.css']
})
export class IdiomsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showDashboard(){
    this.router.navigateByUrl("/lessons")
  }
}
