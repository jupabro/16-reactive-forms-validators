import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor(private fb: FormBuilder) { }

  userForm = this.fb.group({
    credentials: this.fb.group({
      username: [null],
      password: [null]
    })
  })

  login() {
    console.log(this.userForm.value)
  }

}
