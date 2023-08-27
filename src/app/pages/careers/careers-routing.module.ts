import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareersComponent } from './careers.component';

const routes: Routes = [
  {
    path: '',
    component: CareersComponent,
    children: [
      {
        path: '',
        component: CareersComponent
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
export class CareersRoutingModule { }
