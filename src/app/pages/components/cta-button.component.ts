import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'cta-button',
  template: `
    <page-header
      title="CTA Button"
      breadcrumb="Components / "
      subtitle="The CTA buttons are the most important buttons on the site and are designed for the central reference on the
  page."
    ></page-header>

    <tabs>
      <tab tabTitle="Usage">
        <div class="componentMaxWidth">
          To apply this component, add the .dsmButton class to a
          <code-box [inline]="true"><button></button></code-box>
          element. This will activate the default styling and allow you to use
          the button transitions and effects. If you use a different element tag
          type instead of button then the click animation will not be available.
        </div>
        <code-container>
          <button class="dsmButton">CTA Button</button>
        </code-container>
        <div class="componentMaxWidth">
          The disabled version of the button is activated by adding the disabled
          attribute to the button element.
        </div>
        <code-container>
          <button class="dsmButton" disabled>Disabled Button</button>
        </code-container>
        <div class="componentMaxWidth">
          The final style available for buttons is the ghost effect. This
          changes the button to have an outline instead of a fill and on hover
          for it to become filled.
        </div>
        <code-container>
          <button class="dsmButton ghost">Ghost Button</button>
        </code-container>
      </tab>
      <tab tabTitle="Colours">
        <div class="componentMaxWidth">
          There are two different colours to choose from, either the default
          primary styling or the secondary styling. To add the secondary styling
          add .secondary to the button element classlist. For the default
          styling there is no need to add an extra class.
        </div>
        <code-container>
          <button class="dsmButton secondary">Secondary</button>
          <button class="dsmButton">Primary</button>
        </code-container>
      </tab>
      <tab tabTitle="Sizes">
        <div class="componentMaxWidth">
          There are several size modifiers available which are set by adding the
          class to the element.
        </div>
        <code-container>
          <button class="dsmButton extralarge">Extra Large</button>
          <br />
          <button class="dsmButton large">Large</button>
          <br />
          <button class="dsmButton regular">Regular</button>
          <br />
          <button class="dsmButton medium">Medium</button>
          <br />
          <button class="dsmButton small">Small</button>
        </code-container>
      </tab>
    </tabs>
  `,
})
export class CtaButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
