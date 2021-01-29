import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../create-dialog/create.dialog';

@Component({
    selector: 'secuencia-join-dialog',
    templateUrl: 'join.dialog.html',
  })
  export class JoinDialog {
  
    constructor(
      public dialogRef: MatDialogRef<JoinDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }