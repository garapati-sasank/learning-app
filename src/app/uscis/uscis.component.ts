import { Component } from '@angular/core';

@Component({
  selector: 'app-uscis',
  templateUrl: './uscis.component.html',
  styleUrl: './uscis.component.scss'
})
export class UscisComponent {
  title: string = 'shopping-app';
  studentName: string = 'Sasi';
  additionResult: number;
  fullName: string;
  customer: any = {
    id: 101,
    name: 'Sashi',
    address: {
      apartmentNo: 239,
      street: 'Woodstreet',
      village: 'Edwardsvillie',
      state: 'Illinois',
      zipCode: 62025,
    },
    email: 'cust@gmail.com',
    transactionDates: ['09/09/2023', '09/11/2023'],
  };

  customersListWithAddress: any = [
    {
      id: 101,
      name: 'Sasi',
      address: {
        apartmentNo: 239,
        street: 'Woodstreet',
        village: 'Edwardsvillie',
        state: 'Illinois1',
        zipCode: 62025,
      },
    },
    {
      id: 102,
      name: 'Bhargav',
      address: {
        apartmentNo: 239,
        street: 'Woodstreet',
        village: 'Edwardsvillie',
        state: 'Illinois',
        zipCode: 62025,
      },
    },
    {
      id: 103,
      name: 'Phani',
      address: {
        apartmentNo: 239,
        street: 'Woodstreet',
        village: 'Edwardsvillie',
        state: 'Illinois2',
        zipCode: 6202890,
      },
    },
  ];

  constructor() {
    console.log('AppComponent constructor');
    this.extractVillageFromCustomer();
    this.addTwoNumbers(10, 20);
    this.addTwoNumbers(10, 20);
    this.studentDetails(10, '20', false);
    this.additionResult = this.addNumbers(1,2);
    console.log(this.additionResult);
    this.fullName = this.mergerStrings('Sasi', 'Garapati');
    console.log(this.fullName);
  }

  getDetails() {
    //
    console.log('function called...');
    console.log(this.studentName);
    console.log(this.customer.address.state);
    console.log(this.customer.transactionDates[1]);
  }

  extractVillageFromCustomer() {
    console.log(this.customer.address.village);
  }

  extractingTheZipCode() {
    console.log(this.customersListWithAddress[2].address.zipCode);
    this.getDetails();
  }

  addTwoNumbers(value1: number, value2: number) {
    console.log(value1);
    console.log(value2);
    console.log(value1 + value2);
  }

  studentDetails(value1: number, value2: string, value3: boolean): void {
    console.log(value1);
    console.log(value2);
    console.log(value3);
  }

  addNumbers(value1: number, value2: number): number {
    // return value1+value2;
    let result: number;
    result = value1+value2;
    return result;
  }

  mergerStrings(value1: string, value2: string): string {
    let mergedStrings: string;
    mergedStrings=value1+value2;
    return mergedStrings;
  }

}
