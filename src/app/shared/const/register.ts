import { EnumSelect } from "src/app/components/select/select.component";
import { Register } from "../interfaces/register.interface";

export const REGISTER_VOID:Register={
    section: EnumSelect.VOID,
    label: {
        id: 0,
        icon: '',
        color: '',
    },
    date: '',
    amount: 0,
    coin: '',
}