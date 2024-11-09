import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ActionMarkComponent } from './action-mark/action.mark.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { AddMarkComponent } from './add-mark/add-mark.component';
import { ShowMarkComponent } from './show-mark/show-mark.component';
import { AddMarkkComponent } from './add-markk/add-markk.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { JwtInterceptor, JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './auth/auth.service';
import { UserGuard } from './auth/user.guard';
import { ModeratorGuard } from './auth/moderator.guard';
import { AdminGuard } from './auth/admin.guard';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    AddStudentComponent,
    StudentListComponent,
    ActionMarkComponent,
    ConfirmDialogComponent,
    ViewStudentComponent,
    AddMarkComponent,
    ShowMarkComponent,
    AddMarkkComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('accessToken')
      }
    })
  ],
  providers: [
    AuthService,
    AdminGuard,
    UserGuard,
    ModeratorGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
