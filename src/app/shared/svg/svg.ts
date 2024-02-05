import { Component, Input } from "@angular/core";

@Component({
    template:''
})
export class SvgClass {
    @Input() color:string='black';
    @Input() size:number=24;

    getSize(){
        return `svg-${this.size}`;
    }
}