import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'round-button',
  template: `
    <page-header
      title="Round Button"
      breadcrumb="Components / "
      subtitle="The rounded buttons are less important than the main CTA buttons and use for making a second-level hierarchy."
    ></page-header>

    <tabs>
      <tab tabTitle="Usage">
        <div class="componentMaxWidth">
          To apply this component, add the
          <code-box [inline]="true">.dsmButton round</code-box>
          class to a
          <code-box [inline]="true"><button></button></code-box>
          element. This will activate the default styling and allow you to use
          the button transitions and effects. If you use a different element tag
          type instead of button then the click animation will not be available.
        </div>
        <code-container>
          <button class="dsmButton round">CTA Button</button>
        </code-container>
        <div class="componentMaxWidth">
          The disabled version of the button is activated by adding the disabled
          attribute to the button element.
        </div>
        <code-container>
          <button class="dsmButton round" disabled>Disabled Button</button>
        </code-container>
        <div class="componentMaxWidth">
          The final style available for buttons is the ghost effect. This
          changes the button to have an outline instead of a fill and on hover
          for it to become filled.
        </div>
        <code-container>
          <button class="dsmButton round ghost">Ghost Button</button>
        </code-container>
      </tab>
      <tab tabTitle="Colours">
        <div class="componentMaxWidth">
          There are a few different colour options to choose from listed below.
          Add one of the following classes to a
          <code-box [inline]="true">.dsmButton round</code-box>
          button element to apply the styles
        </div>
        <code-container>
          <button class="dsmButton round">Default</button>
          <button class="dsmButton round codGray">Cod Gray</button>
          <button class="dsmButton round porcelain">Porcelain</button>
          <button class="dsmButton round regentGray">Regent Gray</button>
          <button class="dsmButton round towerGray">Tower Gray</button>
          <button class="dsmButton round white">White</button>
        </code-container>
      </tab>
      <tab tabTitle="Sizes">
        <div class="componentMaxWidth">
          There are several size modifiers available which are set by adding the
          class to the element.
        </div>
        <code-container>
          <div class="dsmButton round regular">Regular</div>
          <br />
          <div class="dsmButton round medium">Medium</div>
          <br />
          <div class="dsmButton round small">Small</div>
        </code-container>
      </tab>
    </tabs>
  `,
})
export class RoundButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
