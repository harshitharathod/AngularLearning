import { Component } from '@angular/core';
import { User } from './user';
import {EnrollmentService} from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['Angular', 'React', 'Vue' ]
  submitted=false;
  errormsg='';
  topicHasError=true;
   title='app';
  userModel= new User('Harshitha', 'harshitharathod275@gmail.com', 7386486777, 'default','morning', true )
 
  constructor(private enrollmentService: EnrollmentService){}
  validateTopic(value){
    if(value =='default'){
      this.topicHasError=true;
    }else{
      this.topicHasError=false;
    }
  }

  onSubmit(){
    this.submitted=true;
    this.enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log("Success!", data),
      error => this.errormsg=error.statusText

    )
  }

}
