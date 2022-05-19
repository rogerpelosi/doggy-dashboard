import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doggy } from 'src/app/model/doggy';
import { DoggyService } from '../service/doggy.service';

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
  newDog: Doggy = new Doggy();

  error?: string;

  newDogForm: FormGroup = this.formBuilder.group({
    id: this.formBuilder.control('', [Validators.required]),
    breed: this.formBuilder.control('', [Validators.required]),
    name: this.formBuilder.control('', [Validators.required])
  });

  ngOnInit(): void {
    this.doggyService.getDogs().subscribe({
      next: dogs=>{
        this.doggyArr = dogs.reverse();
        console.log(dogs);
      },
      error: na=>{
        console.log(na.error);
      }
    })
  }

  formSubmission(){
    this.newDog.id = this.newDogForm.value['id'];
    this.newDog.breed = this.newDogForm.value['breed'];
    this.newDog.name = this.newDogForm.value['name'];
    this.doggyService.addDog(this.newDog).subscribe({
      next: success=>{
        console.log(success);
        this.error = '';
        this.doggyArr.unshift(success);
        this.newDogForm.reset();
      },
      error: failure=>{
        console.log(failure);
        this.error = failure.error;
      }
    })
  }

  filterDeletedDog(id:number){
    this.doggyArr = this.doggyArr.filter(dog=>dog.id !== id);
  }

  filterUpdatedDog(updatedDog:Doggy){
    console.log(updatedDog);
  }

}
