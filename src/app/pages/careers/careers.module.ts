import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';
import { BannerComponent } from './banner/banner.component';
import { DetailsComponent } from './details/details.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    CareersComponent,
    BannerComponent,
    DetailsComponent,
    MainComponent
  ],
  imports: [
    CareersRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class CareersModule { }
