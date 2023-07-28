import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm: FormGroup;
  loginFailed: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.http.post<any>('http://localhost:8080/login', formData).subscribe(
        response => {
          if (response.success) {
            // Login success
            this.router.navigate(['/main-page']);
          } else {
            // Login failed
            this.loginFailed = true;
            this.loginForm.reset();
          }
        },
        error => {
          // Error handling
          console.error(error);
        }
      );
    }
  }
}
