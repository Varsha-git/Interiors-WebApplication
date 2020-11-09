import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css'],
})
export class WorkspaceComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('enter on init');
    console.log(AOS);
    AOS.init();
  }
}
