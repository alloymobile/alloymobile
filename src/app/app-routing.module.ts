import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './public/index-page/index-page.component';
import { LoginPageComponent } from './public/login-page/login-page.component';
import { RegisterPageComponent } from './public/register-page/register-page.component';

const routes: Routes = [
  {path:'',component: IndexPageComponent},
  {path:'login', component: LoginPageComponent},
  {path:'register', component: RegisterPageComponent},
  { path: '', component: IndexPageComponent },
  { path: '**', component: IndexPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
