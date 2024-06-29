import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KidsService } from '../../kids.service';
import { FormControl, FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-kids-edit',
  templateUrl: './kids-edit.component.html',
  styleUrl: './kids-edit.component.scss'
})
export class KidsEditComponent implements OnInit {

  studentDetails= null;
  studentUpdateForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, 
    private router: Router,
    private kidsService: KidsService) {

  }

  ngOnInit() {
    this.createForm();
  //  this.activatedRoute.params.subscribe(
  //   (params) => {
  //    const id =  params['id'];

  //     this.kidsService.getDataById(id).subscribe(
  //       (resp) => {
  //         this.bindDataToForm(resp['data'])
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     )
  //   },
  //   (err) => {
  //     console.log(err)
  //   }
  // )


  this.activatedRoute.params
    .pipe(
      switchMap((params) => {
        return this.kidsService.getDataById(params['id']);
      })
    )
    .subscribe(
      (resp) => {
        this.bindDataToForm(resp['data']);
      },
      (error) => {
        console.log(error);
      }
    );
}

  createForm() {
    this.studentUpdateForm = new FormGroup({
      studentName: new FormControl(''),
      studentId: new FormControl(''),
      studentPhoneNumber: new FormControl(''),
      course: new FormControl(''),
      year: new FormControl(''),
      country: new FormControl(''),
      _id: new FormControl('')
    });
  }

  bindDataToForm(studentInfo) {
    this.studentUpdateForm.patchValue({
      studentName: studentInfo.studentName ,
      studentId: studentInfo.studentId ,
      studentPhoneNumber: studentInfo.studentPhoneNumber ,
      course: studentInfo.course ,
      year: studentInfo.year ,
      country: studentInfo.country,
      _id: studentInfo._id
    })
  }

  updateForm() {
    const updatedData = this.studentUpdateForm.getRawValue();
    this.kidsService.updateForm(updatedData).subscribe(
      (resp) => {
        console.log(resp);
        this.router.navigate(['kids'])
      },
      (error) => {
        console.log(error)
      }
    )
  }

  

}
