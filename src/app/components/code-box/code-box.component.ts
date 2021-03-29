import { Component, ContentChild, OnInit, ViewChild } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

declare let hljs: any

@Component({
  selector: 'code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.scss'],
})
export class CodeBoxComponent implements OnInit {
  currentCode: any
  codeContent: any
  originalCode: any

  constructor(private sanitise: DomSanitizer) {}

  @ContentChild('projected') projectedContent: any
  @ViewChild('codeContainer') codeContainer: any
  @ViewChild('codeEditor') codeElement: any
  @ViewChild('codeBox') codeBox: any

  ngAfterViewInit() {
    if (this.codeElement && this.codeContainer) {
      this.codeElement.nativeElement.innerHTML = this.codeContent.changingThisBreaksApplicationSecurity
        .trim()
        .replace(/</g, '&lt;')
        .replace(/(_ngcontent).+?=""/g, '')
        .replace(/\n/g, '<p></p>')
    }

    hljs.highlightBlock(this.codeElement.nativeElement)
  }
  ngAfterContentInit() {
    const original = this.projectedContent.nativeElement as HTMLElement
    const attributes = Array.from(original.attributes)
    const clone: HTMLElement = Object.assign(original, {})

    attributes.forEach((attribute) => clone.removeAttribute(attribute.name))
    this.codeContent = this.sanitise.bypassSecurityTrustHtml(clone.innerHTML)
    this.originalCode = this.codeContent
  }

  listener: any

  formatCode(event: any) {
    event.stopPropagation()

    document.addEventListener(
      'click',
      (this.listener = () => {
        document.removeEventListener('click', this.listener, false)
        this.codeElement.nativeElement.innerHTML.replace(
          /(<span class="hljs.+?">)|(<\/span>)|(<p><\/p>)|(<font+.+\s?">)|(<\/font>)/g,
          '',
        )
        hljs.highlightBlock(this.codeElement.nativeElement)
      }),
    )
  }

  updateCode(el: any) {
    el = el.target

    let text = ''
    let element = el.innerHTML.replace(
      /(<span class="hljs.+?">)|(<\/span>)|(<p><\/p>)|(<font+.+\s?">)|(<\/font>)/g,
      '',
    )
    element = element.replace(/<p><\/p>/g, '')
    element = element.replace(/&gt;/g, '>')
    element = element.replace(/&nbsp;/g, ' ')
    element = element.replace(/&lt;/g, '<')
    text += element

    this.codeContent = this.sanitise.bypassSecurityTrustHtml(text)
  }

  resetCode(el: any) {
    el = el.target
    let parentNode = this.codeElement.nativeElement
    parentNode.innerHTML = this.originalCode.changingThisBreaksApplicationSecurity
      .replaceAll('<', '&lt;')
      .replace(/(_ngcontent).+?=""/g, '')
      .replaceAll('\n', '<p></p>')
    hljs.highlightBlock(parentNode)
    this.codeContent = this.originalCode
  }

  copyCode() {
    let copyEl = document.createElement('input')
    copyEl.value = this.codeContent.changingThisBreaksApplicationSecurity.replace(
      /(_ngcontent).+?=""\s?/g,
      '',
    )
    copyEl.id = 'copyCodeInput'
    document.body.append(copyEl)

    const input: any = document.querySelector('#copyCodeInput')
    input.select()
    input.setSelectionRange(0, 999999)
    document.execCommand('copy')
    input.remove()
  }

  ngOnInit(): void {}
}
