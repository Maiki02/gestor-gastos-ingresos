import { Component } from '@angular/core';
import { EnumSelect } from 'src/app/components/select/select.component';
import { Label } from 'src/app/shared/interfaces/label.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selects=EnumSelect;

  labelGastos:Label[]=[
    {id: 1, icon: 'restaurant', color: '#FE4E00'},
    {id: 2, icon: 'bus', color: '#ABABAB'},
    {id: 3, icon: 'tool', color: '#222222'},
    {id: 4, icon: 'shirt', color: '#FF00FF'},
    {id: 5, icon: 'card', color: '#FF0000'}
  ]

  labelIngresos:Label[]=[
    {id: 1, icon: 'cash', color: '#0AF00F'},
    {id: 2, icon: 'cripto', color: '#FE4E00'},
    {id: 3, icon: 'store', color: '#ACACAC'}
  ]

  getText(select:EnumSelect){
    return `Etiquetas de ${select}:`

  }
}
