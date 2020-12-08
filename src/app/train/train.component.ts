import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {
    
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
    timer(1000,2000)
    .pipe(
      map(number => number + 1 )
    )
    .subscribe(
      (number) => console.log(number)
    )

  }
}
