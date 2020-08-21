import { Table } from './table';
export class Move {
    constructor(table: Table){
        this.currentTable = table;
        this.previous = undefined;
        this.next = undefined;
    }
    previous: Move;
    next: Move;
    currentTable: Table;

}