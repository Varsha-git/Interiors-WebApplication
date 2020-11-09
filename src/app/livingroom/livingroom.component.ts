import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-livingroom',
  templateUrl: './livingroom.component.html',
  styleUrls: ['./livingroom.component.css'],
})
export class LivingroomComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('enter on init');
    console.log(AOS);
    AOS.init();
  }
}
