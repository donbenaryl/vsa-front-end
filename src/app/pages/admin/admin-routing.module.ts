import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicFormComponent } from 'src/app/dynamic-form/dynamic-form.component';
import { AdminComponent } from './admin.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { LeadsComponent } from './leads/leads.component';

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
        path: 'goals',
        component: DynamicFormComponent,
        data: {
          pageModule: 'Goals'
        }
      },
      {
        path: 'services',
        component: DynamicFormComponent,
        data: {
          pageModule: 'Services'
        }
      },
      {
        path: 'why-us',
        component: DynamicFormComponent,
        data: {
          pageModule: 'WhyUs'
        }
      },
      {
        path: 'why-our-services',
        component: DynamicFormComponent,
        data: {
          pageModule: 'WhyOurServices'
        }
      },
      {
        path: 'our-team',
        component: DynamicFormComponent,
        data: {
          pageModule: 'OurTeam'
        }
      },
      {
        path: 'careers',
        component: DynamicFormComponent,
        data: {
          pageModule: 'Careers'
        }
      },
      {
        path: 'leads',
        component: LeadsComponent
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
