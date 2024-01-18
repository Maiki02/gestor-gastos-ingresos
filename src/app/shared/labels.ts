import { EnumSelect } from "../components/select/select.component";
import { allLabels } from "./const/label";
import { localStorageLabel } from "./const/localStorage";
import { Label } from "./interfaces/label.interface";

/*Given a Label, validates if all its fields are valid.
    Label -> boolean */
export function isValidLabel(label:Label):boolean{
    return isNameValid(label.name) && isColorValid(label.color) && isIconValid(label.icon) && isSectionValid(label.section); 
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
function isSectionValid(section:string | undefined):boolean{
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
        {id: '2', icon: 'bus', color: '#ABABAB'},
        {id: '3', icon: 'tool', color: '#222222'},
        {id: '4', icon: 'shirt', color: '#FF00FF'},
        {id: '5', icon: 'card', color: '#FF0000'}
    ]    
}

/**
 * Given a label, returns the income labels.
 * @param
 * @returns An array with the income labels saved.
 */
export function getIncomeLabels(){
    return [
        {id: '1', icon: 'cash', color: '#0AF00F'},
        {id: '2', icon: 'cripto', color: '#FE4E00'},
        {id: '3', icon: 'store', color: '#ACACAC'}
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

export function saveLabelInLocalStorage(label:Label){
    const nameLocStor= label.section === EnumSelect.GASTOS ? localStorageLabel.labelsGastos : localStorageLabel.labelsIngresos;
    const labelsInLocalStorage = localStorage.getItem(nameLocStor) ? JSON.parse(localStorage.getItem(nameLocStor)!) : [];
    const id:number=getRandomId(labelsInLocalStorage)

    labelsInLocalStorage.push({
        ...label,
        id: id.toString()
    });
    localStorage.setItem(nameLocStor, JSON.stringify(labelsInLocalStorage));
}

/**
 * We obtain a random number from 1000 to 9999 (inclusive).
 * We look for the number in the array of labels, if it does not exist, 
 * we return the number, if it exists we execute the function again.
 * @param labels - The array of labels.
 * @returns A random number from 1000 to 9999 (inclusive).
 */
function getRandomId(labels:Label[]):number{
    const id:number=Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    return labels.some( (label:Label) => label.id == id.toString()) ? getRandomId(labels) : id;
}