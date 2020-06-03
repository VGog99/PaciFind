import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientsPageComponent } from './pacients-page/pacients-page.component';
import { SharedModule } from '../shared/shared.module';
import { PacientsPageRoutingModule } from './pacients-page.routing.module';

@NgModule({
  declarations: [PacientsPageComponent],
  imports: [
    CommonModule,
    PacientsPageRoutingModule,
    SharedModule
  ]
})
export class PacientsPageModule { }
