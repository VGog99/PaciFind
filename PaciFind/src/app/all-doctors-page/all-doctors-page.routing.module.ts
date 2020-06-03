import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllDoctorsPageComponent } from './all-doctors-page/all-doctors-page.component';


const routes: Routes = [
    {
        path:'',
        component:AllDoctorsPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllDoctorsPageRoutingModule { }