import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacientsPageComponent } from './pacients-page/pacients-page.component';


const routes: Routes = [
    {
        path:'',
        component:PacientsPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientsPageRoutingModule { }