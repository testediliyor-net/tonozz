import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/layout/header';
import { FooterComponent } from './components/layout/footer';
import { LoginComponent } from './components/auth/login';
import { RegisterComponent } from './components/auth/register';
import { SharedModule } from './shared.module';
import { authInterceptorProviders } from './services/auth/auth.interceptor';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'tonozz' }),
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot(),
    SharedModule, ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  providers: [authInterceptorProviders]
})
export class AppModule { }
