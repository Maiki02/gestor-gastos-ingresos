import { Component } from '@angular/core';
import { EnumSelect } from 'src/app/components/select/select.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selects=EnumSelect
}
