import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './visitor/home/home.component';
import { LoginComponent } from './visitor/auth/login/login.component';
import { RegisterComponent } from './visitor/auth/register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProfileComponent } from './user/profile/profile.component';
import { VisitorLayoutComponent } from './layouts/visitor-layout/visitor-layout.component';
import { VisitorHeaderComponent } from './layouts/visitor-header/visitor-header.component';
import { UserHeaderComponent } from './layouts/user-header/user-header.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { VisitorFooterComponent } from './layouts/visitor-footer/visitor-footer.component';
import { AdminHeaderComponent } from './layouts/admin-header/admin-header.component';
import { AdminSidebarComponent } from './layouts/admin-sidebar/admin-sidebar.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UsersComponent } from './admin/users/users.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    VisitorLayoutComponent,
    VisitorHeaderComponent,
    UserHeaderComponent,
    UserLayoutComponent,
    VisitorFooterComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminLayoutComponent,
    UsersComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    NgxMatSelectSearchModule,
    MatCheckboxModule,
    MatListModule
  ],
  providers: [
    provideClientHydration(),
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
