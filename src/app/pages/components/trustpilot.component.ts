import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'trustpilot',
  template: `
    <page-header title="Trustpilot" breadcrumb="Components / "></page-header>

    <tabs>
      <tab tabTitle="Usage">
        <div class="componentMaxWidth">
          To apply this component, create a div with the class
          <code-box [inline]="true">.dsmTrustpilot</code-box>
          . In order to use this element it is required that you have the swiper
          script initialised on the page. To add it copy and paste this script.
        </div>
        <code-box>
          &lt;script
          src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.4.14/swiper-bundle.min.js"
          integrity="sha512-APQL/QFRDoEBh9V5ztds1P6qEICllWq9Dpcv+pVu5DE/g5MZ1GE7+pj9tHhN1SFBv4J7B2j5mfw0cOUitz+aGg=="
          crossorigin="anonymous" >&lt;/script>
        </code-box>
        <div class="componentMaxWidth">
          There are a number of different properties you can apply to the
          trustpilot element which are listed below
        </div>
        <code-container>
          <div class="dsmTrustpilot" data-slides="2" data-max-slides="4"></div>
        </code-container>
      </tab>
      <tab tabTitle="Trustpilot Header">
        <div class="componentMaxWidth">
          You can alternatively add the trustpilot header element which shows
          how many people have reviewed the site along with an average score. To
          insert it create a element with the class
          <code-box [inline]="true">.dsmTrustpilot-Header</code-box>
        </div>
        <code-container>
          <div class="dsmTrustpilot-Header"></div>
        </code-container>
      </tab>
    </tabs>
  `,
})
export class TrustpilotComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
