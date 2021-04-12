import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'
declare let hljs: any
import * as beautify from 'js-beautify'

@Component({
  selector: 'code-box',
  template: `
    <div class="codeWrapper" [ngClass]="{ inline: inline }">
      <svg
        *ngIf="!inline"
        class="copyButton"
        (click)="copyCode()"
        width="16"
        height="19"
        viewBox="0 0 16 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.7895 0H1.68421C0.757895 0 0 0.777273 0 1.72727V13.8182H1.68421V1.72727H11.7895V0ZM14.3158 3.45455H5.05263C4.12632 3.45455 3.36842 4.23182 3.36842 5.18182V17.2727C3.36842 18.2227 4.12632 19 5.05263 19H14.3158C15.2421 19 16 18.2227 16 17.2727V5.18182C16 4.23182 15.2421 3.45455 14.3158 3.45455ZM14.3158 17.2727H5.05263V5.18182H14.3158V17.2727Z"
          fill="#999999"
        />
      </svg>
      <div class="codeBox {{ language }}" #code [ngClass]="{ inline: inline }">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./code-box.component.scss'],
})
export class CodeBoxComponent implements OnInit {
  constructor(private el: ElementRef) {}
  @ViewChild('code') code
  @Input() inline = false
  @Input() language = 'html'
  formattedCode

  ngOnInit(): void {}
  ngAfterViewInit() {
    let newCode = this.code.nativeElement.innerHTML

    this.formattedCode = newCode
    if (this.inline) {
      newCode = newCode
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\s?(_ngcontent).+?=""/g, '')
      this.code.nativeElement.innerHTML = newCode
    } else {
      newCode = newCode.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
      this.code.nativeElement.innerHTML = `<pre>${beautify
        .html(newCode, {
          wrap_line_length: '70',
        })
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')}</pre>`
    }

    hljs.highlightBlock(this.code.nativeElement)
  }

  copyCode() {
    let copyEl = document.createElement('input')

    copyEl.value = this.formattedCode
      .replace(/(_ngcontent).+?=""/g, '')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/(<p><\/p>)/g, '')
      .replace(/<br>/g, '')
      .replace(/(<pre.+?>)|(<\/pre>)/g, '')
      .replace(/\s{2,}/g, '')

    copyEl.id = 'copyCodeInput'
    document.body.append(copyEl)

    const input: any = document.querySelector('#copyCodeInput')
    input.select()
    input.setSelectionRange(0, 999999)
    document.execCommand('copy')
    input.remove()
  }
}
