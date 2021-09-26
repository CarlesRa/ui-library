import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from "@angular/material/list";
import { MatRippleModule } from "@angular/material/core";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatRippleModule,
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatRippleModule,
  ]
})
export class MaterialModule { }
