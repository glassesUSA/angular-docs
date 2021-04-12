import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'text-area',
  template: `
    <page-header
      title="Text Area"
      breadcrumb="Components / Forms / "
    ></page-header>

    <tabs>
      <tab tabTitle="Usage">
        <div class="componentMaxWidth">
          To use this element, add a textarea inside a form with the class
          <code-box [inline]="true">.dsmForm</code-box>
        </div>
        <code-container>
          <form action="" class="dsmForm">
            <textarea placeholder="Text area"></textarea>
          </form>
        </code-container>
        <div class="componentMaxWidth">
          <div class="smallTitle">Error Styling</div>
          To add error styling, add the
          <code-box [inline]="true">.error</code-box>
          class to the
          <code-box [inline]="true">textarea</code-box>
          element. If you would like to add a custom error message, you can
          insert a span with the class of
          <code-box [inline]="true">.error</code-box>
          immediately after the
          <code-box [inline]="true">ul</code-box>
          closing tag.
        </div>
        <code-container>
          <form action="" class="dsmForm">
            <textarea class="error" placeholder="Text area"></textarea>
            <span class="error">This is an error message</span>
          </form>
        </code-container>
        <div class="componentMaxWidth">
          <div class="smallTitle">Disabled Styling</div>
          To add disabled styling, add
          <code-box [inline]="true">disabled</code-box>
          class to the
          <code-box [inline]="true">textarea</code-box>
          element.
        </div>
        <code-container>
          <form action="" class="dsmForm">
            <textarea placeholder="Text area" disabled></textarea>
          </form>
        </code-container>
      </tab>
    </tabs>
  `,
})
export class TextAreaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
