import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery2',
  templateUrl: './gallery2.component.html',
  styleUrls: ['./gallery2.component.css']
})
export class Gallery2Component implements OnInit {

  @Input() idi: number;

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
    34, 35, 36, 37, 38, 39, 40];

  constructor() {
  }

  ngOnInit(): void {
  }

}
