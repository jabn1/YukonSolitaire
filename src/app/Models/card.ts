export class Card {
    suit: number;
    value: number;
    visible: boolean;
    constructor(suit: number, value: number){
        this.suit = suit;
        this.value = value;
        this.visible = true;
    }
    getColor(): string {
        if(this.suit === 1 || this.suit === 2){
            return "R";
        }
        if(this.suit === 3 || this.suit === 4){
            return "B";
        }
    }
}