import { Component } from '@angular/core';

@Component({
  selector: 'sale-tops',
  templateUrl: './tops.component.html',
  styleUrl: './tops.component.scss'
})
export class TopsComponent {

  constructor() {
    // this.testFind();
    let result = this.add3(10, 20);
    // console.log(result);
    this.testWithArys();
  }

  add1 = (v1: number, v2: number) => {
    return v1 + v2;
  }

  add3 = (v1: number, v2: number) => v1 + v2;
  add2 = (v1: number, v2: number) => {
    let c = v1 + v2;
    return c
  }

  mul = (v1: number) => v1 * 20;
  mu4 = v1 => v1 * 20;

  mul1 = (v1: number) => {
    let r = v1 * 20;
    return r;
  }

  testFind() {
    let names: string[] = ['Sasi', 'Phani', 'Bhargav', 'Phani'];
    let matchingData = names.find((x, index) => {
      console.log(index)
      let r = x === 'Phani';
      return r;
    })

    let matchingData1 = names.find(x => x === 'Phani');
    console.log(matchingData);
    names.forEach((name, index) => {
      console.log(name, index)
    });

    let filteredNames = names.filter((name) => {
      let length = name.length;
      return length > 4;
    });
    console.log(filteredNames);
  }

  testWithArys() {
    let studentList = [
      { name: 'Apple', id: 10, opYears: 20 },
      { name: 'Facebook', id: 12, opYears: 26 },
      { name: 'Samsung', id: 15, opYears: 14 }
    ];

    studentList.forEach(stu => console.log(stu));

    let filteredStudents = studentList.filter((stu) => stu.opYears < 15);
    console.log(filteredStudents);

    let filteredStudent = studentList.find(stu => stu.opYears > 15);
    console.log(filteredStudent);
  }
}