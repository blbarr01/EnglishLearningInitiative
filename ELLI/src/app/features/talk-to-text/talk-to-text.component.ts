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
  public recognition: any;

  constructor(private router: Router) { }
  
  ngOnInit(): void {
    this.initializeRecognition();
  }

  initializeRecognition(): void {
    this.recognition = new (window as any).webkitSpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.onresult = (event: any) => {
      let interimTranscript = '';
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result: any = event.results[i];
        const transcript: string = result[0].transcript;
        if (result.isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }
      this.interimTranscript = interimTranscript;
      this.finalTranscript = finalTranscript;
      const inputElement = document.getElementById('typed-text') as HTMLInputElement;
      inputElement.value = finalTranscript;
    };
  }

  startRecognition() {
    this.recognition.start();
  }

  stopRecognition() {
    this.recognition.stop();
  }




  
}

