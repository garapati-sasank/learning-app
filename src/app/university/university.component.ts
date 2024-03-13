import { Component, inject } from '@angular/core';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrl: './university.component.scss',
})
export class UniversityComponent {

  universityService = inject(UniversityService);
  
  studentIds: number[] = [100, 200, 300];
  apiResponseList: any;
  student: any = {
    name: 'sasi',
    age: 23,
    email: 'sasi@gmail',
  };

  // this.student.name

  studentsList: any[] = [
    { name: 'sasi', age: 18, email: 'sasi@gmail.com' },
    { name: 'sasi1', age: 24, email: 'sas2i@gmail.com' },
    { name: 'sasi2', age: 20, email: 'sasi3@gmail.com' },
  ];

  studentAge: number = 21;
  title:string ='Student table';

  constructor() {
    this.modifyStudentIds();
    this.goToEachStudent();
    this.addNewPropInObj();
    this.addNumbers(3, 2);
    this.testIfCondition(30);
    this.testIfCondition(10);
  }

  // let var or const
  addNewPropInObj() {
    // this.student['ageStatus'] = this.student.age > 21 :
    let updatedStudent: any = { ...this.student, status: 'major' };
    console.log(updatedStudent);
  }

  getTheUniversityList() {
    console.log('function called...');
    this.universityService.logicToGetUniversityList().subscribe(
      (response) => {
        console.log(response);
        this.apiResponseList = response['results'];
      },
      (error) => {
        console.log(error)
      }
    );
  }

  goToEachStudent() {
    let updatedStudents: any[] = [];
    this.studentsList.forEach((studentInfo) => {
      console.log(studentInfo.age);
      let updStu: any = {...studentInfo,
        status: studentInfo.age > 20 ? 'Major' : 'Minor',
      };
      updatedStudents.push(updStu);
      // if(studentInfo.age > 20) {
      //   console.log('Major');
      // } else {
      //   console.log('Minor');
      // }

      // studentInfo.age > 20 ? console.log('Major') : console.log('Minor');
    });
    console.log(updatedStudents);
  }

  modifyStudentIds() {
    this.studentIds.forEach((id) => {
      console.log(id);
    });
  }

  addNumbers(n1: number, n2: number) {
    this.studentIds.forEach((id) => {
      console.log(id);
    });

    this.studentsList.forEach((properName) => {
      console.log(properName);
    });

    let result: number = 0;
    result = n1 + n2;
    return result;
  }

  testIfCondition(ageAppearHere: number) {
    if (this.studentAge > ageAppearHere) {
      console.log('Enter Into If Condition');
    } else {
      console.log('else');
    }
  }
}

// someFunName() {

// }

// someFun(value1: number) {

// }

// someFun = (value1: number) => {

// }

// someFunName = () => {

// }

// () {

// }

// (value1: number) => {

// }
// if(){

// }else{

// }
// {
//   results: [
//     {},
//     {},
//     {}
//   ]
// }