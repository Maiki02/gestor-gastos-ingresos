import { Component, Input } from '@angular/core';
import { EnumSelect } from '../select/select.component';
import { Label } from 'src/app/shared/interfaces/label.interface';
import { Router } from '@angular/router';
import { NAVEGATION } from 'src/app/shared/const/navegation';

@Component({
  selector: 'app-labels-card',
  templateUrl: './labels-card.component.html',
  styleUrls: ['./labels-card.component.scss']
})
export class LabelsCardComponent {
  @Input() selected!:EnumSelect;
  @Input() labels:Label[]=[]
  constructor(private router:Router) { }

  goToLabels(){
    this.router.navigate(['/'+NAVEGATION.labels])

  }
}
