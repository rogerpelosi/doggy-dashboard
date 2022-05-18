import { Component, OnInit } from '@angular/core';
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
    private routing: RoutingService){}

  doggy: Doggy = new Doggy();
  img: string = '';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: id=>{
        console.log(id);
        this.doggyService.getDog(id['doggyId']).subscribe({
          next:dog=>{
            console.log(dog);
            this.doggy = dog;
          }
        });
      }
    })
    this.doggyService.getImg().subscribe({
      next: img=>this.img = img.message
    })
  }

  back(){
    this.routing.dashboardRoute();
  }

}
