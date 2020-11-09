import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-together-space',
  templateUrl: './together-space.component.html',
  styleUrls: ['./together-space.component.css'],
})
export class TogetherSpaceComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('enter on init');
    console.log(AOS);
    AOS.init();
  }
}
