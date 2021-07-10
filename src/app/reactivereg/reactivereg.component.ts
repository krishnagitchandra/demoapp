import { Component, OnInit,OnDestroy } from '@angular/core';
import {FormControl, FormGroup,FormBuilder,Validators} from '@angular/forms'
import { CountdownModule } from 'ngx-countdown';
import {Router} from '@angular/router'


@Component({
  selector: 'app-reactivereg',
  templateUrl: './reactivereg.component.html',
  styleUrls: ['./reactivereg.component.css']
})
export class ReactiveregComponent implements OnInit {

  // registrationForm = new FormGroup({
  //   name : new FormControl('krishna'),
  //   email : new FormControl(''),
  //   age : new FormControl(''),
  //   country : new FormControl(''),
  //   phone : new FormControl('')
  // });

  constructor(private fb : FormBuilder,private router: Router) { }
  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }
   

  btnClick= function () {
    this.router.navigate(['/table']);}


  registrationForm = this.fb.group({
    name : ['',[Validators.required,Validators.maxLength(10)]],
    email : [''],
    age : ['',[Validators.maxLength(2),Validators.pattern("^[0-9]*$")]],
    country : ['',[Validators.maxLength(10),Validators.pattern('^[A-Za-z]+$')]],
    phone : ['',[Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
    otp : ['',[Validators.required,Validators.pattern("^[0-9]*$")]]

  })


  public popup :any;
  public butt :any; 

  public x = true;

  click : boolean = false;

  // onButtonClick(){
  //   this.click = !this.click;
  // }

//  timerCompleted(){
//      this.x = true;
//  }
 onTimerFinished(e:any){
  if (e["action"] == "done"){
      this.click = !this.click
   }
 }

  ngOnInit(): void {
  }
}
