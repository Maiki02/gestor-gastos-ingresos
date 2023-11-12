import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() text:string='';
  @Input() labels:Label[]=[]
  @Input() centerContent:boolean=false;
  @Input() showAdd:boolean=true;

  @Output() select= new EventEmitter<Label>();
  constructor(private router:Router) { }

  goToLabels(){
    this.router.navigate(['/'+NAVEGATION.labels])
  }

  selectIcon(label:Label){
    return this.select.emit(label);
  }
}
