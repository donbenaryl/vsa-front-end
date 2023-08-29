import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'basic-details',
        component: BasicDetailsComponent
      },
      {
        path: '',
        component: AdminComponent
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
export class AdminRoutingModule { }
