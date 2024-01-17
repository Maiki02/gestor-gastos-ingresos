import { Component, Input } from '@angular/core';
import { InputForm } from '../input';

@Component({
  selector: 'app-date-input',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateInputComponent extends InputForm<string> {

  constructor(){
    super();
  }

  changeDate(event:any){
    this.emit(event.target.value);
  }
}