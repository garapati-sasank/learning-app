import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UniversityFormService } from '../university-overview/university-form.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LoginResponseI } from '../interfaces/authI';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  uu = inject(UniversityFormService);
  authService = inject(AuthService);

  loginForm: FormGroup;

  name: string = 'sasi';
  router = inject(Router);
  communicationService = inject(CommunicationService);

  constructor() {
    this.createForm();
  }

  createForm() {
    console.log(this.loginForm);
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    console.log(this.loginForm);
  }

  loginFormClick() {
    console.log(this.loginForm);

    // if (this.loginForm.valid) {
    this.authService.login(this.loginForm.value).subscribe(
      (response: LoginResponseI) => {
        this.router.navigate(['mens']);
        console.log(response);
        // this.communicationService.userName = response.data.user.userName;
        this.communicationService.setUserName(response?.data?.user?.userName);
        this.communicationService.setRole(response.data.user.role);
        sessionStorage.setItem('app_token', response.data.token);
        // this.communicationService.setUserName(response['data']['user']['userName']);
      },
      (error) => { }
    );
    // }
  }
}