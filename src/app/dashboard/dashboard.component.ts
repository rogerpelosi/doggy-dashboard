import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doggy } from 'src/doggy';
import { DoggyService } from '../doggy.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private doggyService: DoggyService,
    private formBuilder: FormBuilder){}

  doggyArr: Doggy[] = [];
  newDog: Doggy;

  newDogForm: FormGroup = this.formBuilder.group({
    id: this.formBuilder.control('', [Validators.required]),
    breed: this.formBuilder.control('', [Validators.required]),
    name: this.formBuilder.control('', [Validators.required])
  });

  ngOnInit(): void {
    this.doggyService.getDogs().subscribe({
      next: dogs=>{
        this.doggyArr = dogs;
        console.log(dogs);
      },
      error: na=>console.log(na)
    })
  }

}
