import { DOCUMENT } from '@angular/common'
import {
  Component,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
  Inject,
} from '@angular/core'
import { NavigationEnd, NavigationStart, Router } from '@angular/router'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  componentsActive = false
  formComponentsActive = false
  searchOpen = false
  searchClose = false
  menuOpen = false
  effectTriggered = false
  formEffectTriggered = false
  effectFormTriggered = false
  menuClose = false
  defaultValue = ''
  menuTransition = false

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public router: Router,
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(({ url }) => {
        if (url.trim().split('/').length > 2 || !url.includes('components')) {
          if (!url.includes('forms') || url.trim().split('/').length != 3) {
            this.searchOpen = false
            this.searchClose = true
            this.defaultValue = ''
            this.menuOpen = false
            this.menuClose = true
          }
        }

        if (url.includes('components')) {
          this.componentsActive = true
          if (!this.effectTriggered) {
            this.effectTriggered = true
          }
          if (url.includes('forms')) {
            this.formComponentsActive = true
            if (!this.formEffectTriggered) {
              this.formEffectTriggered = true
            }
          } else {
            this.formEffectTriggered = false
          }
        } else {
          this.formEffectTriggered = false
          this.effectTriggered = false
        }
      })
  }

  @Output() resetSearch = new EventEmitter<string>()

  @ViewChild('container') containerEl?: HTMLElement | null

  openSearch() {
    if (this.menuOpen) {
      this.menuOpen = false
      this.menuClose = true
    }
    this.document.body.style.overflow = 'hidden'
    this.searchClose = false
    this.searchOpen = true
  }

  closeSearch() {
    this.searchOpen = false
    this.searchClose = true
    this.defaultValue = ''
    setTimeout(() => {
      this.document.body.removeAttribute('style')
    }, 300)
  }

  openMenu() {
    console.log(this.menuOpen)

    if (this.menuOpen == false) {
      this.menuOpen = true
      this.menuClose = false
      this.document.body.style.overflow = 'hidden'
    } else {
      this.menuOpen = false
      this.menuClose = true
      setTimeout(() => {
        this.document.body.removeAttribute('style')
      }, 300)
    }
  }

  onSearch(e: any) {
    this.defaultValue = e
  }

  toolbarToggle(e) {
    console.log(e)
  }
}
