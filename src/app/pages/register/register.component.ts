import { Component, OnInit } from '@angular/core';
import { EnumSelect } from 'src/app/components/select/select.component';
import { REGISTER_VOID } from 'src/app/shared/const/register';
import { getDateAAAAMMDD } from 'src/app/shared/date';
import { Label } from 'src/app/shared/interfaces/label.interface';
import { Register } from 'src/app/shared/interfaces/register.interface';
import { getExpenseLabels, getIncomeLabels, getLabelText } from 'src/app/shared/labels';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterPageComponent implements OnInit {
  messageInfo:string='';
  registerToGenerate:Register=REGISTER_VOID;

  constructor(){}

  ngOnInit(): void {
    this.setSelect(EnumSelect.GASTOS);
  }

  getText(select:EnumSelect){
    return getLabelText(select);
  }

  setSelect(select:EnumSelect){
    this.registerToGenerate={...this.registerToGenerate, section: select};
  }

  setDate(date:string){
    this.registerToGenerate={...this.registerToGenerate, date: date};
  }

  setLabelSelected(label:Label){
    this.registerToGenerate={...this.registerToGenerate, label: label};
  }

  setAmount(amount:number){
    this.registerToGenerate={...this.registerToGenerate, amount: amount};
  }

  getLabels(select:EnumSelect){
    return select===EnumSelect.GASTOS? getExpenseLabels(): getIncomeLabels();
  }

  getDateSelected(){
    return this.registerToGenerate.date? this.registerToGenerate.date: getDateAAAAMMDD(new Date());
  }

  getIconSelected(){
    return this.registerToGenerate.label? this.registerToGenerate.label.icon: '';
  }

  saveRegister(){

  }
}
