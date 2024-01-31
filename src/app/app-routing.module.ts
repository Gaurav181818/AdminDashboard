import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './visitor/home/home.component';
import { LoginComponent } from './visitor/auth/login/login.component';
import { RegisterComponent } from './visitor/auth/register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProfileComponent } from './user/profile/profile.component';
import { VisitorLayoutComponent } from './layouts/visitor-layout/visitor-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UsersComponent } from './admin/users/users.component';
import { ProjectsComponent } from './admin/projects/projects.component';

const routes: Routes = [
 
 
  {
    path:'admin/dashboard',
    component:AdminLayoutComponent,
    children:[
      {
        path:'',
        component:DashboardComponent

      }
    ]
  },

  {
    path:'admin/users',
    component:AdminLayoutComponent,
    children:[
      {
        path:'',
        component:UsersComponent

      }
    ]
  },

  {
    path:'admin/projects',
    component:AdminLayoutComponent,
    children:[
      {
        path:'',
        component:ProjectsComponent

      }
    ]
  },




  
  {
    path:'',
    redirectTo:'/admin/dashboard',
    pathMatch:'full'
  },

  {
    path:'**',
    redirectTo:'/admin/dashboard',
    pathMatch:'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
