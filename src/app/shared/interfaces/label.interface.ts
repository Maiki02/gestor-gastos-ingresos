import { EnumSelect } from "src/app/components/select/select.component";

export interface Label {
    id: number;
    name?: string;
    icon: string;
    color: string;
    section?: EnumSelect;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
}