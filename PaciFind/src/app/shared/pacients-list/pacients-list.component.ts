import { Component, OnInit, Input } from '@angular/core';
import { PacientiService } from 'src/app/core/Services/pacienti.service';
import { PacientService } from 'src/app/_services/pacient.service';

import { first } from 'rxjs/operators';
@Component({
  selector: 'app-pacients-list',
  templateUrl: './pacients-list.component.html',
  styleUrls: ['./pacients-list.component.css']
})
export class PacientsListComponent implements OnInit {
  pacients=[];
  constructor(private pacientService:PacientService) {
   }
  ngOnInit(){
    this.loadAllUsers();
  }
  private loadAllUsers() {
    this.pacientService.getAll()
        .pipe(first())
        .subscribe(pacients => this.pacients = pacients);
}
}
