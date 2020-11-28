export interface SelectedPeriodicElement {
  index: number;
  row: PeriodicElement;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
