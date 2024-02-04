import { Component, Input } from '@angular/core';
import { Register } from 'src/app/shared/interfaces/register.interface';
import { getAmountAndCoin, getDateOfCreation, getDescription } from 'src/app/shared/register';

@Component({
  selector: 'app-registers-table',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss']
})
export class RegistersTableComponent {
  @Input() title: string = '';
  @Input() registers: Register[] = [];

  constructor(){}

  haveRegisters(){
    return this.registers.length > 0;
  }

  getDescription(register:Register){
    return getDescription(register);
  }

  getAmountAndCoin(register:Register){
    return getAmountAndCoin(register);
  }

  getDateOfCreation(register:Register){
    return getDateOfCreation(register);
  }

  showMore(){
    
  }
}
