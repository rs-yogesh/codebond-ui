import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
})
export class NavButtonComponent {
  @Input() label: string = '';
  @Input() active = false;
  @Output() action = new EventEmitter<void>();
}
