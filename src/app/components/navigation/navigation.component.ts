import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Output, ViewChild, EventEmitter, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  componentsActive = true;
  searchOpen = false;
  searchClose = false;
  menuOpen = false;
  effectTriggered = true
  menuClose = false;
  defaultValue = ""

  constructor(@Inject(DOCUMENT) private document: Document, public router: Router) { }

  // ngOnInit() {
  //   this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe(({ url }) => {

  //     if (url.includes("components")) {
  //       this.componentsActive = true;
  //       if (!this.effectTriggered) {
  //         this.effectTriggered = true
  //       }
  //     } else {
  //       this.effectTriggered = false
  //     }
  //   });
  // }

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
