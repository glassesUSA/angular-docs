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
        <div class="componentMaxWidth">
          <div class="smallTitle">Properties</div>
          There are a number of properties that can be applied to the trustpilot
          to change its behaviour and data displayed.
        </div>
        <div class="gridTable">
          <span class="previewTitle">Property</span>
          <span class="previewTitle">Default</span>
          <span class="previewTitle">Type</span>
          <span class="previewTitle" id="description">Description</span>
          <code-box [inline]="true">
            data-loop
          </code-box>
          <span class="propertyType">true</span>
          <span class="propertyDefault">boolean</span>
          <span class="propertyDescription">
            This is used to set the whether the swiper will loop through all the
            reviews or will stop at the end.
          </span>
          <code-box [inline]="true">
            data-stars
          </code-box>
          <span class="propertyType">"5"</span>
          <span class="propertyDefault">string</span>
          <span class="propertyDescription">
            This is used to set what ratings will show. For more then one rating
            use commas to separate values.
          </span>
          <code-box [inline]="true">
            data-touch-move
          </code-box>
          <span class="propertyType">true</span>
          <span class="propertyDefault">boolean</span>
          <span class="propertyDescription">
            This is used to set if you can move the swiper using touch events.
            This will always be on for mobile devices.
          </span>
          <code-box [inline]="true">
            data-slides
          </code-box>

          <span class="propertyType">3</span>
          <span class="propertyDefault">number</span>
          <span class="propertyDescription">
            This is used to set how many slides per page are shown.
          </span>
          <code-box [inline]="true">
            data-space-between
          </code-box>
          <span class="propertyType">20</span>
          <span class="propertyDefault">number</span>
          <span class="propertyDescription">
            This is used to set the space between each slide.
          </span>
          <code-box [inline]="true">
            data-min-chars
          </code-box>
          <span class="propertyType">75</span>
          <span class="propertyDefault">number</span>
          <span class="propertyDescription">
            This is used to set the minimum characters allowed in a review.
          </span>
          <code-box [inline]="true">
            data-tags
          </code-box>
          <span class="propertyType">null</span>
          <span class="propertyDefault">string</span>
          <span class="propertyDescription">
            This is used to filter the results by tag.
          </span>
          <code-box [inline]="true">
            data-slides-per-group
          </code-box>
          <span class="propertyType">1</span>
          <span class="propertyDefault">number</span>
          <span class="propertyDescription">
            This is used to decide how many slides to scroll each time the arrow
            is pressed.
          </span>
          <code-box [inline]="true">
            data-speed
          </code-box>
          <span class="propertyType">300</span>
          <span class="propertyDefault">number</span>
          <span class="propertyDescription">
            This is used to set the speed of the transition
          </span>
          <code-box [inline]="true">
            data-max-slides
          </code-box>
          <span class="propertyType">null</span>
          <span class="propertyDefault">number</span>
          <span class="propertyDescription">
            This is used to set the maximum amount of slides that will be
            displayed
          </span>
          <code-box [inline]="true">
            data-mobile-max-slides
          </code-box>
          <span class="propertyType">6</span>
          <span class="propertyDefault">number</span>
          <span class="propertyDescription">
            This is used to set the maximum amount of slides that will be
            displayed on mobile devices
          </span>
        </div>
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
  styleUrls: ['./trustpilot.component.scss'],
})
export class TrustpilotComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
