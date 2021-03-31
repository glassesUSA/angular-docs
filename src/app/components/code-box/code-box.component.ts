import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
declare let hljs: any

@Component({
  selector: 'code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.scss']
})
export class CodeBoxComponent implements OnInit {

  constructor(private el: ElementRef) { }
  @ViewChild('code') code
  @Input() inline = false
  @Input() language = 'html'
  formattedCode

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    let newCode = this.code.nativeElement.innerHTML;

    this.formattedCode = newCode
    newCode = newCode.replace(/<br>/g, '/n');
    newCode = newCode.replace(/(<p><\/p>)/g, '/n/n');
    if (this.inline) {
      newCode = newCode.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\s?(_ngcontent).+?=""/g, '');
    }
    this.code.nativeElement.innerHTML = newCode
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
      .replace(/\s{2,}/g, '');

    copyEl.id = 'copyCodeInput'
    document.body.append(copyEl)

    const input: any = document.querySelector('#copyCodeInput')
    input.select()
    input.setSelectionRange(0, 999999)
    document.execCommand('copy')
    input.remove()
  }
}
