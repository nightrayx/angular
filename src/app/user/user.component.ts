import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DateService } from '../service/date.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),

  })

  constructor(public dateService: DateService) { }

  ngOnInit():void  {
  }
  showForm():void {
    console.log(this.userForm);
  }
}
