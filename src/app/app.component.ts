import { Component, OnInit } from '@angular/core';
import { DetailPanelComponent } from './detail-panel/detail-panel.component';
import { DetailPanel } from './detail-panel/detail-panel.models';
import { DetailPanelService } from './detail-panel/detail-panel.service';
import { SelectedPeriodicElement } from './table/table.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  opened: boolean | undefined;
  detailPanel!: DetailPanel;

  constructor(
    private detailPanelService: DetailPanelService
  ) { }

  ngOnInit(): void {
    this.detailPanelService.shouldOpenDetailPanel()
      .subscribe((detailPanel: DetailPanel) => {
        this.opened = !!detailPanel;
        console.log(detailPanel);
        this.detailPanel = detailPanel;
      });
  }

}
