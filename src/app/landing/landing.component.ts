import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InquiryComponent } from '../inquiry/inquiry.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(InquiryComponent);
  }

}
