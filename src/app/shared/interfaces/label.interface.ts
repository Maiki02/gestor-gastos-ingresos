import { EnumSelect } from "src/app/components/select/select.component";

export interface Label {
    id: string;
    name?: string;
    icon: string;
    color: string;
    section?: EnumSelect;
    description?: string;
    status?: number;
    createdAt?: Date;
    updatedAt?: Date;
}