import { Component, OnInit } from '@angular/core';
import { EnumSelect } from 'src/app/components/select/select.component';
import { localStorageLabel } from 'src/app/shared/const/localStorage';
import { Label } from 'src/app/shared/interfaces/label.interface';
import { getExpenseLabels, getIncomeLabels, getLabelText, getLabelsInLocalStorage } from 'src/app/shared/labels';

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
    console.log(getLabelsInLocalStorage(localStorageLabel.labelsGastos))
    this.labelGastos=[...getExpenseLabels(), ...getLabelsInLocalStorage(localStorageLabel.labelsGastos)]
    this.labelIngresos=[...getIncomeLabels(), ...getLabelsInLocalStorage(localStorageLabel.labelsIngresos)]
  }

  getText(select:EnumSelect){
    return getLabelText(select);
  }
}
