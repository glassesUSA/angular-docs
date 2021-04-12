import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'dropdown',
  template: `
    <page-header
      title="Dropdown"
      breadcrumb="Components / Forms / "
      subtitle="Used to display multiple elements to choose from."
    ></page-header>

    <tabs>
      <tab tabTitle="Usage">
        <div class="componentMaxWidth">
          To use this element, add a div element with the class
          <code-box [inline]="true">.selectContainer</code-box>
          inside a form with the class
          <code-box [inline]="true">.dsmForm</code-box>
          . Inside that element insert a list using
          <code-box [inline]="true">ul</code-box>
          and
          <code-box [inline]="true">li</code-box>
        </div>

        <code-container>
          <form action="" class="dsmForm">
            <div class="selectContainer" data-placeholder="Placeholder">
              <ul>
                <li>Item 1</li>
              </ul>
            </div>
          </form>
        </code-container>
        <div class="smallTitle">Event Hooks</div>
        <div class="componentMaxWidth">
          If you require, there is an event that you can listen to on the
          <code-box [inline]="true">.selectedItem</code-box>
          with the
          <code-box [inline]="true">select</code-box>
          event which will return the value of the item selected.
        </div>
        <code-box language="js">
          document.querySelector('.selectContainer
          .selectedItem').addEventListener('select', ((res)=> &#123;&#125;))
        </code-box>
        <div class="componentMaxWidth">
          <div class="smallTitle">Error Styling</div>
          To add error styling, add the
          <code-box [inline]="true">.error</code-box>
          class to the
          <code-box [inline]="true">.selectContainer</code-box>
          element. If you would like to add a custom error message, you can
          insert a span with the class of
          <code-box [inline]="true">.error</code-box>
          immediately after the
          <code-box [inline]="true">ul</code-box>
          closing tag.
        </div>
        <code-container>
          <form action="" class="dsmForm">
            <div class="selectContainer error" data-placeholder="Placeholder">
              <ul>
                <li>Item 1</li>
              </ul>
              <span class="error">Error message</span>
            </div>
          </form>
        </code-container>
        <div class="componentMaxWidth">
          <div class="smallTitle">Disabled Styling</div>
          To add disabled styling, add
          <code-box [inline]="true">data-disabled=true</code-box>
          class to the
          <code-box [inline]="true">.selectContainer</code-box>
          element.
        </div>
        <code-container>
          <form action="" class="dsmForm">
            <div
              class="selectContainer"
              data-disabled="true"
              data-placeholder="Placeholder"
            >
              <ul>
                <li>Item 1</li>
              </ul>
            </div>
          </form>
        </code-container>
      </tab>
    </tabs>
  `,
})
export class DropdownComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
