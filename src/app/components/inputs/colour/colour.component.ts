import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-color-input',
  templateUrl: './colour.component.html',
  styleUrls: ['./colour.component.scss']
})
export class ColourInputComponent {
  @Output() set=new EventEmitter<string>();

  constructor(){}

  changeColor(event:any){
    this.set.emit(event.target.value)
  }

}
