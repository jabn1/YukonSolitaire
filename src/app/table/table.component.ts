import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';
import { Table } from '../Models/table';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(public tableService: TableService) { }
  
  ngOnInit(): void {
    
  }

}
