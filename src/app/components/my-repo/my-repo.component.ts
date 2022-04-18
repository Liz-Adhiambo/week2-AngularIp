import { Component, OnInit } from '@angular/core';
import { MyApiService } from './my-api.service';

@Component({
  selector: 'app-my-repo',
  templateUrl: './my-repo.component.html',
  styleUrls: ['./my-repo.component.css']
})
export class MyRepoComponent implements OnInit {

  constructor( private userService:MyApiService) { }
  user!:any

  ngOnInit(): void {
    this.userService.getMyProfile().subscribe(
      data=>{
        this.user=data;}
    )
  }

}
