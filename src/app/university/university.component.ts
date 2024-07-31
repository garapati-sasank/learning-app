import { Component, inject } from '@angular/core';
import { UniversityService } from '../university.service';
import { AgenciesResponseI, AgencyI, UniversityStudentI } from '../Custom-interfaces';
import { filter, map, Observable, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrl: './university.component.scss',
})
export class UniversityComponent {
  universityService = inject(UniversityService);

  studentIds: number[] = [100, 200, 300];
  UniversityResponse$: Observable<AgencyI[]>


  studentsList: UniversityStudentI[] = [
    { name: 'sasi', age: 18, email: 'sasi@gmail.com' },
    { name: 'sasi1', age: 24, email: 'sas2i@gmail.com' },
    { name: 'sasi2', age: 20, email: 'sasi3@gmail.com' },
  ];


  apiResponseList: any;
  student: any = {
    name: 'sasi',
    age: 23,
    email: 'sasi@gmail',
  };



  learnSpreadOperator() {
    let formData = {
      firstName: 'sasi',
      lastName: 'G',
      email: 'sasig@gmail.com',
      dob: '10/10/1999'
    }
    
    let newData = {...formData, status: 'Major', email: 's@gmail.com'};
    console.log(newData);
    delete newData.status;
    console.log(newData);
    console.log(this.studentsList);
    let newStudent = {name: 'phani', age: 25, email: 'phani@gmail.com'};
    this.studentsList.push(newStudent);
    console.log(this.studentsList);
    
  }

  // this.student.name

 

  studentAge: number = 21;
  title: string = 'Student table';

  constructor() {
    this.modifyStudentIds();
    this.goToEachStudent();
   //  this.addNewPropInObj();
    this.addNumbers(3, 2);
    this.testIfCondition(30);
    this.testIfCondition(10);
    this. learnSpreadOperator();
  }

  

  getTheUniversityList(): void {
    this.UniversityResponse$ = this.universityService.logicToGetUniversityList();


    
    // .subscribe(
    //   (response: AgenciesResponseI) => {
    //     console.log(response);
    //     this.apiResponseList = response.results;
    // this.addNewPropInObj()
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  goToEachStudent() {
    let updatedStudents: any[] = [];
    this.studentsList.forEach((studentInfo) => {
      console.log(studentInfo.age);
      let updStu: any = {...studentInfo,
        status: studentInfo.age > 20 ? 'Major' : 'Minor',};
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

addNewStudent() {
  // this.universityService.checkIfidExistApi().subscribe(
  //   (response) => {
  //     console.log(response);
  //     if(!response) {
  //       this.universityService.addNewStudentApi().subscribe(
  //         () => {},
  //         () => {}
  //       )
  //     } 
  //   },
    
  // )

  this.universityService.checkIfidExistApi().pipe(
   // filter((idCardCheckResponse) => !!idCardCheckResponse),
    switchMap((idCardCheckResponse) => this.universityService.addNewStudentApi())
  ).subscribe(
    (saveDataResponse) => {
      console.log(saveDataResponse)
    },
    () => {}
  )
}
}

// 4s
// 6s

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



