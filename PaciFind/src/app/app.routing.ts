import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';


const routes: Routes = [
 
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
      path:'contact-page',
      loadChildren:() => import ('./contact-page/contact-page.module').then(module => module.ContactPageModule)
    },
    {
      path:'doctors-page',
      loadChildren:() => import ('./all-doctors-page/all-doctors-page.module').then(module => module.AllDoctorsPageModule)
    },
    {
      path:'pacients-page',
      loadChildren:() => import ('./pacients-page/pacients-page.module').then(module => module.PacientsPageModule)
    },
    
    {
      path:'pacients-add',
      loadChildren:() => import ('./pacients-add/pacients-add.module').then(module => module.PacientsAddModule)
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);