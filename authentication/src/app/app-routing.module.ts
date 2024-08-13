import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './Pages/login-signup/login-signup.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
      path:'',
      redirectTo:'loginSignup',
      pathMatch:'full',
    },
  {
    path:'loginSignup',
    component:LoginSignupComponent
  },
  {
    path:'',
    component:LayoutComponent,
    // canActivate:[AuthGuard],
    children:
    [
      {
        path: 'dashboard',
        component:DashboardComponent,
      }
    ]
  },
  {
    path:'**',
    redirectTo:'',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
