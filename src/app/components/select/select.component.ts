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
  @Input() selected:EnumSelect=EnumSelect.INGRESOS;
  @Output() set = new EventEmitter<EnumSelect>();

  setSelected(value:EnumSelect){
    this.selected=value;
    this.set.emit(value);
  }
}
