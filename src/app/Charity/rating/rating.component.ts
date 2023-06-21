import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import * as alertifyjs from 'alertifyjs';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  stars: number[] = [1, 2, 3, 4, 5];
  constructor(private route:Router) { }

  ngOnInit() {
  }
  countStar(star) {
    console.log('Value of star', star);
    alertifyjs.success('Rated Successfully');
    this.route.navigate(['Charity']);
    
  }

  
}
