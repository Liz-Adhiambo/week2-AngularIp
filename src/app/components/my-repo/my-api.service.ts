import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyApiService {
  user='Liz2222'
  BASE_URL=`https://api.github.com/users/${this.user}`

  constructor(private Http:HttpClient) { }
  myProfile():Observable<any>{
    return this.Http.get<any>(this.BASE_URL)
  }
}
