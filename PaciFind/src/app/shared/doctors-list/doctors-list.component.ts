import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserService } from 'src/app/_services';
import { User } from 'src/app/_models';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {
  currentUser: User;
  users = [];
  constructor( private authenticationService: AuthenticationService,
    private userService: UserService
) {
    this.currentUser = this.authenticationService.currentUserValue;
}
  ngOnInit(){
    this.loadAllUsers();
  }
  private loadAllUsers() {
    this.userService.getAll()
        .pipe(first())
        .subscribe(users => this.users = users);
}
}
