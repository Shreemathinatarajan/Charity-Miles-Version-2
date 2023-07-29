import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  registration: FormGroup|any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registration = this.formBuilder.group({
      // Add your form controls here
      // For example:
      username: ['', Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, { validator: this.passwordMatchValidator }); // Add the custom validator for password confirmation
  }

  // Custom validator function for password confirmation
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit(){
    alert("Register Success");
  }
}   
