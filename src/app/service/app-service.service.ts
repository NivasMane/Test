import { Injectable } from '@angular/core';

@Injectable()
export class AppServiceService {

  friendDetailList: friendDetail[];
  constructor() { }

  getFriendList(){
    this.friendDetailList = [
      {id:1, name:'Nivas'},
      {id:2, name:'Ashok'},
      {id:3, name:'Prashant'},
      {id:4, name:'Rahul'},
      {id:5, name:'Yogesh'},
      {id:6, name:'Dipak'},
      {id:7, name:'Jayesh'},
    ];
    return this.friendDetailList;
  }

}

export class friendDetail{
  id:number;
  name:string;
}
