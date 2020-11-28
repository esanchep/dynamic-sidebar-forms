import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA } from './table-data.mock';
import { PeriodicElement, SelectedRow } from './table.models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  selectedRow: SelectedRow | undefined;

  constructor() { }

  ngOnInit(): void { }

  onSelectRow(index: number, row: PeriodicElement): void {
    this.setSelectedRow(index, row);
  }

  private setSelectedRow(index: number, row: PeriodicElement): void {
    this.selectedRow = { index, row };
  }

  isActiveRow(index: number): boolean {
    return index === this.selectedRow?.index;
  }

}
