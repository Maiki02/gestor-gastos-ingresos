import { Component, Input } from '@angular/core';
import { Label } from 'src/app/shared/interfaces/label.interface';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {
  @Input() label!:Label;
  @Input() size:number=54; //Tamain in pixels
  @Input() iconSize:number=32; //Tamain in pixels
  
  constructor(){ }

  getStyle(){
    return {
      "width": this.size+'px', 
      "height": this.size+'px', 
      "background-color": this.label.color
    }
  }

  getIconSize(){
    return {
      "width": this.iconSize+'px',
      "height": this.iconSize+'px'
    }
  }
}
