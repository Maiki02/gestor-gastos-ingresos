import { Component, Input } from '@angular/core';
import { InputForm } from '../input';

@Component({
  selector: 'app-number-input',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberInputComponent extends InputForm<number> {

  constructor(){
    super();
  }

  changeNumber(event:any){
    this.emit(Number(event.target.value));
  }
}
