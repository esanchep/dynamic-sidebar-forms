import { Component, OnInit } from '@angular/core';
import { DetailPanelService } from './../detail-panel/detail-panel.service';
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

  constructor(
    private detailPanelService: DetailPanelService
  ) { }

  ngOnInit(): void { }

  onRowClick(index: number, row: PeriodicElement): void {
    this.toggleSelectRow(index, row);
  }

  private toggleSelectRow(index: number, row: PeriodicElement): void {
    if (!this.selectedRow || this.selectedRow.index !== index) {
      this.selectedRow = { index, row };
      this.detailPanelService.openDetailPanel(true);
    } else {
      this.selectedRow = undefined;
      this.detailPanelService.openDetailPanel(false);
    }
  }

  isActiveRow(index: number): boolean {
    return index === this.selectedRow?.index;
  }

}
