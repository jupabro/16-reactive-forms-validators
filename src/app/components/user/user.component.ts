import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  username = new FormControl('')
  email = new FormControl('')
  password = new FormControl('')
  street = new FormControl('')
  postalCode = new FormControl('')
  city = new FormControl('')

  registered = false
  user!: User

  register() {
    this.registered = true
    this.user = {
      username: this.username.value as string,
      email: this.email.value as string,
      password: this.password.value as string,
      address: {
        street: this.street.value as string,
        postalCode: this.postalCode.value as string,
        city: this.city.value as string
      }
    }
    console.log(this.user)
  }
}
