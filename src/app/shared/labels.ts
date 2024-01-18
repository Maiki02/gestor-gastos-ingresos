import { EnumSelect } from "../components/select/select.component";
import { allLabels } from "./const/label";
import { localStorageLabel } from "./const/localStorage";
import { Label } from "./interfaces/label.interface";

/*Given a Label, validates if all its fields are valid.
    Label -> boolean */
export function isValidLabel(label:Label):boolean{
    return isNameValid(label.name) && isColorValid(label.color) && isIconValid(label.icon) && isSectionValid(label.section); 
}

/**
 * Given a Label, validates if default fields are valid.
 * @param label - The input Label to be validated.
 * @returns True if the input is a valid Label, false otherwise.
 */
export function isValidDefaultLabel(label:Label):boolean{
    return isColorValid(label.color) && isIconValid(label.icon);
}

/* Given a name, validates if its name is valid.
    string -> boolean */
function isNameValid(name:string | undefined):boolean{
    return name? name.length>0: false;
}

/**  
 * Given the name of an icon, the array of icons is searched. 
 * If it exists, it returns true, if it does not exist it returns false.
 * @param icon - The name of the icon to be validated.
 * @returns True if the input is a valid icon, false otherwise.
 */
function isIconValid(icon:string):boolean{
    return allLabels.some( (label:Label) => label.icon === icon);
}

/**
 * Given a string that represents a color, validates if the first character is '#', if it has 7 digits and if the remaining 6 are a valid hexadecimal.
 * @param color - The input string to be validated.
 * @returns True if the input is a valid color, false otherwise.
 */ 
function isColorValid(color:string):boolean{
    return color[0]==='#' && color.length===7 && isValidHexadecimal(color.substring(1)); 
}

/**
 * Checks if a given string is a valid hexadecimal.
 * @param hexString - The input string to be validated.
 * @returns True if the input is a valid hexadecimal, false otherwise.
 */
function isValidHexadecimal(hexString: string): boolean {
    // Use a regular expression to check if the string is a valid hexadecimal
    const hexRegex = /^[0-9A-Fa-f]+$/;
    return hexRegex.test(hexString);
}

/**
 * Given a string representing a section, returns whether it is a valid section.
 * @param section - The input string to be validated.
 * @returns True if the input is a valid section, false otherwise.
 */
export function isSectionValid(section:string | undefined):boolean{
    return section==EnumSelect.GASTOS || section==EnumSelect.INGRESOS;
}

/**
 * Given an enumSelect. Returns a string called 'Etiquetas de ...'
 * @param select - The input enumSelect.
 * @returns A string called 'Etiquetas de ...'
 */
export function getLabelText(select:EnumSelect){
    return `Etiquetas de ${select}:`
}

/**
 * Given a label, returns the expense labels.
 * @param
 * @returns An array with the expense labels saved.
 */
export function getExpenseLabels():Label[]{
    return [
        {id: '1', icon: 'restaurant', color: '#FE4E00'},
        {id: '2', icon: 'bus', color: '#ffd64e'},
        {id: '3', icon: 'tool', color: '#82692F'},
        {id: '4', icon: 'shirt', color: '#F19EF5'},
        {id: '5', icon: 'card', color: '#F03B33'}
    ]    
}

/**
 * Given a label, returns the income labels.
 * @param
 * @returns An array with the income labels saved.
 */
export function getIncomeLabels(){
    return [
        {id: '1', icon: 'cash', color: '#4AC769'},
        {id: '2', icon: 'cripto', color: '#ffa60d'},
        {id: '3', icon: 'store', color: '#5CCCA4'}
    ]    
}

/**
 * Given a label, returns the expense labels saved in localStorage.
 * @param name - The name of the localStorage item.
 * @returns An array with the expense labels saved in localStorage.
 */
export function getLabelsInLocalStorage(name:string):Label[]{
    const item= localStorage.getItem(name);
    return item ? JSON.parse(item) : [];
}

export function getAllExpenseLabels(){
    return [...getExpenseLabels(), ...getLabelsInLocalStorage(localStorageLabel.labelsGastos)];
}

export function getAllIncomeLabels(){
    return [...getIncomeLabels(), ...getLabelsInLocalStorage(localStorageLabel.labelsIngresos)];
}

/**
 * Given a label, saves it in localStorage.
 * @param label - The label to be saved.
 */
export function saveLabelInLocalStorage(label:Label){
    const nameLocStor= label.section === EnumSelect.GASTOS ? localStorageLabel.labelsGastos : localStorageLabel.labelsIngresos;
    const array:Label[] = localStorage.getItem(nameLocStor) ? JSON.parse(localStorage.getItem(nameLocStor)!) : [];
    const id:number=getRandomId(array)

    array.push({
        ...label,
        id: id.toString()
    });
    localStorage.setItem(nameLocStor, JSON.stringify(array));
}

/**
 * We obtain a random number from 1000 to 9999 (inclusive).
 * We look for the number in the array, if it does not exist, 
 * we return the number, if it exists we execute the function again.
 * @param labels - The array.
 * @returns A random number from 1000 to 9999 (inclusive).
 */
export function getRandomId(labels:any[]):number{
    const id:number=Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    return labels.some( (label:Label) => label.id == id.toString()) ? getRandomId(labels) : id;
}