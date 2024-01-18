import { EnumSelect } from "src/app/components/select/select.component";
import { Label } from "./label.interface";

export interface Register{
    id: string;
    section: EnumSelect;
    label: Label;
    date: string;
    amount: number;
    coin: string;
    description?: string;
    createdAt?: string;
    updatedAt?: string;
}