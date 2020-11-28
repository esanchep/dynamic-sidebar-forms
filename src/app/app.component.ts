import { Component, OnInit } from '@angular/core';
import { DetailPanelService } from './detail-panel/detail-panel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  opened: boolean | undefined;

  constructor(
    private detailPanelService: DetailPanelService
  ) { }

  ngOnInit(): void {
    this.detailPanelService.shouldOpenDetailPanel()
      .subscribe((shouldOpen: boolean) => {
        console.log('shouldOpen: ' + shouldOpen);
        this.opened = shouldOpen;
      });
  }

}
