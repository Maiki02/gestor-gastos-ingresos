import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    template:''
})
export class InputForm {
    @Input() value:string='';
    @Input() placeholder:string=''
    @Output() set=new EventEmitter<string>();
    
    constructor(){}

    emit(value:string){
        this.set.emit(value)
    }
}
