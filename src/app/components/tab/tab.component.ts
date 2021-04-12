import { Component, Input, OnInit } from '@angular/core'
import { TabsComponent } from '../tabs/tabs.component'

@Component({
  selector: 'tab',
  template: `
    <div class="tabContent" [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  active = false
  constructor(tabs: TabsComponent) {
    tabs.addTab(this)
  }
  @Input() tabTitle
  ngOnInit(): void {}
}
