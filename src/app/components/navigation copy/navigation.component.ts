import { DOCUMENT } from '@angular/common'
import {
  Component,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
  Inject,
} from '@angular/core'
import { Title } from '@angular/platform-browser'
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
  logoActive = false
  logoEffectTriggered = false
  menuTransition = false
  contentEffectTriggered = false
  contentActive = false

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public router: Router,
    private title: Title,
  ) {}
  public baseURL = 'GlassesUSA DSM'

  public setTitle(title?) {
    if (!title) title = ''
    this.title.setTitle(`${this.baseURL} ${title}`)
  }
  ngOnInit() {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(({ url }) => {
        if (url.trim().length > 1) {
          this.setTitle(
            ' | ' +
              url
                .trim()
                .split('/')
                .slice(-1)[0]
                .replace(/-/g, ' ')
                .replace(/\w\S*/g, function (txt) {
                  return (
                    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                  )
                }),
          )
        } else {
          this.setTitle()
        }
        window.scrollTo(0, 0)
        if (document.body.style.overflow == 'hidden') {
          this.document.body.style.overflow = ''
        }
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

          if (url.includes('foundation')) {
            this.logoActive = true
            if (!this.logoEffectTriggered) {
              this.logoEffectTriggered = true
            }
          }
          if (url.includes('content')) {
            this.contentActive = true
            if (!this.contentEffectTriggered) {
              this.contentEffectTriggered = true
            }
          }
        }
      })
  }

  @Output() resetSearch = new EventEmitter<string>()

  @ViewChild('container') containerEl?: HTMLElement | null

  openSearch() {
    if (this.menuOpen) {
      this.menuOpen = false
      this.menuClose = true
      this.document.body.style.overflow = ''
    } else {
      this.document.body.style.overflow = 'hidden'
      this.searchClose = false
      this.searchOpen = true
    }
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
      this.document.body.style.overflow = ''
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
