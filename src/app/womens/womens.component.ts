import { Component } from '@angular/core';

@Component({
    selector: 'app-womens',
    templateUrl: './womens.component.html',
    styleUrl: './womens.component.scss',
    standalone: false
})
export class WomensComponent {

  constructor() {
    console.log('womens constructor...')
  }
}