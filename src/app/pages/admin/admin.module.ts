import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { MenuComponent } from './menu/menu.component';
import { LeadsComponent } from './leads/leads.component';


@NgModule({
  declarations: [
    AdminComponent,
    BasicDetailsComponent,
    MenuComponent,
    LeadsComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class AdminModule { }
