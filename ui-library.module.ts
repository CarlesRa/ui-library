import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GyButtonComponent } from './components/gy-button/gy-button.component';
import {MaterialModule} from "../gravity-fw-core/material.module";
import { GyTableComponent } from './components/gy-table/gy-table.component';
import { GyNotificationPanelComponent } from './components/gy-notification-panel/gy-notification-panel.component';



@NgModule({
  declarations: [
    GyButtonComponent,
    GyTableComponent,
    GyNotificationPanelComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
    exports: [
        GyButtonComponent,
        GyTableComponent,
        GyNotificationPanelComponent,
    ]
})
export class UiLibraryModule { }
