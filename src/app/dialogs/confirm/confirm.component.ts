import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common/common.service';
import { IConfirmDialogData } from 'src/types/DialogTypes';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
  true = true;

  false = false;

  constructor(
    public dialogRef: MatDialogRef<IConfirmDialogData>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: IConfirmDialogData,
    public commonService: CommonService
  ) { }

}
