export interface ResponseBackEnd {
    status: {
        code: number;
        message: string;
        status: string;
    },
    data: any;
}