import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop } from '@angular/cdk/drag-drop';
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

  ngOnInit(): void {
    this.faceDownCards = this.tableauStack.faceDownStack;
    this.faceUpCards = this.tableauStack.faceUpStack;
  }

  drop(event: CdkDragDrop<TableauStack>) {
    let selectedCard: Card[] = [event.previousContainer.data.faceUpStack[event.previousIndex]];
    if((typeof(event.previousContainer.data) === typeof(event.container.data)) && (event.container.data.canPushCards(selectedCard)) ){
      let cards = event.previousContainer.data.spliceCards(event.previousIndex);
      event.container.data.pushCards(cards);
      
      event.previousContainer.data.flipTopCard();
    }
  }

}
