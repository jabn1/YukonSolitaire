import { Injectable } from '@angular/core';
import { Table } from "./Models/table";
import { Deck } from './Models/deck';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  deck: Deck;
  table: Table;

  restartGame(): void {
    
  }

  constructor() {
    this.deck = new Deck();
    this.deck.populateDeck();
    this.table = new Table(this.deck);
    this.table.initialize();
  }
}
