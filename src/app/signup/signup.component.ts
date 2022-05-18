import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RoutingService } from '../service/routing.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private routing: RoutingService){}

  signupForm: FormGroup = this.formBuilder.group({
    name: this.formBuilder.control('', [Validators.minLength(1)]),
    username: this.formBuilder.control('', [Validators.required]),
    password: this.formBuilder.control('', [Validators.required]),
    passwordReentry: this.formBuilder.control('', [Validators.required])
  });

  ngOnInit(): void {
  }

  signup(){
    console.log('signing up');
  }

  vaildPasswordReEntry(control: AbstractControl): {[key:string]:boolean}|null{
    if(this.signupForm.value['password'])
{    if(control.value === this.signupForm.value['password']){
      return null;
    }}
    return {"validatePassword": true};
  }

}
