import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactContainerComponent } from './contact-container/contact-container.component';
import { AllPacientsPageContainerComponent } from './all-pacients-page-container/all-pacients-page-container.component';
import { AllDoctorsPageContainerComponent } from './all-doctors-page-container/all-doctors-page-container.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PacientsListComponent } from './pacients-list/pacients-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';



@NgModule({
  declarations: [
    SidebarComponent, 
    ContactContainerComponent, 
    AllPacientsPageContainerComponent, 
    PacientsListComponent, 
    SearchBarComponent,
    AllDoctorsPageContainerComponent, 
    DoctorsListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ContactContainerComponent,
    AllPacientsPageContainerComponent,
    AllDoctorsPageContainerComponent,
  ]
})
export class SharedModule { }
