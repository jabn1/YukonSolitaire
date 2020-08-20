import { Injectable } from '@angular/core';
import { Table } from "./Models/table";
import { Deck } from './Models/deck';
import { Move } from './Models/move';
import { HostListener } from "@angular/core";
import { Router, NavigationEnd } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class TableService {
  deck: Deck;
  table: Table;

  
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
     if(window.innerHeight > 600){
      this.baseCardDimension = window.innerHeight*(120/1080);
     }
     else{
      this.baseCardDimension = 600*(120/1080);
     }

     //this.baseCardDimension = window.innerHeight*(120/1080);
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
  
  currentTime: {hours: string, minutes: string, seconds: string};
  startTime: number;
  interval: number;
  isActive: boolean;
  canStart: boolean;

  isFinished: boolean;

  startStop(){
    
    if(!this.isFinished){
      if(this.isActive){
        this.isActive=false;
        clearInterval(this.interval);
        this.startTime = (new Date()).valueOf() - this.startTime;
      }
      else{
        if(!this.canStart){
          this.router.navigateByUrl('/');
        }
        this.isActive = true;
        this.startTime= (new Date()).valueOf() - this.startTime;
        this.interval = setInterval(() => {
          if(this.currentTime !== undefined){
            this.updateTime();
          }
        },1000);
      }
    }

  }

  baseCardDimension: number;
  cardOverlap: {};
  
  cardDimension: {};
  newGame(): void {
    this.deck = new Deck();
    this.deck.populateDeck();
    this.table = new Table(this.deck);
    this.table.initialize();

    this.firstMove = new Move(this.table.getClone());
    this.currentMove = this.firstMove;
    this.resetTimeCount();
    
  }

  moveCount: number;
  moveTotalCount: number;
  currentMove: Move;
  firstMove: Move;
  

  updateMove():void{
    
    let newMove = new Move(this.table.getClone());
    newMove.previous = this.currentMove;
    this.currentMove.next = newMove;
    this.currentMove = newMove;

    this.moveCount++;
    this.moveTotalCount++;
    this.isFinished = this.table.isComplete();
    if(this.isFinished){
      this.pauseGame();
    }
  }

  resetTimeCount():void{
    this.currentTime.hours = '00';
    this.currentTime.minutes = '00';
    this.currentTime.seconds = '00';

    this.moveCount = 0;
    this.moveTotalCount = 0;
    this.startTime = (new Date()).valueOf();
    
    
    this.interval = setInterval(() => {
      if(this.currentTime !== undefined){
        this.updateTime();
      }
    },1000);
    this.isActive = true;

    
  }


  restartGame(): void {
    this.firstMove.next = undefined;
    this.currentMove = this.firstMove;
    this.table = this.currentMove.currentTable.getClone();
    this.resetTimeCount();
  }
  pauseGame():void{
    if(this.isActive){
      this.startStop();
    }
  }
  goBack():void{
    if((this.currentMove.previous !== undefined) && this.isActive && !this.isFinished){
      this.currentMove = this.currentMove.previous;
      this.table = this.currentMove.currentTable.getClone();
      this.moveCount--;
      this.moveTotalCount++;
    }
    
    
  }
  goForwards():void{
    if((this.currentMove.next !== undefined) && this.isActive && !this.isFinished){
      this.currentMove = this.currentMove.next;
      this.table = this.currentMove.currentTable.getClone();
      this.moveCount++;
      this.moveTotalCount++;
    }
  }
  updateTime():void{
    let tempValue: number;
    let newDate = new Date();
    let timeDiff = (newDate.valueOf() - this.startTime)/1000;
   
    tempValue = Math.floor(timeDiff/3600);
    this.currentTime.hours = tempValue.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    timeDiff -= tempValue*3600;
    tempValue = Math.floor(timeDiff/60);
    this.currentTime.minutes = tempValue.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    timeDiff -= tempValue*60;
    this.currentTime.seconds = Math.floor(timeDiff).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    
  }
  constructor(private router: Router) {

    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        if(ev.urlAfterRedirects !== '/'){
          this.pauseGame();
          this.canStart = false;
        }
        else{
          this.canStart = true;
        }
      }
    });

    this.currentTime = {hours:'00',minutes:'00',seconds:'00'};

    this.onResize();
    this.newGame();
    
    
    
  }
}
