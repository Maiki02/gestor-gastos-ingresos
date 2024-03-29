import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    template:''
})
export class InputForm<T>{
    @Input() value!:T;
    @Input() placeholder:string=''
    @Input() isInvalid:boolean=false;
    @Output() set=new EventEmitter<T>();
    
    constructor(){}

    emit(value:T){
        this.set.emit(value)
    }
}
