import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    UsersComponent,
    ListComponent,
    RegisterComponent,
    ChangePasswordComponent
  ],
  imports: [
    UsersRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class UsersModule { }
