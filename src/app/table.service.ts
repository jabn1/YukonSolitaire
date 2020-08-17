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
    this.deck = new Deck();
    this.deck.populateDeck();
    this.table = new Table(this.deck);
    this.table.initialize();

    this.firstMove = new Move(this.table.getClone());
    this.currentMove = this.firstMove;

  }

  moveCount: number;
  moveTotalCount: number;
  currentMove: Move;
  firstMove: Move;
  //moves: Table[];

  updateMove():void{
    
    let newMove = new Move(this.table.getClone());
    newMove.previous = this.currentMove;
    this.currentMove.next = newMove;
    this.currentMove = newMove;

    this.moveCount++;
    this.moveTotalCount++;
    
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
    this.table = this.currentMove.currentTable.getClone();
    //this.resetTimeCount();
  }

  goBack():void{
    if(this.currentMove.previous !== undefined){
      this.currentMove = this.currentMove.previous;
      this.table = this.currentMove.currentTable.getClone();
      
    }
    
    
  }
  goForwards():void{
    if(this.currentMove.next !== undefined){
      this.currentMove = this.currentMove.next;
      this.table = this.currentMove.currentTable.getClone();
      
    }
    
    
  }
  constructor() {
    this.onResize();
    this.newGame();
    
    
    
  }
}
