import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.putUserData()
  }

  userData:any = []
  putUserData=()=>{
    this.myApi.getUserData().subscribe(
      (data)=>{
        this.userData = data
      }
    )
  }
  
  

  ngOnInit(): void {
  }

}
