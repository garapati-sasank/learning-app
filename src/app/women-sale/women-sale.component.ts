import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-women-sale',
  templateUrl: './women-sale.component.html',
  styleUrl: './women-sale.component.scss'
})
export class WomenSaleComponent {

 router = inject(Router);


  navigateTo(childrenPath: string) {
    let path = `women-sale/${childrenPath}`;
    console.log(path);
    this.router.navigate([path]);
  }
}
