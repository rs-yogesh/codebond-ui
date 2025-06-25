import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InfoBoxComponent } from '../components/info-box/info-box.component';
import { MegaDropdownComponent } from '../components/mega-dropdown/mega-dropdown.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    InfoBoxComponent,
    MegaDropdownComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  activeDropdown: string | null = null;
  @ViewChild('headerRef', { static: true }) headerRef!: ElementRef;

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.headerRef?.nativeElement?.contains(event.target)) {
      this.activeDropdown = null;
    }
  }

  toggleDropdown(item: string) {
    this.activeDropdown = item;
  }

  isDropdownOpen(item: string): boolean {
    return this.activeDropdown === item;
  }

  onMegaItemClick(label: string): void {
    console.log('Mega menu item clicked:', label);
    this.activeDropdown = null;
  }

  onInfoAction(itemName: string) {
    // console.log('Clicked on:', itemName);
    this.toggleDropdown(itemName); // Optionally toggle dropdown on icon click
  }

  navItems = [
    {
      name: 'Domains',
      megaMenu: {
        columns: [
          {
            title: 'Find a Domain',
            items: [
              { label: 'Search for Domain Names', icon: 'search' },
              { label: 'Transfer Domain Names', icon: 'swap_horiz' },
              { label: 'gTLD Domain Extensions', icon: 'list_alt' },
            ],
          },
          {
            title: 'Auctions for Domains',
            items: [
              { label: 'Auctions for Domain Names', icon: 'gavel' },
              { label: 'Appraise Domain Name Value', icon: 'attach_money' },
              { label: 'Discount Domain Club', icon: 'local_offer' },
            ],
          },
        ],
      },
    },
    { name: 'Websites and Hosting' },
    { name: 'Email' },
    { name: 'Security' },
    { name: 'Marketing' },
    { name: 'Pricing' },
  ];

  rightLinks = ['Contact Us', 'Help', 'Sign In'];
}
