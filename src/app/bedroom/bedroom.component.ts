import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css'],
})
export class BedroomComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('enter on init');
    console.log(AOS);
    AOS.init();
  }
}
