import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() selected:string=EnumSelect.INGRESOS;
  @Output() set = new EventEmitter<string>();

  setSelected(value:EnumSelect){
    this.selected=value;
  }
}
