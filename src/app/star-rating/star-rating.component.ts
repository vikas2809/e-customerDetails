import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  rate:string;
  constructor() {
  this.rate="Please Rate The Customer";
   }

  ngOnInit() {
  }

}
