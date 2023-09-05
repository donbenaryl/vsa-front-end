import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from 'src/app/partial/header/header.component';
import { FooterComponent } from 'src/app/partial/footer/footer.component';
import { ContactUsComponent } from 'src/app/contact-us/contact-us.component';
import { GetStartedComponent } from 'src/app/get-started/get-started.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { RouterModule } from '@angular/router';
import { MenuComponent } from 'src/app/partial/menu/menu.component';
import { MenuMobileComponent } from 'src/app/partial/menu-mobile/menu-mobile.component';
import { LogoutComponent } from 'src/app/partial/logout/logout.component';
import { ConfirmComponent } from 'src/app/dialogs/confirm/confirm.component';
import { AlertComponent } from 'src/app/dialogs/alert/alert.component';
import { DynamicFormComponent } from 'src/app/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AlertComponent,
    MenuComponent,
    ContactUsComponent,
    MenuMobileComponent,
    GetStartedComponent,
    ConfirmComponent,
    DynamicFormComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatBadgeModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatRadioModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPageScrollCoreModule.forRoot({duration: 300}),
    NgxPageScrollModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AlertComponent,
    ContactUsComponent,
    MenuMobileComponent,
    GetStartedComponent,
    ConfirmComponent,
    DynamicFormComponent,
    LogoutComponent,
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatBadgeModule,
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatRadioModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    RouterModule
  ],
})
export class SharedModule { }
