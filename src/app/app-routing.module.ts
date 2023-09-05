import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './pages/admin/admin.module';
import { AuthModule } from './pages/auth/auth.module';
import { CareersModule } from './pages/careers/careers.module';
import { HomeModule } from './pages/home/home.module';
import { OurTeamModule } from './pages/our-team/our-team.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomeModule,
  },
  {
    path: 'home/:sub',
    loadChildren: () => HomeModule,
  },
  {
    path: 'careers',
    loadChildren: () => CareersModule,
  },
  {
    path: 'auth',
    loadChildren: () => AuthModule,
  },
  {
    path: 'admin',
    loadChildren: () => AdminModule,
  },
  {
    path: 'our-team',
    loadChildren: () => OurTeamModule,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
