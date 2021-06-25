import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'home-component',
  templateUrl: './index.html'
})
export class HomeComponent implements OnInit {


  ngOnInit() {
    AppComponent.isAuthStatic = false;
  }
}