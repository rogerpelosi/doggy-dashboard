import { Component, Input, OnInit } from '@angular/core';
import { Doggy } from 'src/doggy';
import { DoggyService } from '../doggy.service';

@Component({
  selector: 'app-doggycard',
  templateUrl: './doggycard.component.html',
  styleUrls: ['./doggycard.component.css']
})
export class DoggycardComponent implements OnInit {

  constructor(
    private doggyService: DoggyService){}

  @Input() oneDog:Doggy;

  ngOnInit(): void {
  }

  edit(){
    console.log(`editing ${this.oneDog.id}`);
  }

  delete(){
    console.log(`deleting ${this.oneDog.id}`);
    this.doggyService.deleteDog(this.oneDog.id).subscribe({
      next: success=>console.log(success),
      error: failure=>console.log(failure)
    })
  }

}
