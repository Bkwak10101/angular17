import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../services/user-client.service";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatIconModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatCardModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = {
    name: "",
    surname: "",
    password: "",
    phone: 0,
    email: ""
  };
  hide = true;

  public loginForm = new FormGroup({
    password: new FormControl('', {
      validators: [Validators.required], nonNullable: true
      // validators: [Validators.required, passwordValidator], nonNullable: true
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email], nonNullable: true
    })
  });

  constructor(private router: Router, private userService: UserService) {
  }

  sendCredentials() {
    this.user.password = this.loginForm.controls.password.value;
    this.user.email = this.loginForm.controls.email.value;

    // console.log(user)
    this.userService.validateLogin(this.user).subscribe();
    this.router.navigate(['/map']);
  }

  goToSignUp() {
    this.router.navigate(['/signup']);
  }
}

