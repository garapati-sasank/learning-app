import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { KidsService } from '../kids.service';
import { StudentListResponseI } from '../Custom-interfaces';
import { Router } from '@angular/router';
import { catchError, switchMap, throwError } from 'rxjs';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.scss',
})
export class KidsComponent implements OnInit, OnDestroy {
  studentCreateForm: FormGroup;

  globalVariableLearning: any;

  ngOnInit() {
    console.log('ngOnInit123');
    this.createForm();
    this.getStudentData();
  }

  constructor(private kidsService: KidsService, private router: Router) {
    console.log('constructor');
  }

  createForm() {
    this.studentCreateForm = new FormGroup({
      studentName: new FormControl(''),
      studentId: new FormControl(''),
      studentPhoneNumber: new FormControl(''),
      course: new FormControl(''),
      year: new FormControl(''),
      country: new FormControl(''),
    });
  }

  createStudentFormClick() {
    console.log(this.studentCreateForm.value);
    // bring loader icon
    this.kidsService.saveStudent(this.studentCreateForm.value).subscribe(
      (resp) => {
        console.log(resp);
        this.studentCreateForm.reset();
        this.getStudentData();
        // turn off loader icon
      },
      (error) => {
        console.log(error);
        // turn off 
      }
    );


    this.kidsService.saveStudent(this.studentCreateForm.value).pipe(
      // switchMap(() => {
      //   return this.kidsService.logicToGetData()
      // }),
      switchMap(() =>  this.kidsService.logicToGetData()),
      catchError((error) => throwError(error))
    ).subscribe(
      (response: StudentListResponseI) => {
        this.globalVariableLearning = response.data;
      },
      (error) => {}
    );
  }

  ngOnDestroy() {
    console.log('Destroyed function exec...');
  }

  getStudentData(): void {
    this.kidsService.logicToGetData().subscribe(
      (response: StudentListResponseI) => {
        console.log(response);
        this.globalVariableLearning = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onDelete(id: string): void {
    console.log(id);
    this.kidsService.deleteData(id).subscribe(
      (response) => {
        console.log(response);
        this.getStudentData()
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onEdit(sId: string): void {
    // do api call, once you get success resp from api then navigate user to edit page. 
    this.router.navigate([`kids/edit/${sId}`]);
  }
}

// myFun(a: number, b: number) {
//   // const c = a+b
//   // return c;
//   return a+b;
// }

// myFun = (a: number, b: number) => {
//   const c = a+b
//   return a+b
// }

// myFun = (a: number, b: number) =>  a+b;


