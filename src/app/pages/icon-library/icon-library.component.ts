import { Component, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'icon-library',
  templateUrl: './icon-library.component.html',
  styleUrls: ['./icon-library.component.scss'],
})
export class IconLibraryComponent {
  constructor() {}
  icons = [
    'app',
    'approve_circle',
    'approve',
    'arrow-down',
    'arrow-left',
    'arrow-right',
    'arrow-up',
    'call',
    'camera',
    'chat',
    'customer_service',
    'exit',
    'eyestrain_relief',
    'form',
    'gift',
    'glasses',
    'heart',
    'location',
    'minus',
    'money_guarantee',
    'money',
    'phone',
    'plus',
    'prescription_scanner',
    'search',
    'truck',
  ]
  @ViewChild('grid') grid
  @ViewChild('iconCode') iconCode
  ngAfterViewInit(): void {
    this.addBlanks()
    window.addEventListener('resize', (event) => {
      this.addBlanks()
    })
  }
  iconEl = `<div class="dsmIcons arrow-left"></div>`
  copyIcon(e) {
    let el = e.target.closest('.iconContainer')
    el.querySelector('.copiedBox').style.bottom = 0
    setTimeout(() => {
      el.querySelector('.copiedBox').removeAttribute('style')
    }, 800)
    this.iconEl = `<div class="${
      e.target.closest('.iconContainer').querySelector('.dsmIcons').classList
        .value
    }"></div>`
  }

  addBlanks() {
    this.grid.nativeElement
      .querySelectorAll('.iconContainer.disabled')
      .forEach((a) => a.remove())
    var gap = 0
    var minW = window.innerWidth > 768 ? 164 : 120

    var Wc = this.grid.nativeElement.offsetWidth
    var N = Math.floor((Wc + gap) / (minW + gap))
    let numberOfIcons = Number.isInteger(
      this.grid.nativeElement.querySelectorAll('.iconContainer').length / N,
    )
    let emptyCell = document.createElement('div')
    emptyCell.classList.add('iconContainer')

    while (numberOfIcons == false) {
      let el = this.grid.nativeElement
        .querySelector('.iconContainer')
        .cloneNode()
      el.classList.add('disabled')
      this.grid.nativeElement.appendChild(el)
      numberOfIcons = Number.isInteger(
        this.grid.nativeElement.querySelectorAll('.iconContainer').length / N,
      )
    }
  }
}
