import { getCurrencySymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vm-hacker-status',
  template: `
    <div class="status-pulse">
      <span>{{ color }}</span>
    </div>
  `,
  styles: [],
})
export class HackerStatusComponent implements OnInit {
  @Input() status: string;
  color: string;
  constructor() {}

  ngOnInit(): void {
    this.color = this.statusToColor(this.status);
  }

  statusToColor(status: string) {
    switch (status) {
      case 'danger':
        return 'red';
      case 'safe':
        return 'red';
      case 'warning':
        return 'red';
      default:
        return 'green';
    }
  }
}
