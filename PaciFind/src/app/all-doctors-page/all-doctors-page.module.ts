import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllDoctorsPageComponent } from './all-doctors-page/all-doctors-page.component';
import { SharedModule } from '../shared/shared.module';
import { AllDoctorsPageRoutingModule } from './all-doctors-page.routing.module';



@NgModule({
  declarations: [AllDoctorsPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    AllDoctorsPageRoutingModule
  ]
})
export class AllDoctorsPageModule { }
