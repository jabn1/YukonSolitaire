import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, CdkDragStart, CdkDragRelease } from '@angular/cdk/drag-drop';
import { Card } from "../Models/card";

import { TableauStack } from '../Models/tableauStack';
import { TableService } from '../table.service';
@Component({
  selector: 'app-tableau-stack',
  templateUrl: './tableau-stack.component.html',
  styleUrls: ['./tableau-stack.component.css']
})
export class TableauStackComponent implements OnInit {

  constructor(public tableService: TableService) { }
  @Input() tableauStack: TableauStack;
  faceUpCards: Card[];
  faceDownCards: Card[];
  draggedCards: Card[];

  ngOnInit(): void {
    this.faceDownCards = this.tableauStack.faceDownStack;
    this.faceUpCards = this.tableauStack.faceUpStack;
  }

  drop(event: CdkDragDrop<TableauStack>) {
    let selectedCard: Card[] = [event.previousContainer.data.faceUpStack[event.previousIndex]];
    if((typeof(event.previousContainer.data) === typeof(event.container.data)) && !(event.previousContainer.data === event.container.data) && (event.container.data.canPushCards(selectedCard)) ){
      let cards = event.previousContainer.data.spliceCards(event.previousIndex);
      event.container.data.pushCards(cards);
      
      event.previousContainer.data.flipTopCard();
      this.tableService.updateMove();
    }
  }

  dragStart(event: CdkDragStart<Card>){
    //console.log(event.source.data.suit+"  "+event.source.data.value);
    let selectedIndex: number = -1;
    //console.log(this.faceUpCards.length);
    for(let i=0; i < this.faceUpCards.length; i++){
      //console.log(this.faceUpCards[i].suit+"  "+this.faceUpCards[i].value);
      if((this.faceUpCards[i].suit === event.source.data.suit) && (this.faceUpCards[i].value === event.source.data.value)){
        selectedIndex = i;
        break;
      }
    }
    this.draggedCards=[];
    for(let i=selectedIndex; i < this.faceUpCards.length; i++){
      
      this.draggedCards.push(JSON.parse(JSON.stringify(this.faceUpCards[i])));
      if(i !== selectedIndex){
        this.faceUpCards[i].visible = false;
      }
      
    
    }

    
    //this.draggedCards = this.tableauStack.spliceCards(selectedIndex);

  }

  dragRelease(event: CdkDragRelease<Card>){
    let selectedIndex: number = -1;
    //console.log(this.faceUpCards.length);
    for(let i=0; i < this.faceUpCards.length; i++){
      //console.log(this.faceUpCards[i].suit+"  "+this.faceUpCards[i].value);
      if((this.faceUpCards[i].suit === event.source.data.suit) && (this.faceUpCards[i].value === event.source.data.value)){
        selectedIndex = i;
        break;
      }
    }
    for(let i=selectedIndex; i < this.faceUpCards.length; i++){
      this.faceUpCards[i].visible = true;
    }
  }

}
