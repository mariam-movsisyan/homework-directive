import { Component } from "@angular/core";

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})

export class ChildComponent{

    public name!: string
    public arr: string[] = []
    constructor(){
      
    }
    public onClickSubmit(){
        this.arr.push(this.name);
    }
}