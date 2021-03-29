import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core'
// import menuItems from '../../menuItems.json'

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor(public el: ElementRef) {}

  menuItems = [
    {
      name: 'CTA Buttons',
      breadcrumb: 'Components/',
    },
    {
      name: 'Round Buttons',
      breadcrumb: 'Components/',
    },
    {
      name: 'Checkbox',
      breadcrumb: 'Components/',
    },
    {
      name: 'Getting Started',
      breadcrumb: 'Getting Started/',
    },
  ]
  searchResults: Array<any> = []

  @ViewChild('searchResultElement') searchResultElement: any
  @ViewChild(TemplateRef) overlay: any
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
    if (el == null) return

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

  closeSearch() {
    this.el.nativeElement.style.display = 'none'
  }
  ngOnInit(): void {}
  ngAfterViewInit() {}
}
