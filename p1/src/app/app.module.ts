import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { TrainingComponent } from './training/training.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { StopTrainingComponent } from './training/current-training/stop-training.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { TrainingService } from './training/training.service';
import { CourseAppModule } from './course-app/course-app.module';
import { bootstrapP1 } from './p3/bootstrap4/home/home.component';
import { GlozzomComponent } from './p4-bootstrap4/glozzom/glozzom.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { FaInputComponent } from './lekhraj-lib/fa-input/fa-input.component';
// import { InputDir1Directive } from './lekhraj-lib/common/input-dir1.directive';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LekhrajLibModule } from './lekhraj-lib/lekhraj-lib.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    TrainingComponent,
    LoginComponent,
    SignupComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    CurrentTrainingComponent,
    StopTrainingComponent,
    bootstrapP1,
    GlozzomComponent,
    //FaInputComponent,
    //InputDir1Directive
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    CourseAppModule,
    MDBBootstrapModule.forRoot(),
    AngularFontAwesomeModule,
    LekhrajLibModule
  ],

  providers: [AuthService, AuthGuard, TrainingService],

  bootstrap: [AppComponent],

  entryComponents: [StopTrainingComponent]
})
export class AppModule { }
