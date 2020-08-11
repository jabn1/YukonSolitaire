import { Card } from "./card";

export class TableauStack {
    faceUpStack: Card[];
    faceDownStack: Card[];
    constructor(){
        this.faceUpStack = [];
        this.faceDownStack = [];
    }
    pushCards(cards: Card[]): boolean{
        if(this.faceDownStack.length === 0 && this.faceUpStack.length === 0){
            if(cards[0].value === 13){
                cards.forEach(card =>{this.faceUpStack.push(card);});              
                return true;
            }
            else{
                return false;
            }
        }
        else if(cards[0].getColor() !== this.faceUpStack[this.faceUpStack.length - 1].getColor() && this.faceUpStack[this.faceUpStack.length - 1].value === cards[0].value + 1){
            cards.forEach(card =>{this.faceUpStack.push(card);});
            return true;
        }
        else{
            return false;
        }       
    }
    spliceCards(cardPosition: number): Card[] {
        return this.faceUpStack.splice(cardPosition,this.faceUpStack.length - cardPosition);
    }
    flipTopCard(): void {
        if(this.faceUpStack.length === 0){
            this.faceUpStack.push(this.faceDownStack.pop());
        }
    }
}