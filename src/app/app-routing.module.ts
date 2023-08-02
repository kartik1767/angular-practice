import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    component: AboutComponent,
    path: 'about',
    children:[
      {path:'company', component: AboutCompanyComponent},
      {path:'info', component:UserInfoComponent}
    ]
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
