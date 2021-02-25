import { Component, Input} from '@angular/core';

export interface AccordionData {
  title: string;
  datas: any[];
}

@Component({
  selector: 'accordion',
  template: `
        <div class="accordion pr-md-4 mb-1" *ngFor="let item of datas; let i = index" [ngClass]="selectedIndex === i ? 'active' :''">
          <div class="accordion-item">
            <div class="accordion-title" (click)="selectAccordion(i, ref)">{{item.title}}</div>
            <div class="accordion-list mb-3">
              <div class="accordion-list-item" *ngFor="let sub of item.datas">{{sub.title}}</div>
            </div>
          </div>
        </div>
  `
})

export class Accordion {

  @Input()
  datas: AccordionData[];

  @Input()
  selectedIndex: number = 0;

  constructor() { }

  selectAccordion(index: number, r: any) {
    this.selectedIndex = index === this.selectedIndex ? -1 : index;
  }

}