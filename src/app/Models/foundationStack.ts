import { Card } from "./card";

export class FoundationStack {
    suit: number;
    stack: Card[];
    constructor(suit: number) {
        this.suit = suit;
        this.stack = [];
    }
    pushCard(card: Card){
        if (this.stack.length === 0){
            if(card.value === 1 && card.suit === this.suit){
                this.stack.push(card);
                return true;
            }
            else{
                return false;
            }
        }
        else if(card.suit === this.suit && this.stack[this.stack.length - 1].value + 1 === card.value){
            this.stack.push(card);
            return true;
        }
        else{
            return false;
        }
    }
}