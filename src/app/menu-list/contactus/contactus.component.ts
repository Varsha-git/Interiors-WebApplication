import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  message: string = 'Will connect with you !';
  actionButtonLabel: string = 'Thanks !';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 2000;

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  onClickMe() {
    let config = new MatSnackBarConfig();
    config.duration = this.setAutoHide ? this.autoHide : 0;
    this.snackBar.open(
      this.message,
      this.action ? this.actionButtonLabel : undefined,
      config
    );
  }

  openSnackBar(action: string) {}
}
