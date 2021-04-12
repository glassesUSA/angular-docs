import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { TabComponent } from '../tab/tab.component'

@Component({
  selector: 'tabs',
  template: `
    <div class="tabContainer">
      <ul class="tabTop" *ngIf="tabs.length > 1">
        <li
          *ngFor="let tab of tabs"
          routerLink="{{ urlPrefix }}{{ tab.tabTitle }}"
          [ngClass]="{ active: tab.active }"
        >
          {{ tab.tabTitle }}
        </li>
      </ul>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  currentTab
  urlPrefix
  tabs: TabComponent[] = []
  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      tab.active = true
    }
    this.tabs.push(tab)
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach((tab) => {
      tab.active = false
    })
    tab.active = true
  }
  ngOnInit(): void {
    if (!this.router.url.trim().includes('forms')) {
      if (this.router.url.trim().split('/').length > 3) {
        this.urlPrefix = '../'
      } else {
        this.urlPrefix = './'
      }
    } else {
      if (this.router.url.trim().split('/').length == 4) {
        this.urlPrefix = './'
      } else {
        this.urlPrefix = '../'
      }
    }

    this.route.params.subscribe((e) => {
      this.currentTab = e.id

      let currentTab = this.tabs.filter((q) => q.tabTitle == e.id)
      if (currentTab.length > 0) {
        this.selectTab(currentTab[0])
      }
    })
  }
}
