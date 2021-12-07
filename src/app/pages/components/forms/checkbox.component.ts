import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'checkbox',
  template: `
    <page-header
      title="Checkbox"
      breadcrumb="Components / Forms / "
    ></page-header>

    <tabs>
      <tab tabTitle="Usage">
        <div class="componentMaxWidth">
          To use this element, create a label with the class
          <code-box [inline]="true">.checkboxContainer</code-box>
          inside a form with the class
          <code-box [inline]="true">.dsmForm</code-box>
          . No data will be shown inside the label tags
        </div>

        <code-container>
          <form action="" class="dsmForm">
            <label class="checkboxContainer"></label>
          </form>
        </code-container>
        <div class="componentMaxWidth">
          <div class="smallTitle">Error Styling</div>
          To add error styling, add
          <code-box [inline]="true">data-error=true</code-box>
          class to the
          <code-box [inline]="true">label</code-box>
          element. If you would like to add a custom error message, you can
          insert a span with the class of
          <code-box [inline]="true">.error</code-box>
          immediately after the
          <code-box [inline]="true">label</code-box>
          closing tag.
        </div>
        <code-container>
          <form action="" class="dsmForm">
            <label class="checkboxContainer" data-error="true"></label>
            <span class="error">This is an error message</span>
          </form>
        </code-container>
        <div class="smallTitle">Disabled Styling</div>
        To add disabled styling, add
        <code-box [inline]="true">data-disabled=true</code-box>
        class to the
        <code-box [inline]="true">label</code-box>
        element.
        <code-container>
          <form action="" class="dsmForm">
            <label class="checkboxContainer" data-disabled="true"></label>
          </form>
        </code-container>
      </tab>
      <tab tabTitle="Sizes">
        <div class="componentMaxWidth">
          There are 3 sizes available, the default size, medium and large. These
          are applied by adding the
          <code-box [inline]="true">data-size=""</code-box>
          tag with the size included.
        </div>
        <code-container>
          <form action="" class="dsmForm">
            <label class="checkboxContainer"></label>
          </form>
        </code-container>
        <code-container>
          <form action="" class="dsmForm">
            <label class="checkboxContainer" data-size="medium"></label>
          </form>
        </code-container>
        <code-container>
          <form action="" class="dsmForm">
            <label class="checkboxContainer" data-size="large"></label>
          </form>
        </code-container>
      </tab>
    </tabs>
  `,
})
export class CheckboxComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
