import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GyButtonComponent } from './components/widgets/gy-button/gy-button.component';
import {MaterialModule} from "./material.module";



@NgModule({
  declarations: [
    GyButtonComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    GyButtonComponent,
  ]
})
export class UiLibraryModule { }
