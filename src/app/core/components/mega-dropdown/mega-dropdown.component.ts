import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mega-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mega-dropdown.component.html',
  styleUrls: ['./mega-dropdown.component.scss'],
})
export class MegaDropdownComponent {
  @Input() columns: {
    title: string;
    items: { label: string; icon: string }[];
  }[] = [];
  @Input() isOpen = false;
  @Input() image?: { src: string; caption: string };
  @Output() itemSelected = new EventEmitter<string>();

  onItemClick(label: string): void {
    this.itemSelected.emit(label);
  }
}
