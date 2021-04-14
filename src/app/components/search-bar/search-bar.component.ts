import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  EventEmitter,
  SimpleChange,
} from '@angular/core'

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor(public el: ElementRef) { }

  menuItems = [
    {
      name: 'CTA Buttons',
      breadcrumb: 'Components/',
      url: 'components/cta-button',
    },
    {
      name: 'Round Buttons',
      breadcrumb: 'Components/',
      url: 'components/round-button',
    },
    {
      name: 'Toggles',
      breadcrumb: 'Components/',
      url: 'components/toggles',
    },
    {
      name: 'Dropdown',
      breadcrumb: 'Components/Forms/',
      url: 'components/forms/dropdown',
    },
    {
      name: 'Text Area',
      breadcrumb: 'Components/Forms/',
      url: 'components/forms/text-area',
    },
    {
      name: 'Text Field',
      breadcrumb: 'Components/Forms/',
      url: 'components/forms/text-field',
    },
    {
      name: 'Radio Button',
      breadcrumb: 'Components/Forms/',
      url: 'components/forms/radio-button',
    },
    {
      name: 'Ticked Checkbox',
      breadcrumb: 'Components/Forms/',
      url: 'components/forms/ticked-checkbox',
    },
    {
      name: 'Checkbox',
      breadcrumb: 'Components/Form/',
      url: 'components/forms/checkbox',
    },
    {
      name: 'Getting Started',
      breadcrumb: 'Getting Started/',
      url: 'getting-started',
    },
    {
      name: 'Introduction',
      breadcrumb: 'Introduction/',
      url: 'introduction',
    },
    {
      name: 'Tooltips',
      breadcrumb: 'Components/',
      url: 'components/tooltips',
    },
    {
      name: 'Badges',
      breadcrumb: 'Components/',
      url: 'components/badges',
    },
    {
      name: 'Shadows',
      breadcrumb: 'Components/',
      url: 'components/shadows',
    },
    {
      name: 'Accordian',
      breadcrumb: 'Components/',
      url: 'components/accordian',
    },
    {
      name: 'Trustpilot',
      breadcrumb: 'Components/',
      url: 'components/trustpilot',
    },
    {
      name: 'Icon Library',
      breadcrumb: 'Icon Library/',
      url: 'icon-library',
    },
    {
      name: 'Logo Library',
      breadcrumb: 'Logo Library/',
      url: 'logo-library',
    },
  ]
  searchResults: Array<any> = []

  @ViewChild('searchResultElement') searchResultElement: any
  @ViewChild(TemplateRef) overlay: any
  @ViewChild('searchInput') searchInput?: HTMLInputElement | null
  @Input() search?: string = ''
  @Input() type?: string
  @Output() value = new EventEmitter()
  hideResults() {
    if (window.innerWidth < 768) return
    setTimeout(() => {
      this.searchResultElement.nativeElement.style.opacity = '0'
      setTimeout(() => {
        this.searchResultElement.nativeElement.style.display = 'none'
      }, 300)
    }, 300)
  }
  showResults() {
    this.searchResultElement.nativeElement.style.display = 'inline-block'
    this.searchResultElement.nativeElement.style.opacity = '1'
  }

  filterSearch(el: any) {
    this.value.emit(el.target.value)

    if (window.innerWidth < 1000) return

    if (el == null) return
    if (!el.target) {
      return
    }

    if (el.target.value.trim().length == 0) {
      this.searchResults.length = 0
      return
    }

    this.searchResults = this.menuItems.filter((e) =>
      e.name.toLowerCase().includes(el.target.value.trim().toLowerCase()),
    )

    if (this.searchResults.length == 0) {
      this.searchResults = [{ name: 'No Results found...', error: true }]
    }
  }

  ngOnChanges(e: SimpleChange) {
    if (this.search?.trim().length == 0) {
      this.searchResults.length = 0
      return
    }
    this.searchResults = this.menuItems.filter((e) => {
      if (!this.search) return false
      return e.name.toLowerCase().includes(this.search.trim().toLowerCase())
    })

    if (this.searchResults.length == 0) {
      this.searchResults = [{ name: 'No Results found...', error: true }]
    }
  }

  closeSearch() {
    this.el.nativeElement.style.display = 'none'
  }

  resetSearch() {
    this.searchResultElement.nativeElement.style.opacity = '0'
    setTimeout(() => {
      this.search = ''
      this.searchResults.length = 0
    }, 200)
  }
  ngOnInit(): void { }
  ngAfterViewInit() { }
}
