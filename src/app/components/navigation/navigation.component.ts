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
  startEffectComponents = false
  closeEffectComponents = false
  startEffectForm = false
  closeEffectForm = false
  closeEffectLogo = false
  startEffectLogo = false
  closeEffectContent = false
  startEffectContent = false
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
        this.menuOpen = false
        if (document.body.style.overflow == 'hidden') {
          this.document.body.style.overflow = ''
        }

        if (url.includes('components')) {
          this.closeEffectComponents = false
          this.closeEffectForm = false

          if (this.startEffectComponents == false) {
            setTimeout(() => {
              this.startEffectComponents = true
            }, 10)
          }
          if (url.includes('forms')) {
            if (this.startEffectForm == false) {
              setTimeout(() => {
                this.startEffectForm = true
              }, 10)
            }
          } else {
            if (this.startEffectForm == true) {
              setTimeout(() => {
                this.closeEffectForm = true
              }, 10)
              this.startEffectForm = false
            }
          }
        } else {
          if (this.startEffectComponents) {
            this.startEffectComponents = false

            setTimeout(() => {
              this.closeEffectComponents = true
            }, 10)
          }

          if (this.startEffectForm) {
            this.startEffectForm = false
            setTimeout(() => {
              this.closeEffectForm = true
            }, 10)
          }

          if (url.includes('logo')) {
            this.closeEffectLogo = false

            if (this.startEffectLogo == false) {
              setTimeout(() => {
                this.startEffectLogo = true
              }, 10)
            }
          } else if (this.startEffectLogo && !this.closeEffectLogo) {
            this.startEffectLogo = false
            setTimeout(() => {
              this.closeEffectLogo = true
            }, 10)
          }
          if (url.includes('content')) {
            this.closeEffectContent = false

            if (this.startEffectContent == false) {
              setTimeout(() => {
                this.startEffectContent = true
              }, 10)
            }
          } else if (this.startEffectContent) {
            this.startEffectContent = false
            setTimeout(() => {
              this.closeEffectContent = true
            }, 10)
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
