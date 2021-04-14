import { Component, OnInit, ViewChild } from '@angular/core';
import { loadElements } from '../../dsm-effects.js'

@Component({
  selector: 'logo-library',
  templateUrl: './logo-library.component.html',
  styleUrls: ['./logo-library.component.scss']
})
export class LogoLibraryComponent implements OnInit {
  icons = [
    'adidas',
    'alain_mikli',
    'armani_exchange',
    'autoflex',
    'balenciage',
    'blumarine',
    'burberry',
    'calvin_klein_ck',
    'calvin_klein_cosmetics',
    'calvin_klein',
    'celine',
    'coach',
    'converse',
    'diva',
    'dkny',
    'dsquared2',
    'emporio_armani',
    'ermenegildo_zenga',
    'flexon',
    'fossil',
    'gant',
    'giorgio_armani',
    'givenchy',
    'gucci',
    'guess',
    'hugo_boss',
    'jimmy_choo',
    'kate_spade',
    'lacoste',
    'lanvim',
    'marc_jacobs',
    'michael_kors',
    'miu_miu',
    'mont_blanc',
    'nike',
    'oakley',
    'oneill',
    'persol',
    'pierre_cardin',
    'polo_ralph_lauren',
    'prada',
    'puma',
    'ray_ban',
    'saint_laurent',
    'stella_mccartney',
    'super_dry',
    'swarovski',
    'tom_ford',
    'tory_burch',
    'versach',
    'viktor_and_rolf',
    'vogue',
    'revel_tune',
    'amelia_e',
    'gamespex',
    'gamespex2',
    'muse_symbol',
    'muse_x_hilary_duff',
    'muse',
    'olos',
    'ottoto',
    'revel',
    'seaclean',
    'yoji',
  ]
  @ViewChild('grid') grid
  @ViewChild('iconCode') iconCode
  ngAfterViewInit(): void {
    this.addBlanks()
    window.addEventListener('resize', (event) => {
      this.addBlanks()
    })
    loadElements()
  }
  logoEl = `<div class="dsmLogo adidas"></div>`
  copyIcon(e) {
    let el = e.target.closest('.iconContainer')
    el.querySelector('.copiedBox').style.bottom = 0
    setTimeout(() => {
      el.querySelector('.copiedBox').removeAttribute('style')
    }, 800)
    this.logoEl = `<div class="${e.target.closest('.iconContainer').querySelector('.dsmLogo').classList
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
    let count = 0
    while (numberOfIcons == false && count != 10) {
      count++
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
  constructor() { }

  ngOnInit(): void {
  }

}
