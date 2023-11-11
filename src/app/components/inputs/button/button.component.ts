import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-input',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss', './../input.scss']
})
export class ButtonInputComponent {
  @Input() text:string='';

  constructor(){}

  confirm(){

  }
}
