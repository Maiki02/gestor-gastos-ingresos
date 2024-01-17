import { Component, Input } from '@angular/core';
import { InputForm } from '../input';

@Component({
  selector: 'app-text-input',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextInputComponent extends InputForm<string> {
  
  constructor(){
    super();
  }

  changeText(event:any){
    this.emit(event.target.value);
  }
}
