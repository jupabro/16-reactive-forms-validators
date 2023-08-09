import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { emailValidator } from 'src/app/validators/email-validator';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor(private fb: FormBuilder) { }

  userForm = this.fb.group({
    credentials: this.fb.group({
      username: ["", [Validators.required, Validators.minLength(4)]],
      email: ["", [Validators.required, emailValidator]],
      password: ["", [Validators.required, Validators.minLength(4)]]
    })
  })

  login() {
    console.log(this.userForm.value)
  }

}
