import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextInputComponent {
  @Input() text:string='';
}
