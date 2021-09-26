import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from "@angular/material/list";
import { MatRippleModule } from "@angular/material/core";
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatRippleModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatRippleModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ]
})
export class MaterialModule { }
