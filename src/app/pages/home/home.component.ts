import { Component } from '@angular/core';
import { EnumSelect } from 'src/app/components/select/select.component';
import { Label } from 'src/app/shared/interfaces/label.interface';
import { getExpenseLabels, getIncomeLabels, getLabelText } from 'src/app/shared/labels';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selects=EnumSelect;

  labelGastos:Label[]= getExpenseLabels();
  labelIngresos:Label[]=getIncomeLabels();

  getText(select:EnumSelect){
    return getLabelText(select);
  }
}
