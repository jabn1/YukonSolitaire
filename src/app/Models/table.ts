import { FoundationStack } from "./foundationStack";
import { TableauStack } from "./tableauStack";
import { Deck } from "./deck";

export class Table {
    foundation: FoundationStack[];
    tableau: TableauStack[];
    deck: Deck;
    constructor(deck: Deck){
        this.foundation = [];
        this.tableau = [];
        this.deck = deck;
    }
    isComplete():boolean{
        let count: number = 0;
        this.foundation.forEach(foundationStack=>{
            count += foundationStack.stack.length;
        });
        if(count === 52){
            return true;
        }
        else{
            return false;
        }
    }
    initialize(): void {
        for (let i=1; i<=4; i++){
            this.foundation.push(new FoundationStack(i));
        }
        
        
        for (let i=0; i<7; i++){
            this.tableau.push(new TableauStack());
        }
    
        this.tableau[0].faceUpStack.push(this.deck.popCard());

        for (let i = 1; i < 7; i++){
            for (let j = 0; j < i; j++){
                this.tableau[i].faceDownStack.push(this.deck.popCard());
            }
            for (let j = 0; j < 5; j++){              
                this.tableau[i].faceUpStack.push(this.deck.popCard());
            }
            
        }
    }

    finishTestInit():void{
        for (let i=1; i<=4; i++){
            this.foundation.push(new FoundationStack(i));
        }
       
        
        for (let i=0; i<7; i++){
            this.tableau.push(new TableauStack());
        }
        let count:number = 0;
        for (let i = 1; i <= 13; i++){
            for (let j = 0; j < 4; j++){
                if(count == 51){
                    break;
                }
                this.foundation[j].stack.push(this.deck.cards.shift());
                count++;
            }
        }
        this.tableau[0].faceUpStack.push(this.deck.popCard());
    }

    getClone(): Table{
        let table = new Table(this.deck);
        for (let i=1; i<=4; i++){
            table.foundation.push(new FoundationStack(i));
            for(let j=0; j < this.foundation[i-1].stack.length; j++){
                table.foundation[i-1].stack.push(this.foundation[i-1].stack[j]);
            }
        }

        for (let i=0; i<7; i++){
            table.tableau.push(new TableauStack());
            for(let j=0; j<this.tableau[i].faceDownStack.length; j++){
                table.tableau[i].faceDownStack.push(this.tableau[i].faceDownStack[j])
            }
            for(let j=0; j<this.tableau[i].faceUpStack.length; j++){
                table.tableau[i].faceUpStack.push(this.tableau[i].faceUpStack[j])
            }
        }
        
        
        return table;
    }
}