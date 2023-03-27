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
  private recognition: SpeechRecognition;

  constructor(private router: Router) {
    this.recognition = new webkitSpeechRecognition();

    // Set recognition options
    this.recognition.continuous = true;
    this.recognition.interimResults = true;

    // Add event listeners
    this.recognition.onstart = () => {
      this.isRecording = true;
    };

    this.recognition.onerror = (event) => {
      console.error(event.error);
    };

    this.recognition.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }

      this.interimTranscript = interimTranscript;
      this.finalTranscript = finalTranscript;
    };

    this.recognition.onend = () => {
      this.isRecording = false;
    };
  }

  ngOnInit(): void {}

  // seech recognition started 
  start(){
    if(this.recognition) {
    this.recognition.start();}
  }

  // speech recognition stopped
  stop(){
  if(this.recognition) {
    this.recognition.stop();}
}
}