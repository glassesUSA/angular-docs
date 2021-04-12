import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'badges',
  template: `
    <page-header title="Badges" breadcrumb="Components / "></page-header>

    <tabs>
      <tab tabTitle="Usage">
        <div class="componentMaxWidth">
          To apply this component, add the
          <code-box [inline]="true">.dsmBadge</code-box>
          class to a div element.
        </div>
        <code-container>
          <div class="dsmBadge misc">Lorem Ipsum</div>
        </code-container>
        <div class="componentMaxWidth">
          <div class="smallTitle">Styles</div>
          There are a few different styles available to choose from: Premium,
          Selling Fast, Sales and Misc.
        </div>
        <code-container>
          <div class="dsmBadge misc">Lorem Ipsum</div>
          <div class="dsmBadge sellingFast">Lorem Ipsum</div>
          <div class="dsmBadge premium">Lorem Ipsum</div>
          <div class="dsmBadge sales">Lorem Ipsum</div>
        </code-container>
      </tab>
    </tabs>
  `,
})
export class BadgesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
