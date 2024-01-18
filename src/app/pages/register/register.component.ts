import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnumSelect } from 'src/app/components/select/select.component';
import { NAVEGATION } from 'src/app/shared/const/navegation';
import { REGISTER_VOID } from 'src/app/shared/const/register';
import { getDateAAAAMMDD } from 'src/app/shared/date';
import { Label } from 'src/app/shared/interfaces/label.interface';
import { Register } from 'src/app/shared/interfaces/register.interface';
import {
  getAllExpenseLabels,
  getAllIncomeLabels,
  getLabelText,
} from 'src/app/shared/labels';
import { isValidRegister, saveRegisterInLocalStorage } from 'src/app/shared/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  messageInfo: string = '';
  registerToGenerate: Register = REGISTER_VOID;
  expenseLabels: Label[] = [];
  incomeLabels: Label[] = [];

  constructor(private router:Router) {}

  ngOnInit(): void {
    this.setSelect(EnumSelect.GASTOS);
    this.setDate(getDateAAAAMMDD(new Date()));
    this.expenseLabels = getAllExpenseLabels();
    this.incomeLabels = getAllIncomeLabels();
  }

  getText(select: EnumSelect) {
    return getLabelText(select);
  }

  setSelect(select: EnumSelect) {
    this.registerToGenerate = { ...this.registerToGenerate, section: select };
  }

  setDate(date: string) {
    this.registerToGenerate = { ...this.registerToGenerate, date: date };
  }

  setLabelSelected(label: Label) {
    this.registerToGenerate = { ...this.registerToGenerate, label: label };
  }

  setAmount(amount: number) {
    this.registerToGenerate = { ...this.registerToGenerate, amount: amount };
  }

  setDescription(description: string) {
    this.registerToGenerate = { ...this.registerToGenerate, description: description};
  }

  getLabels(select: EnumSelect) {
    return select === EnumSelect.GASTOS? this.expenseLabels: this.incomeLabels;
  }

  getDateSelected() {
    return this.registerToGenerate.date;
  }

  getSelected(): string {
    return this.registerToGenerate.label? this.registerToGenerate.label.id.toString(): '';
  }

  saveRegister() {
    if (isValidRegister(this.registerToGenerate)) {
      saveRegisterInLocalStorage(this.registerToGenerate);
      this.messageInfo = '';
      this.router.navigate(['/' + NAVEGATION.home]);
    } else {
      this.messageInfo = 'Completa todos los campos para continuar.';
    }
  }
}
