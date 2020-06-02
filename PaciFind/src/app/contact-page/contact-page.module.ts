import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactPageRoutingModule } from './contact-page.routing.module';



@NgModule({
  declarations: [ContactPageComponent],
  imports: [
    CommonModule, 
    ContactPageRoutingModule,
    SharedModule,
  ]
})
export class ContactPageModule { }
