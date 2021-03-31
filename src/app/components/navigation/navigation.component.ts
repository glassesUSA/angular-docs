import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Output, ViewChild, EventEmitter, Inject } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(@Inject(DOCUMENT) private document: Document) {
  }
  searchOpen = false;
  searchClose = false;
  menuOpen = false;
  menuClose = false;
  defaultValue = ""

  @Output() resetSearch = new EventEmitter<string>()

  @ViewChild('container') containerEl?: HTMLElement | null

  openSearch() {
    if (this.menuOpen) {
      this.menuOpen = false;
      this.menuClose = true;
    }
    this.document.body.style.overflow = "hidden";
    this.searchClose = false;
    this.searchOpen = true
  }

  closeSearch() {
    this.searchOpen = false
    this.searchClose = true;
    this.defaultValue = "";
    setTimeout(() => {
      this.document.body.removeAttribute("style");
    }, 300);
  }

  openMenu() {
    if (this.menuOpen == false) {
      this.menuOpen = true;
      this.menuClose = false;
      this.document.body.style.overflow = "hidden";
    } else {
      this.menuOpen = false;
      this.menuClose = true;
      setTimeout(() => {
        this.document.body.removeAttribute("style");
      }, 300);
    }
  }

  navigate() {
    if (window.innerWidth < 1000) {
      this.openMenu();
    }
  }

  onSearch(e: any) {
    this.defaultValue = e;
  }

  toolbarToggle(e) {
    console.log(e);


  }
}
