export const detailPanelTypes = {
  periodicElement: { title: 'Periodic Element', icon: 'select_all' }
};

export enum InputType {
  INPUT = 'input',
  CHECKBOX = 'checkbox'
}

export interface DetailPanel {
  type: DetailPanelType;
  data: DetailPanelData;
}

export interface DetailPanelType {
  title: string;
  icon: string;
}

export interface DetailPanelData {
  id: string;
  sections: Section[];
}

export interface Section {
  title: string;
  showToggle: boolean;
  inputs: Input[];
}

export interface Input {
  type: InputType;
  label: string;
  value: string | boolean | undefined;
}
