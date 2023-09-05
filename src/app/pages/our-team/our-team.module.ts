import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { OurTeamRoutingModule } from './our-team-routing.module';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    OurTeamRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class OurTeamModule { }
