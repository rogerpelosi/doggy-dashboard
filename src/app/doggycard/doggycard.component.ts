import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Doggy } from '../model/doggy';
import { Image } from '../model/image';
import { DoggyService } from '../service/doggy.service';

@Component({
  selector: 'app-doggycard',
  templateUrl: './doggycard.component.html',
  styleUrls: ['./doggycard.component.css']
})
export class DoggycardComponent implements OnInit {

  constructor(
    private doggyService: DoggyService,
    private httpClient: HttpClient){}

  @Input() oneDog:Doggy;

  @Output() handleDelete: EventEmitter<number> = new EventEmitter<number>();

  img: Image = new Image();

  src: string ="https://www.downloadclipart.net/large/8134-dog-silhouette-design.png";

  ngOnInit(): void {
    this.httpClient.get<Image>(`https://dog.ceo/api/breeds/image/random`).subscribe({
      next:img=>{
        console.log(img.message)
        this.img.message = img.message;
        // console.log(img.);
      },
      error: nah=>console.log(nah)
    })
  }

  edit(){
    console.log(`editing ${this.oneDog.id}`);
  }

  delete(){
    console.log(`deleting ${this.oneDog.id}`);
    let id:number = this.oneDog.id;
    this.doggyService.deleteDog(this.oneDog.id).subscribe({
      next: success=>{
        this.handleDelete.emit(id)},
      error: failure=>{
        console.log(failure.error.text);
        if(failure.error.text == 'Dog Deleted'){
          this.handleDelete.emit(id)
        }
      }
    })
  }

}
