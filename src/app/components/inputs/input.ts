import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    template:''
})
export class InputForm {
    @Output() set=new EventEmitter<string>();
    
    constructor(){}

    emit(value:string){
        this.set.emit(value)
    }
}
