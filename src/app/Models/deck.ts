import { Card } from "./card";
export class Deck {
    cards: Card[];
    values: object;
    suits: object;

    constructor(){
        this.cards = [];     

        //card values
        this.values = {};
        this.values[1] = "A";
        this.values[2] = "2";
        this.values[3] = "3";
        this.values[4] = "4";
        this.values[5] = "5";
        this.values[6] = "6";
        this.values[7] = "7";
        this.values[8] = "8";
        this.values[9] = "9";
        this.values[10] = "10";
        this.values[11] = "J";
        this.values[12] = "Q";
        this.values[13] = "K";

        //card suits
        this.suits = {};
        this.suits[1] = "♦";
        this.suits[2] = "♥";
        this.suits[3] = "♣";
        this.suits[4] = "♠";             
    }

    populateDeck(): void{
        let tempCards: Card[] = [];

        //generating all cards
        for (let i = 1; i <= 13; i++){
            for (let j = 1; j <= 4; j++){
                tempCards.push(new Card(j, i));
            }
        }

        //making random set of cards
        for (let i = 52; i > 0; i-- ) {
            let randPosition = Math.floor((Math.random() * i));
            this.cards.push(tempCards.splice(randPosition,1)[0]);         
        }
    }       
    
    popCard(): Card{
        //here goes the code to remove one card from the deck
        return this.cards.pop();
    }
}