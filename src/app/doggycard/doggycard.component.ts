import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DoggyeditComponent } from '../doggyedit/doggyedit.component';
import { Doggy } from '../model/doggy';
import { Image } from '../model/image';
import { DoggyService } from '../service/doggy.service';
import { RoutingService } from '../service/routing.service';

@Component({
  selector: 'app-doggycard',
  templateUrl: './doggycard.component.html',
  styleUrls: ['./doggycard.component.css']
})
export class DoggycardComponent implements OnInit {

  constructor(
    private doggyService: DoggyService,
    private httpClient: HttpClient,
    private routing: RoutingService,
    private dialog: MatDialog){}

  @Input() oneDog:Doggy;

  @Output() handleDelete: EventEmitter<number> = new EventEmitter<number>();

  @Output() handleUpdate: EventEmitter<Doggy> = new EventEmitter<Doggy>();

  img: Image = new Image();

  src: string ="https://www.downloadclipart.net/large/8134-dog-silhouette-design.png";

  ngOnInit(): void {
    this.doggyService.getImg().subscribe({
      next: img=>this.img = img
    })
  }

  edit(){
    console.log(`editing ${this.oneDog.id}`);
    // this.handleUpdate.emit();
    // this.routing.doggyRoute(this.oneDog.id);
    this.dialog.open(DoggyeditComponent, {
      width: '250px',
      data: {dog: this.oneDog, func: this.handleUpdate}
    }).afterClosed().subscribe(()=>{this.ngOnInit()})
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
