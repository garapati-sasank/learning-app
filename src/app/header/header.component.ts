import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  router = inject(Router);

  navigateToMens() {
    // logic to add route into browser url.
    this.router.navigate(['mens']);
  }

  navigateToWomes() {
    this.router.navigate(['womens']);
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  navigateTotestingTheButton(){
    
  }

  navigateToOutput(path: string) {
    this.router.navigate([path]);
  }

  

}
