import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { BannerComponent } from './banner/banner.component';
import { ServicesComponent } from './services/services.component';
import { MissionVisionComponent } from './mission-vision/mission-vision.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { ProblemsSolutionsComponent } from './problems-solutions/problems-solutions.component';



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    ServicesComponent,
    MissionVisionComponent,
    ProblemsSolutionsComponent,
    WhyUsComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
