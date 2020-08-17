import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public tableService: TableService) { }

  ngOnInit(): void {
  }

}
