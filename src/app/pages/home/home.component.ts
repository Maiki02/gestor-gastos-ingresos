import { Component, OnInit } from '@angular/core';
import { EnumSelect } from 'src/app/components/select/select.component';
import { localStorageRegister } from 'src/app/shared/const/localStorage';
import { Label } from 'src/app/shared/interfaces/label.interface';
import { Register } from 'src/app/shared/interfaces/register.interface';
import { getAllExpenseLabels, getAllIncomeLabels, getLabelText } from 'src/app/shared/labels';
import { getRegistersFromLocalStorage } from 'src/app/shared/register';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  selects=EnumSelect;
  select:EnumSelect=EnumSelect.GASTOS;

  labelGastos:Label[]=[];
  labelIngresos:Label[]=[];

  registersGastos:Register[]=[];
  registersIngresos:Register[]=[];

  constructor() { }

  ngOnInit(): void {
    this.labelGastos=getAllExpenseLabels()
    this.labelIngresos=getAllIncomeLabels();
    this.registersIngresos=getRegistersFromLocalStorage(localStorageRegister.registerIncome);
    this.registersGastos=getRegistersFromLocalStorage(localStorageRegister.registerExpense);
  }

  setSelect(select:EnumSelect){
    this.select=select;
  }

  getTextLabel(select:EnumSelect){
    return getLabelText(select);
  }

  getTextRegister(select:EnumSelect){
    return select === EnumSelect.GASTOS ? 'Últimos gastos' : 'Últimos ingresos';
  }

  isIncome(){
    return this.select === EnumSelect.INGRESOS;
  }
}
