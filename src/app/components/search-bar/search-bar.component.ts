import {
  Component,
  ElementRef,
<<<<<<< HEAD
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core'
// import menuItems from '../../menuItems.json'
=======
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  EventEmitter,
  SimpleChange
} from '@angular/core'
>>>>>>> 3dacc5adeaf7067cd9038cb68d86c54a7a56f6c0

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
<<<<<<< HEAD
  constructor(public el: ElementRef) {}
=======
  constructor(public el: ElementRef) { }
>>>>>>> 3dacc5adeaf7067cd9038cb68d86c54a7a56f6c0

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
<<<<<<< HEAD
=======
  @ViewChild('searchInput') searchInput?: HTMLInputElement | null
  @Input() search?: string = ""
  @Input() type?: string
  @Output() value = new EventEmitter();
>>>>>>> 3dacc5adeaf7067cd9038cb68d86c54a7a56f6c0
  hideResults() {
    if (window.innerWidth < 768) return
    setTimeout(() => {
      this.searchResultElement.nativeElement.style.opacity = '0'
      setTimeout(() => {
        this.searchResultElement.nativeElement.style.display = 'none'
      }, 300)
    }, 300)
<<<<<<< HEAD
=======
    this.resetSearch();
>>>>>>> 3dacc5adeaf7067cd9038cb68d86c54a7a56f6c0
  }
  showResults() {
    this.searchResultElement.nativeElement.style.display = 'inline-block'
    this.searchResultElement.nativeElement.style.opacity = '1'
  }

  filterSearch(el: any) {
<<<<<<< HEAD
    if (el == null) return
=======
    this.value.emit(el.target.value)

    if (window.innerWidth < 1000) return

    if (el == null) return
    if (!el.target) {
      return
    }
>>>>>>> 3dacc5adeaf7067cd9038cb68d86c54a7a56f6c0

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

<<<<<<< HEAD
  closeSearch() {
    this.el.nativeElement.style.display = 'none'
  }
  ngOnInit(): void {}
  ngAfterViewInit() {}
=======
  ngOnChanges(e: SimpleChange) {
    if (this.search?.trim().length == 0) {
      this.searchResults.length = 0
      return
    }
    this.searchResults = this.menuItems.filter((e) => {
      if (!this.search) return false;
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
      this.search = ""
      this.searchResults.length = 0
    }, 200);
  }
  ngOnInit(): void {

  }
  ngAfterViewInit() { }
>>>>>>> 3dacc5adeaf7067cd9038cb68d86c54a7a56f6c0
}
