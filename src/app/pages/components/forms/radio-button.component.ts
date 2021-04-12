import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'radio-button',
  template: `
    <page-header
      title="Radio Button"
      breadcrumb="Components / Forms / "
    ></page-header>

    <tabs>
      <tab tabTitle="Usage">
        <div class="componentMaxWidth">
          To use this element, create a div with the class
          <code-box [inline]="true">.radioContainer</code-box>
          inside a form with the class
          <code-box [inline]="true">.dsmForm</code-box>
          . Inside that div element, create a radio input with the name of the
          group that you will use to switch between the buttons.
        </div>
        <code-container>
          <form action="" class="dsmForm">
            <div class="radioContainer">
              <input type="radio" name="radioTest" />
            </div>
          </form>
        </code-container>
        <div class="componentMaxWidth">
          <div class="smallTitle">Error Styling</div>
          To add error styling, add
          <code-box [inline]="true">data-error="true"</code-box>
          class to the
          <code-box [inline]="true">radioContainer</code-box>
          element. If you would like to add a custom error message, you can
          insert a span with the class of
          <code-box [inline]="true">.error</code-box>
          immediately after the
          <code-box [inline]="true">div</code-box>
          closing tag.
        </div>
        <code-container>
          <form action="" class="dsmForm">
            <div class="radioContainer" data-error="true">
              <input type="radio" name="radioTest" />
            </div>
            <span class="error">This is an error</span>
          </form>
        </code-container>
        <div class="componentMaxWidth">
          <div class="smallTitle">Disabled Styling</div>
          To add disabled styling, add
          <code-box [inline]="true">disabled</code-box>
          class to the
          <code-box [inline]="true">input</code-box>
          element.
        </div>
        <code-container>
          <form action="" class="dsmForm">
            <div class="radioContainer">
              <input type="radio" name="radioTest" disabled />
            </div>
          </form>
        </code-container>
      </tab>
      <tab tabTitle="Sizes">
        <div class="componentMaxWidth">
          There are also 3 different size options to choose from. You can choose
          between medium or large and the default size which requires no extra
          class. Add these styles using
          <code-box [inline]="true">data-size</code-box>
        </div>
        <code-container>
          <form action="" class="dsmForm">
            <div class="radioContainer">
              <input type="radio" name="radioTest" />
            </div>
            <div class="radioContainer" data-size="medium">
              <input type="radio" name="radioTest" />
            </div>
            <div class="radioContainer" data-size="large">
              <input type="radio" name="radioTest" />
            </div>
          </form>
        </code-container>
      </tab>
    </tabs>
  `,
})
export class RadioButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
