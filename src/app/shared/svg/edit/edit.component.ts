import { Component } from '@angular/core';
import { SvgClass } from '../svg';

@Component({
  selector: 'app-edit-svg',
  templateUrl: './edit.component.html',
  styleUrls: ['./../svg.scss']
})
export class EditSvgComponent extends SvgClass {
  constructor() {
    super();
  }

}
