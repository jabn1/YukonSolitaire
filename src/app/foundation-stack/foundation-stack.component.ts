import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FoundationStack } from '../Models/foundationStack';
import { TableService } from '../table.service';
import {CdkDragDrop } from '@angular/cdk/drag-drop';
import { Card } from '../Models/card';
import { TableauStack } from '../Models/tableauStack';

@Component({
  selector: 'app-foundation-stack',
  templateUrl: './foundation-stack.component.html',
  styleUrls: ['./foundation-stack.component.css']
})
export class FoundationStackComponent implements OnInit {

  constructor(public tableService: TableService) { }

  @Input() foundationStack: FoundationStack;
  suit: string;
  
  ngOnInit(): void {
    this.suit = this.tableService.deck.suits[this.foundationStack.suit];
  }

  drop(event: CdkDragDrop<TableauStack>) {
    let selectedCard: Card = event.previousContainer.data.faceUpStack[event.previousIndex];
    let allow: boolean = event.previousContainer.data.faceUpStack.length - 1 === event.previousIndex; 
    if(this.foundationStack.canPushCard(selectedCard) && allow){
      event.previousContainer.data.spliceCards(event.previousIndex);
      this.foundationStack.pushCard(selectedCard);
   
      console.log(this.foundationStack.stack.length);
      event.previousContainer.data.flipTopCard();
    }
      
  }

}
