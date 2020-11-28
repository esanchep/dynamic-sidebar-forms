import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SelectedPeriodicElement } from '../table/table.models';
import { DetailPanel, DetailPanelData, DetailPanelType, detailPanelTypes, InputType } from './detail-panel.models';

@Injectable({
  providedIn: 'root'
})
export class DetailPanelService {
  private openDetailPanel$ = new Subject<DetailPanel>();

  shouldOpenDetailPanel(): Subject<DetailPanel> {
    return this.openDetailPanel$;
  }

  openDetailPanel(detailPanel: DetailPanel | undefined): void {
    this.openDetailPanel$.next(detailPanel);
  }

  buildDetailPanel(type: DetailPanelType, data: object | undefined): DetailPanel | undefined {
    if (!data) {
      return undefined;
    }
    return {
      type,
      data: this.buildDataFromPeriodicElement(data as SelectedPeriodicElement)
    };
  }

  buildDataFromPeriodicElement(data: SelectedPeriodicElement): DetailPanelData {
    return {
      id: data.row.position.toString(),
      sections: [
        {
          title: 'A section title',
          showToggle: false,
          inputs: [
            {
              label: 'Name',
              type: InputType.INPUT,
              value: data.row.name
            }
          ]
        }
      ]
    };
  }

}
