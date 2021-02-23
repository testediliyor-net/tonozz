import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-image',
  templateUrl: './index.html',
  encapsulation: ViewEncapsulation.None
})
export class UserImageComponent implements OnInit {
  @Input() source: string;
  @Input() class: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
