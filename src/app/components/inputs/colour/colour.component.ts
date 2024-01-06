import { Component } from '@angular/core';
import { InputForm } from '../input';

@Component({
  selector: 'app-color-input',
  templateUrl: './colour.component.html',
  styleUrls: ['./colour.component.scss']
})
export class ColourInputComponent extends InputForm {
  constructor(){
    super();
  }

  changeColor(event:any){
    this.emit(event.target.value);
  }
}
