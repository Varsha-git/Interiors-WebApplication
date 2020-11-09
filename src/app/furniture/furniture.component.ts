import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css'],
})
export class FurnitureComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('enter on init');
    console.log(AOS);
    AOS.init();
  }
}
