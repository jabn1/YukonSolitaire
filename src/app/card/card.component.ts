import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() value: string;
  @Input() suit: string;
  @Input() faceUp: boolean;
  color: string;
  overlapHeight: string;
  constructor() { }


  ngOnInit(): void {
    if(this.faceUp){
      this.overlapHeight = '2.5rem'
    }
    else{
      this.overlapHeight = '0.5rem'
    }    
    if(this.suit === '♥' || this.suit === '♦'){
      this.color = 'red';
    }
    else{
      this.color = 'black';
    }
  }

}
