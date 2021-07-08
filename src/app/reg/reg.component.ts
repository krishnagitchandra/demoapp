import { Component, OnInit } from '@angular/core';
import {MainNavComponent} from '../main-nav/main-nav.component'
import {User} from '../user'

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  
  userModel = new User('krishna','chandra.krishna666@gmail.com',22,'india',6362937734);
  constructor() { }

  ngOnInit(): void {
  }

}
