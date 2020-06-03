import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { PacientService } from 'src/app/_services/pacient.service';

@Component({
  selector: 'app-pacients-add',
  templateUrl: './pacients-add.component.html',
  styleUrls: ['./pacients-add.component.css']
})
export class PacientsAddComponent implements OnInit {
  addForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private pacientService: PacientService,
    private alertService: AlertService) { }

  ngOnInit(){
    this.addForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      alergy:['',Validators.required],
      description:['',Validators.required],
  });
  }
  get f() { return this.addForm.controls; }

  onSubmit() {
    this.submitted = true;
    // reset alerts on submit
    this.alertService.clear();
    // stop here if form is invalid
    if (this.addForm.invalid) {
        return;
    }
    this.loading = true;
    this.pacientService.add(this.addForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/pacients-page']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}
}
