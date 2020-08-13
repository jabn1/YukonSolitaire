import { Component, OnInit, Input } from '@angular/core';
import { FoundationStack } from '../Models/foundationStack';
import { TableService } from '../table.service';

@Component({
  selector: 'app-foundation-stack',
  templateUrl: './foundation-stack.component.html',
  styleUrls: ['./foundation-stack.component.css']
})
export class FoundationStackComponent implements OnInit {

  constructor(public tableService: TableService) { }

  @Input() foundationStack: FoundationStack;
  suit: string;
  ngOnInit(): void {
    this.suit = this.tableService.deck.suits[this.foundationStack.suit];
  }

}
