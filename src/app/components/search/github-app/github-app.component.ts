import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import {GithubRepoService} from '../github-repo.service';



@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {
  
  public githubUserQuery!: any;
  public githubProfile:any;
  public githubRepos!: any;
  public errorMessage!: string;
  
  
  

  constructor(private githubService:GithubService,private githubrepoService:GithubRepoService) { }

  public searchUser(){
    this.githubService.getProfile(this.githubUserQuery).subscribe({next:(data)=>{
       this.githubProfile=data;
    } , error:(error) => {
      this.errorMessage=error;
    }});

    //to get github repositories
   this.githubrepoService.getRepos(this.githubUserQuery).subscribe({next:(data)=>{
    this.githubRepos=data;
  } , error:(error)=> {
    this.errorMessage=error;
  }});

   
 

   
    
  }


  ngOnInit(): void {
  }

}

