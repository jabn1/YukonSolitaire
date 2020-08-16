import { Injectable } from '@angular/core';
import { Table } from "./Models/table";
import { Deck } from './Models/deck';
import { HostListener } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class TableService {
  deck: Deck;
  table: Table;

  
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
     this.baseCardDimension = window.innerHeight*(120/1080);
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
  

  baseCardDimension: number;
  cardOverlap: {};
  
  cardDimension: {};
  

  restartGame(): void {
    
  }

  constructor() {
    this.onResize();

    
    this.deck = new Deck();
    this.deck.populateDeck();
    this.table = new Table(this.deck);
    this.table.initialize();
  }
}
