import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Card, Deck } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DecksService {
  decks: Deck[] = [
    {
      deckTitle: 'Fruits',
      cards: [
        {
          category:'fruits',
          term: 'Banana',
          imageUrl: 'assets/images/banana.png',
        },
        {
          category:'fruits',
          term: 'Apple',
          imageUrl: 'assets/images/apple.png',
        },
        {
          category:'fruits',
          term: 'Orange',
          imageUrl: 'assets/images/orange.png',
        },
        {
          category:'fruits',
          term: 'Pear',
          imageUrl: 'assets/images/pear.png',
        },
        {
          category:'fruits',
          term: 'Strawberry',
          imageUrl: 'assets/images/strawberry.png',
        },
        {
          category:'fruits',
          term: 'Watermelon',
          imageUrl: 'assets/images/watermelon.png',
        },
        {
          category:'fruits',
          term: 'Cantelope',
          imageUrl: 'assets/images/cantelope.png',
        },
        {
          category:'fruits',
          term: 'Kiwi',
          imageUrl: 'assets/images/kiwi.png',
        },
        {
          category:'fruits',
          term: 'Cherry',
          imageUrl: 'assets/images/cherry.png',
        },
        {
          category:'fruits',
          term: 'Peach',
          imageUrl: 'assets/images/peach.png',
        },
        {
          category:'fruits',
          term: 'Pineapple',
          imageUrl: 'assets/images/pineapple.png',
        },
        {
          category:'fruits',
          term: 'Blueberry',
          imageUrl: 'assets/images/blueberry.png',
        },
      ],
    },
    {
      deckTitle: 'Medical',
      cards: [
        {
          category:'medical',
          term: 'Ambulance',
          imageUrl: 'assets/images/ambulance.png',
        },
        {
          category:'medical',
          term: 'Doctor',
          imageUrl: 'assets/images/doctor.png',
        },
        {
          category:'medical',
          term: 'Medicine',
          imageUrl: 'assets/images/medicine.png',
          
        },
        {
          category:'medical',
          term: 'Bone',
          imageUrl: 'assets/images/bone.png',
          
        },
        {
          category:'medical',
          term: 'Arm',
          imageUrl: 'assets/images/arm.png',
          
        },
        {
          category:'medical',
          term: 'Leg',
          imageUrl: 'assets/images/leg.png',
          
        },
        {
          category:'medical',
          term: 'Head',
          imageUrl: 'assets/images/head.png',
          
        },
        {
          category:'medical',
          term: 'Hand',
          imageUrl: 'assets/images/hand.png',
          
        },
        {
          category:'medical',
          term: 'Finger',
          imageUrl: 'assets/images/finger.png',
          
        },
        {
          category:'medical',
          term: 'Foot',
          imageUrl: 'assets/images/foot.png',
          
        },
        {
          category:'medical',
          term: 'Hot',
          imageUrl: 'assets/images/hot.png',
          
        },
        {
          category:'medical',
          term: 'Cold',
          imageUrl: 'assets/images/cold.png',

        },
      ],
    },
    {
      deckTitle:"tools",
      cards:[
        {
          category:'tools',
          term: 'saw',
          imageUrl: 'https://cdn.pixabay.com/photo/2020/03/12/13/36/handsaw-4925112_1280.png',
          
        },
        {
          category:'tools',
          term: 'table saw',
          imageUrl: 'https://p1.pxfuel.com/preview/447/556/888/workshop-job-saw-circular-saw-wood-woodworking.jpg',
          
        },
        {
          category:'tools',
          term: 'wrench',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/1933_Plomb_Combination_Wrench.jpg',
          
        },
        {
          category:'tools',
          term: 'pipe wrench',
          imageUrl: 'https://freesvg.org/img/1517144677.png',
          
        },
        {
          category:'tools',
          term: 'crescent wrench',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Western_Forge_Proto_adjustable_wrench.jpg',
          
        },
        {
          category:'tools',
          term: 'circular saw',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntMrtTk6cr8k98FSwmSvdDCaxb5mHRbiyNQ&usqp=CAU',
          
        },
        {
          category:'tools',
          term: 'level',
          imageUrl: 'https://c1.wallpaperflare.com/preview/564/44/56/level-tool-equipment-repair.jpg',
          
        },
        {
          category:'tools',
          term: 'vicegrips',
          imageUrl: 'https://www.wannapik.com/media/W1siZiIsIjIwMTYvMDgvMjIvMW45cGp4dm53aF83YWk3a2VrMno1X2luZHUwNDc1LnBuZyJdXQ/646704954efc26e4/7ai7kek2z5_indu0475.png',
          
        },
        {
          category:'tools',
          term: 'leaf blower',
          imageUrl: 'https://c1.peakpx.com/wallpaper/728/891/713/gardener-worker-gardening-machinery-wallpaper-preview.jpg',
          
        },
        {
          category:'tools',
          term: 'lawn mower',
          imageUrl: 'https://freesvg.org/img/lawnmower.png',
          
        },
        {
          category:'tools',
          term: 'cordless drill',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Cordless_electric_%28screw%29_drill.jpg',
          
        },
        {
          category:'tools',
          term: 'drill bit',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Concrete_drill_bit.JPG',
          
        },
        {
          category:'tools',
          term: 'phillips screwdriver',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/PHILLIPS_screwdriver_and_screw.JPG',
          
        },
        {
          category:'tools',
          term: 'flat-head screwdriver',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Screw_Driver_display.jpg',
          
        },
        {
          category:'tools',
          term: 'Framing hammer',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Vaughan_California_Framer.jpg',
          
        },
        {
          category:'tools',
          term: 'ball-pean hammer',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/MarteauPanneRonde-3.jpg',
          
        },
        {
          category:'tools',
          term: 'mallet',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Rubber_mallets.jpg',
          
        },
        {
          category:'tools',
          term: 'sockets',
          imageUrl: 'https://www.publicdomainpictures.net/pictures/100000/nahled/dozens-of-sockets.jpg',
          
        },
        {
          category:'tools',
          term: 'ratchet',
          imageUrl: 'https://www.wannapik.com/media/W1siZiIsIjIwMTYvMDgvMjIvNXBzNHllcmw1el81OTRtdGxteXF4X2luZHUwMzMwLnBuZyJdXQ/410a6450dd4e7ac2/594mtlmyqx_indu0330.png',
        },
      ]
    },
    {
      deckTitle: 'Forgot',
      cards: [
        {
          category:'',
          term: '',
          imageUrl: '',
          
        },
        {
          category:'',
          term: '',
          imageUrl: '',
          
        },
      ],
    },

    //TODO: Hard CODED test data here
  ];

  private deckSubject = new BehaviorSubject<Deck>(this.decks[0]);
  public deck$ = this.deckSubject.asObservable();

  constructor() {}

  filterByCategory(category: string): void {
    // console.log(category);
    let deck = this.decks.filter((d) => d.deckTitle === category)[0];
    this.deckSubject.next(deck);
  }

  
}
