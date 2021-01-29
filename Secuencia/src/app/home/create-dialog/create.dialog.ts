import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
    name: string;
    sessionID: string;
  }

@Component({
    selector: 'secuencia-create-dialog',
    templateUrl: 'create.dialog.html',
  })
  export class CreateDialog {
  
    constructor(
      public dialogRef: MatDialogRef<CreateDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }