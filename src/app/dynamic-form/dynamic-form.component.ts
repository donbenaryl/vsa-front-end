import { Component, Input } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/dialogs/confirm/confirm.component';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { WebContentsService } from 'src/app/services/web-contents/web-contents.service';
import { IDynamicFormData, IFetchAttributes, IPageModules, IUpdateAttributes } from 'src/types/AdminPageTypes';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common/common.service';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent {
  pageModule: IPageModules = 'Goals';

  form: any;

  isLoading = true;

  currentFormDataVal: IDynamicFormData[] = [];

  locations = ['Ph', 'UK', 'US'];

  constructor(
    private dialog: MatDialog,
    private webContentsService: WebContentsService,
    private alertsService: AlertsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public commonService: CommonService
  ) {
    this.form = this.fb.group({
      dynamicData: this.fb.array([])
    });
    this.route
      .data
      .subscribe((val: any) => {
        this.pageModule = val.pageModule
      });
  }

  get dynamicData() {
    return this.form.controls["dynamicData"] as any;
  }

  addRow(row: IDynamicFormData | null = null) {
    let dynamicDataForm = this.fb.group({
      id: [0, Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      img: [''],
      imgName: [''],
      position: [''],
      location: ['']
    });

    if (row) {
      dynamicDataForm = this.fb.group({
        id: [row.id, Validators.required],
        title: [row.title, Validators.required],
        description: [row.description, Validators.required],
        img: [row.img || ''],
        imgName: [''],
        position: [row.position || ''],
        location: [row.location || '']
      });
    }

    this.dynamicData.push(dynamicDataForm);
  }

  deleteRow(index: number) {
    this.dynamicData.removeAt(index);
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.isLoading = true;
    const fetchAttr: IFetchAttributes = `fetch${this.pageModule}`;

    this.webContentsService[fetchAttr]()
      .subscribe(
        (res) => {
          this.currentFormDataVal = res;

          for (let index = 0; index < res.length; index++) {
            this.addRow(res[index]);
          }
          this.isLoading = false;
        },
        (err) => {
          this.currentFormDataVal = [];
          this.isLoading = false;
        }
      )
  }

  displayPreview(rows: IDynamicFormData[]) {
    let innerHtml = '<ul>';

    for (let index = 0; index < rows.length; index++) {
      const row = rows[index];
      
      innerHtml += '<li>';

      if (row.img) {
        innerHtml += `<img class='dialog-img' src='${row.img}' />`
      }

      innerHtml += `<strong>${row.title}: </strong>${row.description}`
      
      if (row.location) {
        innerHtml += `<div>
          <label class='fw-500'>Location:</label>
          <span>${row.location}</span>
        </div>`
      }
    }

    innerHtml += '</li>';
    innerHtml += '</ul>';

    return innerHtml;
  }

  continue_saving() {
    // CHANGE CURRENT DATA
    this.currentFormDataVal = this.form.value.dynamicData;
    const updateAttr: IUpdateAttributes = `update${this.pageModule}`;

    this.webContentsService[updateAttr](this.form.value.dynamicData)
      .subscribe(
        (res) => {
          this.alertsService.triggerAlert({
            isHidden: false,
            msg: `${this.pageModule} successfully updated`,
            type: 'success'
          })

          const arr = this.form.controls.dynamicData as FormArray;
          while (0 !== arr.length) {
            arr.removeAt(0);
          }
            
          this.fetchData();
        },
        (err) => {
          this.alertsService.triggerAlert({
            isHidden: false,
            msg: `Unable to update ${this.pageModule}. Please try again later.`,
            type: 'danger'
          })
        }
      )
  }

  save() {
    if (this.form.valid) {
      const before = this.displayPreview(this.currentFormDataVal)
      const after = this.displayPreview(this.form.value.dynamicData)
    
      const dialogRef = this.dialog.open(ConfirmComponent, {
        data: {
          title: `Are you sure you want to update the "${this.pageModule}"?`,
          before,
          after,
          confirmText: 'Yes',
          cancelText: 'No',
        },
        maxWidth: '500px',
        scrollStrategy: new NoopScrollStrategy()
      });
  
      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          this.continue_saving();
        }
      });
    }
  }

  onFileSelected(event: any, index: number) {
    const file: File = event.target.files[0];
    const fileType = file.type;

    console.log("test", this.dynamicData.controls[index].get('imgName').value)
    // console.log(event.target.files)

    if (fileType.includes('image')) {
      const reader = new FileReader();
      const selectedFiles = event.target.files[0];
      
      reader.onload = (e: any) => {
        this.dynamicData.controls[index].get('img').setValue(e.target.result)
      };

      reader.readAsDataURL(selectedFiles);
    }

    if (file) {
      this.dynamicData.controls[index].get('imgName').setValue(file.name)

        const formData = new FormData();

        formData.append("thumbnail", file);
    }
  }
}
