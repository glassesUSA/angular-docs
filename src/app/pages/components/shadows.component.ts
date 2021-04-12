import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'shadows',
  template: `
    <page-header title="Shadows" breadcrumb="Components / "></page-header>

    <tabs>
      <tab tabTitle="Usage">
        <div class="componentMaxWidth">
          To apply this component, add the
          <code-box [inline]="true">.dsmShadow</code-box>
          class to a div element.
        </div>
        <code-container>
          <div class="dsmShadow"></div>
        </code-container>
        <div class="componentMaxWidth">
          <div class="smallTitle">Shadow Weights</div>
          There are a few different weights available to choose from the normal
          shadow until shadow-6
        </div>
        <code-container>
          <div class="dsmShadow"></div>
          <div class="dsmShadow shadow-2"></div>
          <div class="dsmShadow shadow-3"></div>
          <div class="dsmShadow shadow-4"></div>
          <div class="dsmShadow shadow-5"></div>
          <div class="dsmShadow shadow-6"></div>
        </code-container>
      </tab>
    </tabs>
  `,
})
export class ShadowsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
