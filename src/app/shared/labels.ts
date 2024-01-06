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


export function saveLabelInLocalStorage(label:Label){
    const nameLocStor= label.section === EnumSelect.GASTOS ? localStorageLabel.labelsGastos : localStorageLabel.labelsIngresos;
    const labelsInLocalStorage = localStorage.getItem(nameLocStor) ? JSON.parse(localStorage.getItem(nameLocStor)!) : [];
    labelsInLocalStorage.push(label);
    localStorage.setItem(nameLocStor, JSON.stringify(labelsInLocalStorage));
}