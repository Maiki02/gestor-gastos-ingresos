import { Component, Input } from '@angular/core';
import { SELECT_GASTOS, SELECT_INGRESOS } from 'src/app/shared/const/select.const';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  SELECT_INGRESOS=SELECT_INGRESOS;
  SELECT_GASTOS=SELECT_GASTOS;
  selected:string=SELECT_INGRESOS;

  setSelected(value:string){
    this.selected=value;
  }
}
