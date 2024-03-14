import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.scss'
})
export class SaleComponent {

  router = inject(Router);


  navigateTo(childrenPath: string) {
    let path = `sale/${childrenPath}`;
    console.log(path);
    this.router.navigate([path]);
  }

}
