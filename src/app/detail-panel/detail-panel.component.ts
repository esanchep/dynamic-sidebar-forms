import { Component, Input, OnInit } from '@angular/core';
import { DetailPanel, DetailPanelData, DetailPanelType, Section } from './detail-panel.models';

@Component({
  selector: 'app-detail-panel',
  templateUrl: './detail-panel.component.html',
  styleUrls: ['./detail-panel.component.scss']
})
export class DetailPanelComponent implements OnInit {
  @Input() detailPanel!: DetailPanel;

  constructor() { }

  ngOnInit(): void { }

  getIcon(): string {
    return this.detailPanel?.type?.icon;
  }

  getTitle(): string {
    return this.detailPanel?.type?.title;
  }

  getId(): string {
    return this.detailPanel?.data?.id;
  }

  getSections(): Section[] {
    return this.detailPanel?.data?.sections;
  }

}
