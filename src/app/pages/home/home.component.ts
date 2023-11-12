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
    {id: 1, name: 'restaurant', color: '#FE4E00'},
    {id: 2, name: 'bus', color: '#ABABAB'},
    {id: 3, name: 'tool', color: '#222222'},
    {id: 4, name: 'shirt', color: '#FF00FF'},
    {id: 5, name: 'card', color: '#FF0000'}
  ]

  labelIngresos:Label[]=[
    {id: 1, name: 'cash', color: '#0AF00F'},
    {id: 2, name: 'cripto', color: '#FE4E00'},
    {id: 3, name: 'store', color: '#ACACAC'}
  ]

  getText(select:EnumSelect){
    return `Etiquetas de ${select}:`

  }
}
