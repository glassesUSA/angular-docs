import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core'
import { loadElements } from '@glassesusa/dsm/dist/dsm-effects.js'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs/operators'
import * as beautify from 'js-beautify'
import * as htmlparser2 from 'htmlparser2'
declare let hljs: any

@Component({
  selector: 'code-container',
  template: `
    <div class="codeBox" #codeBox>
      <div class="codeContainer" #codeContainer>
        <ng-content></ng-content>
      </div>

      <div class="codeEditorBox">
        <div class="navButtons">
          <svg
            class="resetButton"
            (click)="resetCode($event)"
            width="13"
            height="13"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 1V5.33333H9.66667M13.2778 4.61111C12.2645 2.47333 10.0545 1 7.5 1C6.64641 1 5.80117 1.16813 5.01256 1.49478C4.22394 1.82144 3.50739 2.30022 2.90381 2.90381C2.30023 3.50739 1.82144 4.22394 1.49478 5.01256C1.16813 5.80117 1 6.64641 1 7.5C1 8.35359 1.16813 9.19883 1.49478 9.98744C1.82144 10.7761 2.30023 11.4926 2.90381 12.0962C3.50739 12.6998 4.22394 13.1786 5.01256 13.5052C5.80117 13.8319 6.64641 14 7.5 14V14C9.22391 14 10.8772 13.3152 12.0962 12.0962C13.3152 10.8772 14 9.22391 14 7.5L13.2778 4.61111Z"
              stroke="#999999"
              stroke-width="2"
            />
          </svg>
          <svg
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
        </div>
        <pre
          class="codeEditor html"
          #codeEditor
          (input)="updateCode($event)"
          (click)="formatCode($event)"
          contenteditable="true"
          [innerHTML]="currentCode"
        ></pre>
      </div>
    </div>
  `,
  styleUrls: ['./code-container.component.scss'],
})
export class CodeContainerComponent implements OnInit {
  currentCode: any
  codeContent: any
  @Input() icon?: any
  beautifySettings = {
    wrap_line_length: '70',
  }
  originalCode: any
  currentURL
  constructor(
    private router: Router,
    public el: ElementRef,
    private active: ActivatedRoute,
  ) {
    this.active.params.subscribe((a) => {
      if (Object.keys(a).length > 0) {
        setTimeout(() => {
          if (document.querySelector('.swiper-outer')) return
          loadElements()
        }, 40)
      }
    })
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(({ url }) => {
        this.currentURL = url
      })
  }

  @ContentChild('projected') projectedContent: any
  @ViewChild('codeContainer') codeContainer: any
  @ViewChild('codeEditor') codeElement: any
  @ViewChild('codeBox') codeBox: any
  ngOnChanges() {
    if (this.icon && this.codeContainer) {
      this.codeContainer.nativeElement.innerHTML = this.icon
      this.codeContent = this.codeContainer.nativeElement.innerHTML
      if (this.codeElement && this.codeContainer) {
        this.codeElement.nativeElement.innerText = beautify.html(
          this.beautifyFormat(this.codeContent),
          this.beautifySettings,
        )
      }
      this.copyCode()
      loadElements()
      hljs.highlightBlock(this.codeElement.nativeElement)
    }
  }
  ngAfterViewInit() {
    if (this.icon) {
      this.codeContainer.nativeElement.innerHTML = this.icon
    }

    this.codeContainer.nativeElement.innerHTML = this.codeContainer.nativeElement.innerHTML.replace(
      /(<pre>)|(<\/pre>|(_ngcontent.+?""))/g,
      '',
    )
    this.codeContent = this.codeContainer.nativeElement.innerHTML
    this.codeContainer.nativeElement.innerHTML = ''
    if (this.codeElement && this.codeContainer) {
      this.codeElement.nativeElement.innerText = beautify.html(
        this.beautifyFormat(this.codeContent),
        this.beautifySettings,
      )
    }

    this.codeContainer.nativeElement.innerHTML = this.codeContent

    if (this.currentURL.includes('trustpilot')) {
      this.codeContainer.nativeElement.innerHTML = ''
      this.codeContainer.nativeElement.innerHTML = this.codeContent
      this.originalCode = this.codeContainer.nativeElement.innerHTML
      setTimeout(() => {
        if (document.querySelector('.swiper-outer')) return
        loadElements()
      }, 120)
    } else {
      this.originalCode = this.codeContainer.nativeElement.innerHTML

      setTimeout(() => {
        loadElements()
      }, 10)
    }

    hljs.highlightBlock(this.codeElement.nativeElement)
  }

  listener: any
  codeReset = false
  stripChars(text) {
    let finalText = ''
    let cancelEnd = false
    const parser = new htmlparser2.Parser({
      onopentag(name, attributes: any) {
        cancelEnd = false
        /*
         * This fires when a new tag is opened.
         *
         * If you don't need an aggregated `attributes` object,
         * have a look at the `onopentagname` and `onattribute` events.
         */
        if (name == 'br' || name == 'p' || name == 'font' || 'pre') {
          cancelEnd = true
        } else if (
          name == 'span' &&
          attributes.class &&
          attributes.class.includes('hljs')
        ) {
          cancelEnd = true
        } else if (attributes.style) {
          cancelEnd = true
        } else {
          let props = ''
          console.log(attributes)

          for (let key in attributes) {
            if (key.includes('_ngcontent')) return
            props += ` ${key}="${attributes[key]}"`
          }

          finalText += `<${name}${props}>`
        }
      },
      ontext(text) {
        finalText += text
      },
      onclosetag(name) {
        if (cancelEnd) return

        finalText += `</${name}>`
      },
    })

    parser.write(text)
    parser.end()

    return finalText
  }
  formatCode(event: any) {
    event.stopPropagation()

    document.addEventListener(
      'click',
      (this.listener = () => {
        this.codeReset = false
        document.removeEventListener('click', this.listener, false)
        let element = this.stripChars(this.codeElement.nativeElement.innerHTML)
        if (this.currentURL.includes('trustpilot')) {
          this.codeContainer.nativeElement.innerHTML = element
          loadElements()
        }
        this.codeElement.nativeElement.innerHTML = element
        this.codeElement.nativeElement.innerText = beautify.html(
          this.beautifyFormat(element),
          this.beautifySettings,
        )
        hljs.highlightBlock(this.codeElement.nativeElement)
      }),
    )
  }
  beautifyFormat(text) {
    return (text = text
      .replace(/<br>/g, '')
      .replace(/<\/button>/g, '</button>\n')
      // .replace(/<\/label>/g, '</label>\n')
      .replace(/<input/g, '\n<input')
      .replace(/<textarea/g, '\n<textarea')
      .replace(/<label/g, '\n<label')
      .replace(/<span/g, '\n<span'))
  }

  updateCode(el: any) {
    el = el.target

    let text = this.stripChars(el.innerHTML)
    this.codeContent = text

    if (!this.currentURL.includes('trustpilot')) {
      this.codeContainer.nativeElement.innerHTML = text
      loadElements()
    } else {
      if (this.codeContainer.nativeElement.querySelector('.clickLoad')) return
      this.codeContainer.nativeElement.innerHTML += `<div class="clickLoad">To refresh the component, click here</div>`
    }
  }

  resetCode(el: any) {
    el = el.target

    let parentNode = this.codeElement.nativeElement
    let formattedCode = this.originalCode.replace(/(_ngcontent).+?=""/g, '')

    parentNode.innerHTML = formattedCode

    this.codeContent = this.originalCode
    this.codeContainer.nativeElement.innerHTML = this.originalCode
    this.codeElement.nativeElement.innerText = beautify.html(
      this.beautifyFormat(this.originalCode),
      this.beautifySettings,
    )
    setTimeout(() => {
      loadElements()
    }, 10)
    hljs.highlightBlock(parentNode)
  }

  copyCode() {
    let copyEl = document.createElement('input')
    copyEl.value = this.codeContent.replace(/(_ngcontent).+?=""\s?/g, '')
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
