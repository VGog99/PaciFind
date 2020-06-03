import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientsAddComponent } from './pacients-add/pacients-add.component';
import { SharedModule } from '../shared/shared.module';
import { PacientsAddRoutingModule } from './pacients-add.routing.module';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PacientsAddComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    PacientsAddRoutingModule
  ]
})
export class PacientsAddModule { }
