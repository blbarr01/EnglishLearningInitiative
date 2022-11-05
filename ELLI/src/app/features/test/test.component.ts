import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private router: Router) { 
  }
  
  showHome(){
    this.router.navigateByUrl("");
  }
  ngOnInit(): void {
  }

}
