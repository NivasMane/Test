import { FriendComponent } from './friend/friend.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

 export const appRoutes:Routes = [
     {
         path: '',
         component: HomeComponent
    },
     {
         path: 'friend', 
         component: FriendComponent
    }
 ];

export class AppRoutes{

}