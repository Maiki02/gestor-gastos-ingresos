import { Component, Input } from '@angular/core';

export enum EnumSelect {
  INGRESOS = 'ingresos',
  GASTOS = 'gastos'
}


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  enumSelect=EnumSelect;
  selected:string=EnumSelect.INGRESOS;

  setSelected(value:EnumSelect){
    this.selected=value;
  }
}
