import { EnumSelect } from "../components/select/select.component";
import { localStorageRegister } from "./const/localStorage";
import { Register } from "./interfaces/register.interface";
import { getRandomId, isSectionValid, isValidLabel } from "./labels";

/**
 * Given a Register, validates if all its fields are valid.
 * @param register - The input Register to be validated.
 * @returns True if the input is a valid Register, false otherwise.
 */
export function isValidRegister(register: Register): boolean {
  return (
    isSectionValid(register.section) &&
    isDateValid(register.date) &&
    isValidLabel(register.label) &&
    register.amount > 0
  );
}

export function saveRegisterInLocalStorage(register: Register) {
    const nameLocStor= register.section === EnumSelect.GASTOS ? localStorageRegister.registerExpense : localStorageRegister.registerIncome;
    const array:Register[]= localStorage.getItem(nameLocStor) ? JSON.parse(localStorage.getItem(nameLocStor)!) : [];
    const id:number=getRandomId(array)

    array.push({
        ...register,
        id: id.toString()
    });
    localStorage.setItem(nameLocStor, JSON.stringify(array));
}

/**
 * Given a date, validates if it is valid.
 * @param date - The input date to be validated.
 * @returns True if the input is a valid date, false otherwise.
 */
function isDateValid(date: string): boolean {
    return date != '';
}