import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { UserComponent } from './user/user.component';
import { PracticeComponent } from './practice/practice.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import {MatSliderModule} from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { PipesPipe } from './pipes.pipe';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { FooterComponent } from './footer/footer.component'
import {MployeeService} from './services/mployee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
import {HttpClientModule} from '@angular/common/http';
import { PlaceholderComponent } from './placeholder/placeholder.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PracticeComponent,
    ChildComponent,
    UserDetailsComponent,
    ParentToChildComponent,
    PipesPipe,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    AboutCompanyComponent,
    UserInfoComponent,
    FooterComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    PlaceholderComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,UserAuthModule, FormsModule, NgbModule,ReactiveFormsModule,MatSliderModule, BrowserAnimationsModule
  ],
  providers: [MployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
