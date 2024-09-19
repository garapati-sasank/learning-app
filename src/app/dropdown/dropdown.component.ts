import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  box = false;
  choose: string | null = null;
  select = ['SASI', 'PHANI', 'BHARGAV'];

  theDropdown() {
    this.box = !this.box;
  }

  applyOption(select: string) {
    this.choose = select;
    this.box = false; // Close dropdown after selection
  }
}


