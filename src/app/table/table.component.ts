import { Component, OnInit } from '@angular/core';
import { DetailPanel, detailPanelTypes } from '../detail-panel/detail-panel.models';
import { DetailPanelService } from './../detail-panel/detail-panel.service';
import { ELEMENT_DATA } from './table-data.mock';
import { PeriodicElement, SelectedPeriodicElement } from './table.models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  selectedRow: SelectedPeriodicElement | undefined;

  constructor(
    private detailPanelService: DetailPanelService
  ) { }

  ngOnInit(): void { }

  onRowClick(index: number, row: PeriodicElement): void {
    this.toggleSelectRow(index, row);
  }

  private toggleSelectRow(index: number, row: PeriodicElement): void {
    let detailPanel: DetailPanel | undefined;
    if (!this.selectedRow || this.selectedRow.index !== index) {
      this.selectedRow = { index, row };
    } else {
      this.selectedRow = undefined;
    }
    detailPanel = this.detailPanelService.buildDetailPanel(detailPanelTypes.periodicElement, this.selectedRow);
    this.detailPanelService.openDetailPanel(detailPanel);
  }

  isActiveRow(index: number): boolean {
    return index === this.selectedRow?.index;
  }

}
