import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page-header',
  template: `
    <div class="splitColumn">
      <div class="breadCrumb">{{breadcrumb}}<span class="currentPage"> {{currentPage}}</span></div>
      <search-bar></search-bar>
    </div>
    <ng-container *ngIf="subtitle">
    <div class="smallTitle">Usage</div>
    <div class="usageDesc">{{subtitle}}</div></ng-container>`,
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() breadcrumb!: string
  @Input() currentPage!: string
  @Input() subtitle?: string
  constructor() { }

  ngOnInit(): void {
  }

}
