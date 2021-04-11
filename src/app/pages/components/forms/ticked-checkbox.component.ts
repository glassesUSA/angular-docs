import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ticked-checkbox',
  template: `
    <page-header
      title="Ticked Checkbox"
      breadcrumb="Components / Forms / "
    ></page-header>

    <tabs>
      <tab tabTitle="Usage">
        <div class="componentMaxWidth">
          To use this element, create a label with the class
          <code-box [inline]="true">.checkboxContainer</code-box>
          inside a form with the class
          <code-box [inline]="true">.dsmForm</code-box>
          . In the label element add
          <code-box [inline]="true">data-checked=true</code-box>
        </div>

        <code-container>
          <form action="" class="dsmForm">
            <label class="checkboxContainer" data-checked="true"></label>
          </form>
        </code-container>

        <div class="smallTitle">Size</div>
        To change the size, add
        <code-box [inline]="true">data-size=large</code-box>
        . There is only two sizes available, the default size and large

        <code-container>
          <form action="" class="dsmForm">
            <label
              class="checkboxContainer"
              data-checked="true"
              data-size="large"
            ></label>
          </form>
        </code-container>
      </tab>
    </tabs>
  `,
})
export class TickedCheckboxComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
