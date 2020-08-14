import { Injectable } from '@angular/core';
import { Table } from "./Models/table";
import { Deck } from './Models/deck';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  deck: Deck;
  table: Table;


  baseCardDimension: number;
  cardDimension: string;
  

  restartGame(): void {
    
  }

  constructor() {
    this.baseCardDimension = 100;

    this.cardDimension = `
      width: ${this.baseCardDimension}px; 
      height: ${this.baseCardDimension*1.5}px; 
      border-width: ${0.006*this.baseCardDimension}px; 
      border-radius: ${0.108*this.baseCardDimension}px;
      font-size: ${0.15*this.baseCardDimension}px;
    `; 


    this.deck = new Deck();
    this.deck.populateDeck();
    this.table = new Table(this.deck);
    this.table.initialize();
  }
}
