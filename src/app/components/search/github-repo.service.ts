import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, count, Observable, retry } from 'rxjs';
import { CLIENT_ID, CLIENT_SECRET} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient:HttpClient) { }

  
  //for github repository

  public getRepos(searchQuery:Observable <any[]>){
    let dataURL = `https://api.github.com/users/${searchQuery}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return this.httpClient.get(dataURL).pipe(
    
    );
    
  }






  public handleErrors(error:HttpErrorResponse){
    let errorMessage:string;
    if(error.error instanceof ErrorEvent){
      //server side error
      errorMessage=`MESSAGE: ${error.error.message}`;
    }
    else{
      //client side error
      errorMessage=`STATUS: ${error.status} MESSAGE : ${error.message}`;
    }
  

}


}

