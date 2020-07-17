import { HostListener , Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interior';

  top: any;
  left: any;
  expand = false;

  constructor() {}
  @HostListener('document:click', ['$event'])
  onClick($event) {
     this.expand = true;
     setTimeout(() => {
      this.expand  = false;
     }, 500);
 }

@HostListener('document:mousemove', ['$event'])
  onMousemove($event) {
    this.top = ($event.pageY - 10) + 'px';
    this.left = ($event.pageX - 10) + 'px';
 }
}
