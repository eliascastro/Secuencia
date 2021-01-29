import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateDialog, DialogData } from './create-dialog/create.dialog';
import { JoinDialog } from './join-dialog/join.dialog';

@Component({
  selector: 'secuencia-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createSession(): void {
    const createDialogRef = this.dialog.open(CreateDialog, {
      width: '350px',
      data: {name: '', sessionID:''}
    });

    createDialogRef.afterClosed().subscribe((res: DialogData) =>{
      console.log("create", res);
    });

  }

  joinSession(): void {
    const joinDialogRef = this.dialog.open(JoinDialog, {
      width: '350px',
      data: {name: '', sessionID: ''}
    });

    joinDialogRef.afterClosed().subscribe((res: DialogData) => {
      
      console.log("join", res);

    });
  }

}
