import { Component } from '@angular/core';
import { WebContentsService } from 'src/app/services/web-contents/web-contents.service';
import { IBasicDetails } from 'src/types/AdminPageTypes';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/dialogs/confirm/confirm.component';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { AlertsService } from 'src/app/services/alerts/alerts.service';


@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent {
  form: FormGroup;

  preview: any = "";

  displayedColumns = ['title', 'content'];

  columns = [
    {
      columnDef: 'title',
      header: 'Title',
      cell: (element: IBasicDetails) => `${element.title}`,
    },
    {
      columnDef: 'content',
      header: 'Content',
      cell: (element: IBasicDetails) => `${element.content}`,
    }
  ];

  dataSource: IBasicDetails[] = [];

  isLoading = true;

  constructor(
    private dialog: MatDialog,
    private webContentsService: WebContentsService,
    private alertsService: AlertsService,
  ) {
    this.form = new FormGroup({
      basic_details: new FormControl(null)
    })
  }

  ngOnInit() {
    this.fetchBasicDetails();
  }

  fetchBasicDetails() {
    this.isLoading = true;

    this.webContentsService.fetchBasicDetails()
      .subscribe(
        (res) => {
          this.dataSource = [];

          this.generate_form_control(res);
        },
        (err) => {
          this.dataSource = [];
          this.isLoading = false;
        }
      )
  }

  generate_form_control(rows: IBasicDetails[]) {
    for (let index = 0; index < rows.length; index++) {
      const row = rows[index];

      this.form.addControl(
        row.col_name, new FormControl(row.content)
      );

      if (row.col_name.includes('Img')) {
        this.form.addControl(
          `${row.col_name}-preview`, new FormControl(row.content)
        );
        this.form.addControl(
          `${row.col_name}-file-name`, new FormControl()
        );
      }

      this.dataSource.push(row);
    }

    this.isLoading = false;
  }
  continue_saving = (row: IBasicDetails) => {
    // CHANGE CURRENT DATA
    const index = this.dataSource.map((row) => row.col_name).indexOf(row.col_name);
    this.dataSource[index].content = this.form.get(row.col_name)?.value;

    this.webContentsService.updateBasicDetails({
      col_name: row.col_name,
      content: this.form.get(row.col_name)?.value,
      title: row.title
    })
      .subscribe(
        (res) => {
          this.alertsService.triggerAlert({
            isHidden: false,
            msg: `${row.title} content successfully updated`,
            type: 'success'
          })
        },
        (err) => {

        }
      )
  }

  save = (row: IBasicDetails) => {
    let beforeContent = row.content;
    let afterContent = this.form.value[row.col_name];

    if (row.col_name.includes('Img')) {
      beforeContent = `<img src='${row.content}' class='dialog-img'>`
      afterContent = `<img src='${this.form.value[row.col_name]}' class='dialog-img'>`
    }
    
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: {
        title: `Are you sure you want to update ${row.title}?`,
        before: beforeContent,
        after: afterContent,
        confirmText: 'Yes',
        cancelText: 'No',
      },
      maxWidth: '500px',
      scrollStrategy: new NoopScrollStrategy()
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.continue_saving(row);
      }
    });
  }

  reset = (row: IBasicDetails) => {
    this.form.get(row.col_name)?.setValue(row.content);

    if (row.col_name.includes('Img')) {
      // this.preview = row.content;
      this.form.patchValue({
        [row.col_name]: row.content,
        [`${row.col_name}-preview`]: row.content
      })
    }
  }

  onFileSelected(event: any, row: IBasicDetails) {
    const file: File = event.target.files[0];
    const fileType = file.type;

    console.log(event.target.files)

    if (fileType.includes('image')) {
      const reader = new FileReader();
      const selectedFiles = event.target.files[0];
      
      reader.onload = (e: any) => {
        this.preview = e.target.result;
        this.form.patchValue({
          [row.col_name]: e.target.result,
          [`${row.col_name}-preview`]: e.target.result
        })
      };

      reader.readAsDataURL(selectedFiles);
    }

    if (file) {
        this.form.patchValue({
          [`${row.col_name}-file-name`]: file.name
        })

        const formData = new FormData();

        formData.append("thumbnail", file);
    }
  }
}
