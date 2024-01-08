import { Component } from '@angular/core';
import { EnumSelect } from 'src/app/components/select/select.component';
import { getDateAAAAMMDD } from 'src/app/shared/date';
import { Label } from 'src/app/shared/interfaces/label.interface';
import { getExpenseLabels, getIncomeLabels, getLabelText } from 'src/app/shared/labels';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterPageComponent {
  select:EnumSelect=EnumSelect.GASTOS;
  dateSelected:string="";
  messageInfo:string='';
  labelSelected!:Label;

  constructor(){

  }

  getText(select:EnumSelect){
    return getLabelText(select);
  }

  setSelect(select:EnumSelect){
    console.log(select)
    this.select=select;
  }

  getLabels(select:EnumSelect){
    console.log(select)
    return select===EnumSelect.GASTOS? getExpenseLabels(): getIncomeLabels();
  }

  getDateSelected(){
    return this.dateSelected? this.dateSelected: getDateAAAAMMDD(new Date());
  }

  setLabelSelected(label:Label){
    this.labelSelected=label;
  }

  getIconSelected(){
    return this.labelSelected? this.labelSelected.icon: '';
  }

  saveRegister(){

  }
}
