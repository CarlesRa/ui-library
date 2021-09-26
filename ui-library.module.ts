import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GyButtonComponent } from './components/gy-button/gy-button.component';
import {MaterialModule} from "./material.module";
import { GyTableComponent } from './components/gy-table/gy-table.component';



@NgModule({
  declarations: [
    GyButtonComponent,
    GyTableComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    GyButtonComponent,
    GyTableComponent,
  ]
})
export class UiLibraryModule { }
