import { Component, Input, OnInit } from '@angular/core';
import { IBlogData } from './models';




@Component({
  selector: 'blog-item',
  templateUrl: './index.html'
})

export class BlogItem implements OnInit {
  /**
   * Props
   */
  @Input() data: IBlogData;


  constructor() { }

  
  ngOnInit() { 
  }
}