import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import { Card } from "../Models/card";
import { Deck } from "../Models/deck";
import { TableauStack } from '../Models/tableauStack';
@Component({
  selector: 'app-tableau-stack',
  templateUrl: './tableau-stack.component.html',
  styleUrls: ['./tableau-stack.component.css']
})
export class TableauStackComponent implements OnInit {

  constructor() { }
  @Input() tableauStack: TableauStack;
  faceUpCards: Card[];
  faceDownCards: Card[];

  ngOnInit(): void {
    this.faceDownCards = this.tableauStack.faceDownStack;
    this.faceUpCards = this.tableauStack.faceUpStack;
  }

}
