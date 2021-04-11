import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'tooltips',
  template: `
    <page-header title="Tooltips" breadcrumb="Components / "></page-header>

    <tabs>
      <tab tabTitle="Usage">
        <div class="componentMaxWidth">
          To apply this component, add the
          <code-box [inline]="true">.dsmTooltip</code-box>
          class to a
          <code-box [inline]="true">div</code-box>
          element. Inside the div enter the text you want to be displayed on
          hover
        </div>
        <code-container style="text-align:center">
          <div class="dsmTooltip">Some text here</div>
        </code-container>

        <div class="componentMaxWidth">
          <div class="smallTitle">Clickable Tooltip</div>
          To convert the tooltip into a clickable element insteaad of hover, add
          the class
          <code-box [inline]="true">click</code-box>
        </div>
        <code-container style="text-align:center">
          <div class="dsmTooltip click">Some text here</div>
        </code-container>
        <div class="componentMaxWidth">
          <div class="smallTitle">Close Button</div>
          To insert a close button inside the tooltip, add the
          <code-box [inline]="true">close</code-box>
          class to the element
        </div>
        <code-container style="text-align:center">
          <div class="dsmTooltip close">Some text here</div>
        </code-container>
      </tab>
      <tab tabTitle="Position">
        <div class="componentMaxWidth">
          There are a few different positions you can place the tooltip in. This
          is changed by adding one of the following classes.
        </div>
        <code-container style="text-align:center">
          <div class="dsmTooltip left">Some text here</div>
          <div class="dsmTooltip right">Some text here</div>
          <div class="dsmTooltip up">Some text here</div>
          <div class="dsmTooltip bottom">Some text here</div>
        </code-container>
      </tab>
    </tabs>
  `,
})
export class TooltipsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
