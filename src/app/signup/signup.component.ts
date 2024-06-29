import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm: FormGroup;
  authService = inject(AuthService);
  router = inject(Router);

  constructor() {
    this.newForm();
  }

  newForm() {
    this.signupForm = new FormGroup({
      userName: new FormControl('',[Validators.required, Validators.maxLength(10),Validators.minLength(4)]),
      password: new FormControl(''),
      role: new FormControl('')
    });
  }

  signUpUser() {
    console.log(this.signupForm);

    this.authService.signUp(this.signupForm.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['mens']);
      },
      (error) => {
        console.log(error);
      }
    );
    
  }



  
}
