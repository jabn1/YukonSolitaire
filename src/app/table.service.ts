import { Injectable } from '@angular/core';
import { Table } from "./Models/table";
import { Deck } from './Models/deck';
import { Move } from './Models/move';
import { HostListener } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class TableService {
  deck: Deck;
  table: Table;

  
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
     if(window.innerHeight > 600){
      this.baseCardDimension = window.innerHeight*(120/1080);
     }
     else{
      this.baseCardDimension = 600*(120/1080);
     }

     //this.baseCardDimension = window.innerHeight*(120/1080);
     this.cardDimension = {
      'width': `${this.baseCardDimension}px`,
      'height': `${this.baseCardDimension*1.4}px`,
      'border-width': `1px`,
      'border-radius': `${0.108*this.baseCardDimension}px`,
      'font-size': `${0.15*this.baseCardDimension}px`
    }
    //'border-width': `${0.006*this.baseCardDimension}px`,
    this.cardOverlap = {true: {'height': `${this.baseCardDimension*0.25}px`}, false: {'height': `${this.baseCardDimension*0.08}px`}}
    
    
  }
  
  currentTime: {hours: number,minutes: number, seconds: number};

  baseCardDimension: number;
  cardOverlap: {};
  
  cardDimension: {};
  newGame(): void {
    this.currentTime.hours = 0;
    this.currentTime.minutes = 0;
    this.currentTime.seconds = 0;

  }

  moveCount: number;
  moveTotalCount: number;
  currentMove: Move;
  firstMove: Move;
  //moves: Table[];

  updateMove():void{
    let tempMove = this.currentMove;
    this.currentMove.next = new Move(this.table.getClone());
    this.currentMove = this.currentMove.next;
    this.currentMove.previous = tempMove;
    this.moveCount++;
    this.moveTotalCount++;
    console.log('udpdated move');
  }

  resetTimeCount():void{
    this.currentTime.hours = 0;
    this.currentTime.minutes = 0;
    this.currentTime.seconds = 0;
    this.moveCount = 0;
    this.moveTotalCount = 0;
  }

  restartGame(): void {
    this.firstMove.next = undefined;
    this.currentMove = this.firstMove;
    this.table = this.currentMove.currentTable;
    this.resetTimeCount();
  }

  goBack():void{
    if(this.currentMove.previous !== undefined){
      this.currentMove = this.currentMove.previous;
      this.table = this.currentMove.currentTable;
      console.log('go back');
    }
    else{
      console.log('cant go back');
    }
    
  }
  goForwards():void{
    if(this.currentMove.next !== undefined){
      this.currentMove = this.currentMove.next;
      this.table = this.currentMove.currentTable;
      console.log('go forwards');
    }
    else{
      console.log('cant go forwards');
    }
    
  }
  constructor() {
    this.onResize();

    
    this.deck = new Deck();
    this.deck.populateDeck();
    this.table = new Table(this.deck);
    this.table.initialize();
    //this.moves = [];
    //this.moves[0] = this.table;

    this.firstMove = new Move(this.table.getClone());
    this.currentMove = this.firstMove;
    
  }
}
