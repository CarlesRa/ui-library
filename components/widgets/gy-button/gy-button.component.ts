import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'gy-button',
  templateUrl: './gy-button.component.html',
  styleUrls: ['./gy-button.component.scss']
})
export class GyButtonComponent implements OnInit {

  isLoading = true;

  @Input() type!: 'mb' | 'mrb' | 'mfb' | 'mib';
  @Input()color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() text!: string;
  @Input() icon!: string;

  @Output() btnClick: EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {}

}
