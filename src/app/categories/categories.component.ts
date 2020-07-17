import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('enter on init');
    console.log(AOS);
    AOS.init();
  }

}
