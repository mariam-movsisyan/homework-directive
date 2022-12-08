import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[app-input]'
})

export class InputDirective implements OnInit{
    constructor(private elementRef: ElementRef){

    }
    ngOnInit(): void {
        this._setElementStyles()
    }
    private _setElementStyles(): void {
        this.elementRef.nativeElement.classList.add('list');
    }
    
}