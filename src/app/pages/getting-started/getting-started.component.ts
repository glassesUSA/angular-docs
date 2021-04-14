import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle(`${this.title.getTitle()} | Getting Started`)
  }

  ngOnInit(): void {
  }


}
