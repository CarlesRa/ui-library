import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gy-notification-panel',
  templateUrl: './gy-notification-panel.component.html',
  styleUrls: ['./gy-notification-panel.component.scss']
})
export class GyNotificationPanelComponent implements OnInit {

  @Input()mode!: string;
  @Input()text!: string;
  @Input()icon!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
