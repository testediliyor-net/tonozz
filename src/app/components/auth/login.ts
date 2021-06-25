import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';

@Component({
  selector: 'login-modal',
  templateUrl: './login.html',
})

export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private token: TokenStorageService) { }

  form: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;
  invalidText: string = '';
  isError: boolean = false;

  get f() { return this.form.controls; }

  @Output()
  onOpen = new EventEmitter<string>();


  openModal() {
    this.onOpen.emit('register');
  }

  closeModal() {
    this.onOpen.emit('');
  }

  onLogin() {

    if (!this.auth.isAuth) {
      this.isError = false;
      this.submitted = true;
      this.invalidText = '';

      if (this.form.invalid) {
        return;
      }

      const { email, password, rememberme = false } = this.form.value;

      this.auth.login({ email, password }).subscribe((e: any) => {
        if (e.access) {
          this.token.saveToken(e.access, rememberme);
          this.router.navigate(['account']);
          this.closeModal();
          this.isError = false;
        }
      }, (error: any) => {
        this.isError = true;
        this.invalidText = error && error.detail || 'Invalid email or password';
      })

    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberme: [''],
    });
  }
}