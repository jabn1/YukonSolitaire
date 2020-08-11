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
    initialize(): void {
        for (let i=1; i<=4; i++){
            this.foundation.push(new FoundationStack(i));
        }

        this.deck.populateDeck();
        
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
}