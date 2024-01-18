import { EnumSelect } from "src/app/components/select/select.component";
import { Register } from "../interfaces/register.interface";
import { LABEL_VOID } from "./label";

export const REGISTER_VOID:Register={
    section: EnumSelect.VOID,
    label: LABEL_VOID,
    date: '',
    amount: 0,
    coin: '',
}