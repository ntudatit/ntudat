import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ActionMarkComponent } from './action-mark/action.mark.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ShowMarkComponent } from './show-mark/show-mark.component';
import { AddMarkComponent } from './add-mark/add-mark.component';
import { AdminGuard } from './auth/admin.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ModeratorPageComponent } from './moderator-page/moderator-page.component';
import { UserGuard } from './auth/user.guard';
import { ModeratorGuard } from './auth/moderator.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login',pathMatch:'full'},
  {path: 'login',           component: LoginComponent},
  {path: 'register',        component: RegisterComponent},
  {path: 'dashboard',       component: DashboardComponent, canActivate: [AdminGuard]},
  {path: 'forgotPassword',  component: ForgotPasswordComponent},
  {path: 'addStudent',      component: AddStudentComponent},
  {path: 'dialog',          component: ConfirmDialogComponent},
  {path: 'studentList',     component: StudentListComponent},
  {path: 'viewStudent',     component: ViewStudentComponent},
  {path: 'viewStudent/:id', component: ViewStudentComponent},
  {path: 'actionMark',      component: ActionMarkComponent},
  {path: 'showMark',        component: ShowMarkComponent},
  {path: 'showMark/:id',    component: ShowMarkComponent},
  {path: 'addMark',         component: AddMarkComponent},
  {path: 'addMark/:id',     component: AddMarkComponent},
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'user', component: UserPageComponent, canActivate: [UserGuard] },
  { path: 'moderator', component: ModeratorPageComponent, canActivate: [ModeratorGuard] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
