import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { InputDirective } from './directives/input-style/input.directive';
import { NgModelDirective } from './directives/ngModel/ngModel.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    NgModelDirective,
    InputDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
