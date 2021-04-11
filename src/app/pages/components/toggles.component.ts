import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'toggles',
  template: `
    <page-header
      title="Toggles"
      breadcrumb="Components / "
      subtitle="The toggles are used to choose between two different states."
    ></page-header>

    <tabs>
      <tab tabTitle="Usage">
        <div class="componentMaxWidth">
          To apply this component, add a label component with the class
          <code-box [inline]="true">.dsmSlider</code-box>
          . To disable the slider, add
          <code-box [inline]="true">data-disabled=true</code-box>
          attribute to the label element. No data can be entered inside the
          label tags
        </div>
        <code-container>
          <label class="dsmSlider"></label>
          <label class="dsmSlider" data-disabled="true"></label>
        </code-container>
      </tab>
    </tabs>
  `,
  styles: [],
})
export class TogglesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
