import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'change-password',
        component: ChangePasswordComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: '',
        component: ListComponent
      },
    ]
  },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
