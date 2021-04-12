import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'text-field',
  template: `
    <page-header
      title="Text Field"
      breadcrumb="Components / Forms / "
    ></page-header>

    <tabs>
      <tab tabTitle="Usage">
        <div class="componentMaxWidth">
          To use this element, create a div with the class
          <code-box [inline]="true">.inputLabel</code-box>
          inside a form with the class
          <code-box [inline]="true">.dsmForm</code-box>
          . Inside that div element, create a label with the name of the field.
          To add a placeholder to the input add it normally using
          <code-box [inline]="true">placeholder="randomtext"</code-box>
          Finally add in your text input field.
        </div>
        <code-container>
          <form action="" class="dsmForm">
            <div class="inputLabel">
              <label>Placeholder</label>
              <input type="text" />
            </div>
          </form>
        </code-container>
        <div class="componentMaxWidth">
          <div class="smallTitle">Error Styling</div>
          To add error styling, add the
          <code-box [inline]="true">.error</code-box>
          class to the
          <code-box [inline]="true">input</code-box>
          element. If you would like to add a custom error message, you can
          insert a span with the class of
          <code-box [inline]="true">.error</code-box>
          immediately after the
          <code-box [inline]="true">div</code-box>
          closing tag.
        </div>
        <code-container>
          <form action="" class="dsmForm">
            <div class="inputLabel">
              <label>Placeholder</label>
              <input type="text" class="error" />
            </div>
            <span class="error">This is an error message</span>
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
            <div class="inputLabel">
              <label>Placeholder</label>
              <input type="text" disabled />
            </div>
          </form>
        </code-container>
      </tab>
    </tabs>
  `,
})
export class TextFieldComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
