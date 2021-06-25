import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

export interface IDropdown {
  label: string;
  value: any;
}

@Component({
  selector: '[dropdown]',
  template: `
    <label>
      <div class="dropdown-selected" [ngClass]="selectedClass">{{selectedItem.label}}<i class="{{icon}}"></i></div>
      <input type="checkbox" [(ngModel)]="checked"/>
    </label>
      <div class="dropdown-list" *ngIf="checked" #items>
        <div *ngFor="let data of datas; let i = index" (mousedown)="change(data, i)">{{data.label}}</div>
        <ng-content>
        </ng-content>
      </div>
  `
})

export class Dropdown implements OnInit {
  @Input() icon: string;
  @Input() selectedIndex: number;
  @Input() value: string;
  @Input() datas: IDropdown[];
  @Input() selectedClass: string;
  @Input() selectedItem: IDropdown;
  checked: boolean = false;
  @ViewChild('items') items: ElementRef;

  constructor() { }


  toggleModal(value: boolean = false) {
    this.checked = value || false;
  }

  change(data, index) {
    this.selectedIndex = index;
    this.selectedItem = data;
    this.toggleModal(false);
  }

  findByValue(value) {
    this.datas?.forEach((item, index) => {
      if (value === item.value) {
        this.change(item, index);
        return;
      }
    });
  }

  ngOnInit() {
    AppComponent.isBrowser.subscribe(browser => {
      if (browser) {
        window.addEventListener('mouseup', () => {
          this.toggleModal(false);
        });
      }
    });

    /** Run when default value is set */
    if (this.value) {
      this.findByValue(this.value);
    }

    /**  Run if no default value */
    else if (this.datas) {
      this.change(this.datas[0], 0);
    }
  }
}