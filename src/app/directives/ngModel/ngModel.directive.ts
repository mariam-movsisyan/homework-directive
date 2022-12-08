import { Directive, OnInit, ElementRef, EventEmitter, Input, Output, Renderer2 } from "@angular/core";

@Directive({
    selector: '[app-ngModel]'
})
export class NgModelDirective implements OnInit {

    @Input() public ngModel!: string
    @Output() ngModelChange: EventEmitter<string> = new EventEmitter<string>();

    constructor(private _elementRef: ElementRef,
        private _renderer2: Renderer2) {

    }

    ngOnInit() {
        this._setElementValue()
    }

    private _setElementValue(): void {
        this._renderer2.listen("document", "input", event => {
            this.ngModel = this._elementRef.nativeElement.value;
            this.ngModelChange.emit(this.ngModel);
        });
    }
}