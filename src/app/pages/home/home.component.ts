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
    {id: 1, name: 'Comida', color: '#FF0000'},
    {id: 2, name: 'Transporte', color: '#00FF00'},
    {id: 3, name: 'Servicios', color: '#0000FF'},
    {id: 4, name: 'Otros', color: '#FFFF00'}
  ]

  labelIngresos:Label[]=[
    {id: 1, name: 'Sueldo', color: '#FF0000'},
    {id: 2, name: 'Ventas', color: '#00FF00'},
    {id: 3, name: 'Otros', color: '#0000FF'}
  ]
}
