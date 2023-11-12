import { Component } from '@angular/core';
import { LABEL_VOID } from 'src/app/shared/const/label';
import { Label } from 'src/app/shared/interfaces/label.interface';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsPageComponent {
  labelToGenerate:Label=LABEL_VOID;

  constructor() { 
    this.setColour('#ffffff');
  }


  setColour(colour:string){
    this.labelToGenerate={...this.labelToGenerate, color: colour }
  }

}
