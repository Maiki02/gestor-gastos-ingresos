import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnumSelect } from 'src/app/components/select/select.component';
import { COLOR_PRIMARY, LABEL_VOID, allLabels } from 'src/app/shared/const/label';
import { NAVEGATION } from 'src/app/shared/const/navegation';
import { Label } from 'src/app/shared/interfaces/label.interface';
import { isValidLabel, saveLabelInLocalStorage } from 'src/app/shared/labels';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsPageComponent {
  labelToGenerate:Label=LABEL_VOID
  allLabels:Label[]=allLabels;
  messageInfo:string='';

  constructor(private router:Router) { 
    this.setColour(COLOR_PRIMARY);
    this.setSection(EnumSelect.GASTOS);
    this.setName('');
  }

  getName(){
    return this.labelToGenerate.name ?? '';
  }

  getSection(){
    return this.labelToGenerate.section ?? EnumSelect.GASTOS;
  }

  setSection(section:EnumSelect){
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
      saveLabelInLocalStorage(this.labelToGenerate);
      this.messageInfo='';
      this.router.navigate(['/'+NAVEGATION.home]);
    } else {
      this.messageInfo='Completa todos los campos para continuar.'
    }
  }
}
