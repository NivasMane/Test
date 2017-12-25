import { AppServiceService, friendDetail } from '../service/app-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  appService:AppServiceService;
  friendDetailList: friendDetail[];

  constructor(appService1:AppServiceService) {
       this.appService = appService1;
   }

  ngOnInit() {
     this.friendDetailList = this.appService.getFriendList();
  }

}
