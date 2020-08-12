import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import { Card } from "../Models/card";
import { Deck } from "../Models/deck";
@Component({
  selector: 'app-tableau-stack',
  templateUrl: './tableau-stack.component.html',
  styleUrls: ['./tableau-stack.component.css']
})
export class TableauStackComponent implements OnInit {

  constructor() { }
  faceUpCards: Card[];
  faceDownCards: Card[];
  deck: Deck;

  ngOnInit(): void {
    this.faceDownCards = [];
    this.faceUpCards = [];
    this.deck = new Deck();
    this.deck.populateDeck();
    for(let i=0; i<3;i++){
      this.faceDownCards.push(this.deck.popCard());
      this.faceUpCards.push(this.deck.popCard());
    }
  }

}
