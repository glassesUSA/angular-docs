import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'mobile-background',
  template: `
    <div class="overlayBackground"></div>
  `,
  styleUrls: ['./mobile-background.component.scss'],
})
export class MobileBackgroundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
