import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doggy } from 'src/app/model/doggy';
import { Image } from '../model/image';

@Injectable({
  providedIn: 'root'
})
export class DoggyService {

  constructor(
    private httpClient: HttpClient){}

  getDogs(){
    return this.httpClient.get<Doggy[]>(`http://localhost:9000/api/v1/dogs`);
  }

  getDog(id: number): Observable<Doggy>{
    return this.httpClient.get<Doggy>(`http://localhost:9000/api/v1/dogs/${id}`);
  }

  addDog(newDog: Doggy): Observable<Doggy>{
    return this.httpClient.post<Doggy>(`http://localhost:9000/api/v1/dogs`, newDog);
  }

  updateDog(dog: Doggy): Observable<Doggy>{
    return this.httpClient.put<Doggy>(`http://localhost:9000/api/v1/dogs/${dog.id}`, dog);
  }

  deleteDog(id: number){
    return this.httpClient.delete(`http://localhost:9000/api/v1/dogs/${id}`);
  }

  getImg(): Observable<Image>{
    return this.httpClient.get<Image>(`https://dog.ceo/api/breeds/image/random`);
  }

}
