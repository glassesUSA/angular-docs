import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page-header',
  template: `
    <div class="splitColumn">
      <div class="breadCrumb">{{breadcrumb}}</div>
      <search-bar></search-bar>
    </div>
    <h1>{{title}}</h1>
    <h2>{{subtitle}}</h2>`,
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() breadcrumb!: string
  @Input() title!: string
  @Input() subtitle?: string
  constructor() { }

  ngOnInit(): void {
  }

}
