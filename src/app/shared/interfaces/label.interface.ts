import { EnumSelect } from "src/app/components/select/select.component";

export interface Label {
    id: number;
    name?: string;
    icon: string;
    color: string;
    section?: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
}