import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../Services/notification.service';
import{NgForm,FormControl,FormGroup,Validators} from '@angular/forms'
import { ReviewsService } from '../Services/reviews.service';
import { Review } from '../Models/review';
import { Notification } from '../Models/notification';
import { UserloginService } from '../userguard/userlogin.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})


export class UserDashboardComponent implements OnInit {
  notifications!:any[];
  notification_length!:any;
  type:any
  showrouter:boolean=false
  router2:boolean=false
 routing!:string
  responce:boolean=false;
  docotrID!:number
  finalNot:Notification[]=[]
  constructor(
    private notificationServicse:NotificationService,
    private router:Router,
    private reviewServices:ReviewsService,
    private logoutServices:UserloginService
    ) { }

  ngOnInit(): void {
  this.getUserNotification()
  }
  //  shownewNotification(){
  //   this.getUserNotification()
  // }
getUserNotification(){
  this.notificationServicse.getUserNotifications().subscribe(
    (notification:any)=>{
       this.notifications=notification;
       this.notification_length=notification.length;
      this.notifications.forEach(notification => {
    //   if(notification.type==='Feedback time'){
    //     this.showrouter=false
    //     // this.router2=false
    //     console.log('true');
    //     // this.routing='/userdashboard/feedback/'+notification.doctorId
    //   }
    //  if(notification.type==='Cancel Appointment'){
    //     console.log('false');
    //     this.showrouter=true
    //     this.router2=true
    //     // this.routing='/userdashboard/reservations'
    //   }
      // switch(notification.type)
      // {
      //   case 'Feedback time':
      //   this.showrouter=true
      //   // this.router2=false
      //   break;
      //   case 'Cancel Appointment':
      //     // this.showrouter=false
      //     this.router2=true
      //   break
      // }
      console.log(notification);
      
      });
    
    }
  )
}

logout(){
this.logoutServices.logout()
this.router.navigate(['signin'])
}


}
