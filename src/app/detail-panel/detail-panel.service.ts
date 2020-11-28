import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailPanelService {
  private openDetailPanel$ = new Subject<boolean>();

  shouldOpenDetailPanel(): Subject<boolean> {
    return this.openDetailPanel$;
  }

  openDetailPanel(shouldOpen: boolean): void {
    this.openDetailPanel$.next(shouldOpen);
  }

}
