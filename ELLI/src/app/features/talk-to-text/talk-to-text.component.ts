import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { useDeviceLanguage } from 'firebase/auth';
import { SpeechRecognition } from 'web-speech-api';

declare interface SpeechRecognition {
  lang: string;
  interimResults: boolean;
  start(): void;
  stop(): void;
  addEventListener(
    type: 'result',
    listener: (event: SpeechRecognitionResultEvent) => void
  ): void;
  addEventListener(type: 'end', listener: () => void): void;
}

@Component({
  selector: 'app-talk-to-text',
  templateUrl: './talk-to-text.component.html',
  styleUrls: ['./talk-to-text.component.css']
})
export class TalkToTextComponent implements OnInit {
  public interimTranscript: string = '';
  public finalTranscript: string = '';
  public isRecording: boolean = false;
  private recognition!: SpeechRecognition;
  private texts!: HTMLDivElement;


  constructor(private router: Router) { 
  }

  ngOnInit(): void {
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = true;

    let p = document.createElement("p");

    this.recognition.addEventListener("result", (e: SpeechRecognitionEvent) => {
      this.texts.appendChild(p);
      const text = Array.from(e.results as Iterable<any>)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

      p.innerText = text;
      if (e.results[0].isFinal) {
        if (text.includes("how are you")) {
          p = document.createElement("p");
          p.classList.add("replay");
          p.innerText = "I am fine";
          this.texts.appendChild(p);
        }
        if (
          text.includes("what's your name") ||
          text.includes("what is your name")
        ) {
          p = document.createElement("p");
          p.classList.add("replay");
          p.innerText = "My Name is Cifar";
          this.texts.appendChild(p);
        }
        if (text.includes("open my YouTube")) {
          p = document.createElement("p");
          p.classList.add("replay");
          p.innerText = "opening youtube channel";
          this.texts.appendChild(p);
          console.log("opening youtube");
          window.open("https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ");
        }
        p = document.createElement("p");
      }
    });

    this.recognition.addEventListener("end", () => {
      this.recognition.start();
    });

    this.recognition.start();
  }
  
}

