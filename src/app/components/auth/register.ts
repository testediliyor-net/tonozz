import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';

@Component({
  selector: 'register-modal',
  templateUrl: './register.html',
})

export class RegisterComponent implements OnInit {

  form: FormGroup;
  invalidText: string;
  submitted: boolean;
  isRegistered: boolean;

  @Output()
  onOpen = new EventEmitter<string>();


  openModal() {
    this.onOpen.emit('login');
  }

  closeModal() {
    this.onOpen.emit('');
  }

  constructor(
    private router: Router,
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private token: TokenStorageService) {
  }

  get f() { return this.form.controls; }

  async onRegister() {
    if (!this.auth.isAuth) {

      this.submitted = true;
      this.invalidText = '';
      if (this.form.invalid) {
        return;
      }

      const { email, password, first_name, last_name } = this.form.value;

      try {
        const result = await this.auth.register({
          email,
          password,
          password_confirm: password,
          first_name,
          last_name
        });

        this.isRegistered = result.is_active;

      } catch (error: any) {
        if (error.error) {
          Object.keys(error.error).forEach((p: string) => {
            this.form.controls[p].setErrors({ 'other': error.error[p][0] });
          });
        }

        this.invalidText = error?.detail || 'Invalid email or password';
      }

    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required]
    });
  }
}