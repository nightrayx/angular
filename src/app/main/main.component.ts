import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

user = "name";
elements = [1, 2 , 3 , 4 ];
color = true;
date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

  userClick() {
    console.log( "clicked" );
  }
}
