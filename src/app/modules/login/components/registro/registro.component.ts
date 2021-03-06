import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SignupUsers } from "../../../../models/signupUsers"
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  message:string;

  //@Input() signupUsers : SignupUsers;
  constructor(private loginService: LoginService) {
   }

  onSignup() {
    console.log(this.signupForm.value);
    console.log("Registrado");
  }

  ngOnInit(): void {
    this.loginService.sharedMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.loginService.nextMessage("Second Message")
  }

  signupForm = new FormGroup({
    name: new FormControl(''),
    mail: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    phone: new FormControl(''),
    state: new FormControl(''),
    address: new FormControl(''),
  });

}
