import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../Models/card';
import { TableService } from '../table.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card; 
  @Input() faceUp: boolean;

  value: string;
  suit: string;
  color: string;
  overlapHeight: string;
  constructor(public tableService: TableService) { }


  ngOnInit(): void {
    this.value = this.tableService.deck.values[this.card.value];
    this.suit = this.tableService.deck.suits[this.card.suit];

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
