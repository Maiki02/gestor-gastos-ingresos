import { Component } from '@angular/core';
import { EnumSelect } from 'src/app/components/select/select.component';
import { getExpenseLabels, getIncomeLabels, getLabelText } from 'src/app/shared/labels';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterPageComponent {
  select:EnumSelect=EnumSelect.GASTOS;
  constructor(){

  }

  getText(select:EnumSelect){
    return getLabelText(select);
  }

  setSelect(select:EnumSelect){
    this.select=select;
  }

  getLabels(select:EnumSelect){
    return select===EnumSelect.GASTOS? getExpenseLabels(): getIncomeLabels();
  }
}
