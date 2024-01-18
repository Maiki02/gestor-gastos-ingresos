import { Component, OnInit } from '@angular/core';
import { EnumSelect } from 'src/app/components/select/select.component';
import { Label } from 'src/app/shared/interfaces/label.interface';
import { getAllExpenseLabels, getAllIncomeLabels, getLabelText } from 'src/app/shared/labels';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  selects=EnumSelect;

  labelGastos:Label[]=[];
  labelIngresos:Label[]=[];

  constructor() { }

  ngOnInit(): void {
    this.labelGastos=getAllExpenseLabels()
    this.labelIngresos=getAllIncomeLabels();
  }

  getText(select:EnumSelect){
    return getLabelText(select);
  }
}
