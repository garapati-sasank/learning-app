import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StudentI } from '../Custom-interfaces';
import { UniversityFormService } from '../university-overview/university-form.service';
import { CommunicationService } from '../communication.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navItems = [
    { label: 'Mens', navigateUrl: 'mens', isActive: false, showItem: true },
    { label: 'Womens', navigateUrl: 'womens', isActive: false, showItem: true },
    { label: 'Kids', navigateUrl: 'kids', isActive: false, showItem: true },
    { label: 'Sales', navigateUrl: 'sale', isActive: false, showItem: true },
    { label: 'USCIS', navigateUrl: 'uscis', isActive: false, showItem: true },
    { label: 'University', navigateUrl: 'university', isActive: false, showItem: true },
    { label: 'Women-Sale', navigateUrl: 'women-sale', isActive: false, showItem: true },
    {
      label: 'University Lazy Loading',
      navigateUrl: 'university-lazy-loading',
      isActive: false, showItem: true,
    },

    {
      label: 'University Table using input and output',
      navigateUrl: 'output',
      isActive: false, showItem: true,
    },
    { label: 'login', navigateUrl: 'login', isActive: false, showItem: true },
    { label: 'Signup', navigateUrl: 'signup', isActive: false, showItem: true },
    { label: 'logout', navigateUrl: 'logout', isActive: false, showItem: true },
    { label: 'Vehicle', navigateUrl: 'vehicle', isActive: false, showItem: true },
    { label: 'Car', navigateUrl:'car', isActive: false, showItem: true},
    // { label: 'Cart', navigateUrl:'cart', isActive: false, showItem: true},

  ];

  name: string = 'sasi';
  userName = '';
  communicationServicet = inject(CommunicationService);

  student: StudentI = {
    name: 'sasi',
    age: 20,
  };

  constructor(private router: Router, private ser: UniversityFormService) {
    console.log('Header constructor');

    // this.communicationService.username$.subscribe((response) => {
    //   console.log(response);
    //   this.userName = response;
    //   if(this.userName) {
    //     console.log(this.userName)
    //     let index = this.navItems.findIndex((navItem) => navItem.label === 'login');
    //     console.log(index);
    //     this.navItems[index].showItem = false;
    //     // this.navItems = this.navItems.map((navItem) => {
    //     //   if(navItem.label === 'login') {
    //     //     return {...navItem, showItem: false}
    //     //   } else {
    //     //     return navItem
    //     //   }
    //     // })
        

    //   }
    // });

    // this.router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe((nav) => {
    //     console.log(nav['url']);
    //     this.navItems = this.navItems.map((navItem) => {
    //       if (nav['url'].includes(navItem.navigateUrl)) {
    //         return { ...navItem, isActive: true };
    //       } else {
    //         return { ...navItem, isActive: false };
    //       }
    //     });
    //   });
  }

  logoutClick() {
    this.navigateToLogin();
  }

  // router = inject(Router);

  navigateToMens(): void {
    // logic to add route into browser url.
    this.router.navigate(['mens']);
  }

  navigateToWomes(): void {
    this.router.navigate(['womens']);
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  navigateTotestingTheButton() {}

  navigateToLogin() {
    this.router.navigate(['login']);
  }

  navigateToOutput(path: string) {
    this.router.navigate([path]);
  }

  navigateToSignup() {
    this.router.navigate(['signup']);
  }
}
