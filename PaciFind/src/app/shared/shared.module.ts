import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorProfileContainerComponent } from './doctor-profile-container/doctor-profile-container.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';
import { AllPacientsPageContainerComponent } from './all-pacients-page-container/all-pacients-page-container.component';
import { AllDoctorsPageContainerComponent } from './all-doctors-page-container/all-doctors-page-container.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DoctorDescriptionComponent } from './doctor-description/doctor-description.component';
import { PacientsListComponent } from './pacients-list/pacients-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';



@NgModule({
  declarations: [
    MenuComponent, 
    SidebarComponent, 
    DoctorProfileContainerComponent, 
    DoctorDescriptionComponent, 
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
    DoctorProfileContainerComponent,
    ContactContainerComponent,
    AllPacientsPageContainerComponent,
    AllDoctorsPageContainerComponent,
  ]
})
export class SharedModule { }
