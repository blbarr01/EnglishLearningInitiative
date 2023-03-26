import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { useDeviceLanguage } from 'firebase/auth';


@Component({
  selector: 'app-talk-to-text',
  templateUrl: './talk-to-text.component.html',
  styleUrls: ['./talk-to-text.component.css']
})
export class TalkToTextComponent implements OnInit {
  public interimTranscript: string = '';
  public finalTranscript: string = '';
  public isRecording: boolean = false;


  constructor(private router: Router) { 
  }

  ngOnInit(): void {

  }

  
}

