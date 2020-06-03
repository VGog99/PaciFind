import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacientsAddComponent } from './pacients-add/pacients-add.component';


const routes: Routes = [
    {
        path:'',
        component:PacientsAddComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientsAddRoutingModule { }