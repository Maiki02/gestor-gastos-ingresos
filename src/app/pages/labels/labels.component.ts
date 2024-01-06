import { Component } from '@angular/core';
import { EnumSelect } from 'src/app/components/select/select.component';
import { COLOR_PRIMARY, LABEL_VOID, allLabels } from 'src/app/shared/const/label';
import { Label } from 'src/app/shared/interfaces/label.interface';
import { isValidLabel } from 'src/app/shared/labels';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsPageComponent {
  labelToGenerate:Label={
    ...LABEL_VOID,
    section: EnumSelect.GASTOS
  };
  name:string='';
  allLabels:Label[]=allLabels;
  messageInfo:string='';

  constructor() { 
    this.setColour(COLOR_PRIMARY);
  }

  getName(){
    return this.labelToGenerate.name ?? '';
  }

  getSection(){
    return this.labelToGenerate.section ?? '';
  }

  setSection(section:string){
    this.labelToGenerate={...this.labelToGenerate, section: section }
  }

  setName(name:string){
    this.labelToGenerate={...this.labelToGenerate, name: name }
  }

  setColour(colour:string){
    this.labelToGenerate={...this.labelToGenerate, color: colour }
  }

  setIcon(label:Label){
    this.labelToGenerate={...this.labelToGenerate, icon: label.icon }
  }

  saveLabel(){
    if(isValidLabel(this.labelToGenerate)){
      console.log('Label saved!', this.labelToGenerate);
      this.messageInfo='';
    } else {
      this.messageInfo='Completa todos los campos para continuar.'
    }
  }
}
