import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'accordian',
  template: `
    <page-header title="Accordian" breadcrumb="Components / "></page-header>

    <tabs>
      <tab tabTitle="Usage">
        <div class="componentMaxWidth">
          To apply this component, create a details component with the class
          <code-box [inline]="true">.dsmAccordian</code-box>
          . Inside the details component create a
          <code-box [inline]="true">summary</code-box>
          element. Inside that element insert the title of the accordian. This
          will be the content shown when the accordian is closed. Underneath the
          closing tag of the summary, enter the rest of the content
        </div>
        <code-container>
          <details class="dsmAccordian">
            <summary>Example title</summary>
            Text shown on click on the title. This can be whatever you want here
            and as long as you wish
          </details>
        </code-container>
      </tab>
    </tabs>
  `,
})
export class AccordianComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
