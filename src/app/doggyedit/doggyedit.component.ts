import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Doggy } from '../model/doggy';
import { DoggyService } from '../service/doggy.service';
import { RoutingService } from '../service/routing.service';

@Component({
  selector: 'app-doggyedit',
  templateUrl: './doggyedit.component.html',
  styleUrls: ['./doggyedit.component.css']
})
export class DoggyeditComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private doggyService: DoggyService,
    private routing: RoutingService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DoggyeditComponent>){}

  doggy: Doggy = this.data.dog;
  img: string = '';

  editDogForm: FormGroup = this.formBuilder.group({
    id: this.formBuilder.control(this.doggy.id, [Validators.required]),
    breed: this.formBuilder.control(this.doggy.breed, [Validators.required]),
    name: this.formBuilder.control(this.doggy.name, [Validators.required])
  });

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe({
    //   next: id=>{
    //     console.log(id);
    //     this.doggyService.getDog(id['doggyId']).subscribe({
    //       next:dog=>{
    //         console.log(dog);
    //         this.doggy = dog;
    //       }
    //     });
    //   }
    // })
    // this.doggyService.getImg().subscribe({
    //   next: img=>this.img = img.message
    // })
    console.log(this.doggy);
  }

  back(){
    this.routing.dashboardRoute();
  }

  edit(){
    this.doggy.breed = this.editDogForm.value['breed'];
    this.doggy.name = this.editDogForm.value['name'];
    console.log(this.doggy);
    this.dialogRef.close();
    this.doggyService.updateDog(this.doggy).subscribe({
      next: success=>console.log(success),
      error: failure=>console.log(failure)
    });
    // this.data.func.emit()

  }

}
