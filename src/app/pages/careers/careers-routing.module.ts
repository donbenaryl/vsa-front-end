import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareersComponent } from './careers.component';
import { DetailsComponent } from './details/details.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: CareersComponent,
    children: [
      {
        path: '',
        component: MainComponent
      },
      {
        path: ':id',
        component: DetailsComponent
      }
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
