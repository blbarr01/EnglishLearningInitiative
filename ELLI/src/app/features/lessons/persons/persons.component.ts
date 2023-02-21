import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  constructor(private router: Router) { }

  showDashboard(){
    this.router.navigateByUrl("/lessons")
  }

  ngOnInit(): void {
  }

}
