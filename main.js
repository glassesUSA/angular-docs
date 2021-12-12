(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/theo/Documents/Websites/DSM Documentation/angular-docs/src/main.ts */"zUnb");


/***/ }),

/***/ "5DdF":
/*!****************************************************************!*\
  !*** ./src/app/pages/components/forms/text-field.component.ts ***!
  \****************************************************************/
/*! exports provided: TextFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldComponent", function() { return TextFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/page-header/page-header.component */ "tGzp");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/tab/tab.component */ "66o4");
/* harmony import */ var _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/code-box/code-box.component */ "vGpf");
/* harmony import */ var _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/code-container/code-container.component */ "t1gI");






class TextFieldComponent {
    constructor() { }
    ngOnInit() { }
}
TextFieldComponent.ɵfac = function TextFieldComponent_Factory(t) { return new (t || TextFieldComponent)(); };
TextFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextFieldComponent, selectors: [["text-field"]], decls: 60, vars: 9, consts: [["title", "Text Field", "breadcrumb", "Components / Forms / "], ["tabTitle", "Usage"], [1, "componentMaxWidth"], [3, "inline"], ["action", "", 1, "dsmForm"], [1, "inputLabel"], ["type", "text"], [1, "smallTitle"], ["type", "text", 1, "error"], [1, "error"], ["type", "text", "disabled", ""]], template: function TextFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " To use this element, create a div with the class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".inputLabel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " inside a form with the class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ".dsmForm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " . Inside that div element, create a label with the name of the field. To add a placeholder to the input add it normally using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "placeholder=\"randomtext\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Finally add in your text input field. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Error Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " To add error styling, add the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, ".error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " class to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " element. If you would like to add a custom error message, you can insert a span with the class of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, ".error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " immediately after the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " closing tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "This is an error message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Disabled Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " To add disabled styling, add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " class to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    } }, directives: [_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__["TabComponent"], _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__["CodeBoxComponent"], _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__["CodeContainerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "66o4":
/*!*************************************************!*\
  !*** ./src/app/components/tab/tab.component.ts ***!
  \*************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tabs/tabs.component */ "EkNo");


const _c0 = ["*"];
class TabComponent {
    constructor(tabs) {
        this.active = false;
        tabs.addTab(this);
    }
    ngOnInit() { }
}
TabComponent.ɵfac = function TabComponent_Factory(t) { return new (t || TabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_1__["TabsComponent"])); };
TabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabComponent, selectors: [["tab"]], inputs: { tabTitle: "tabTitle" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "tabContent", 3, "hidden"]], template: function TabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.active);
    } }, styles: [".tabContent[_ngcontent-%COMP%] {\n  padding: 40px 60px;\n}\n@media (max-width: 768px) {\n  .tabContent[_ngcontent-%COMP%] {\n    padding: 40px 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7QUFDRTtFQUhGO0lBSUksa0JBQUE7RUFFRjtBQUNGIiwiZmlsZSI6InRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJDb250ZW50IHtcbiAgcGFkZGluZzogNDBweCA2MHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmc6IDQwcHggMTZweDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "7Ol6":
/*!**************************************************************!*\
  !*** ./src/app/pages/introduction/introduction.component.ts ***!
  \**************************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/search-bar/search-bar.component */ "lCy9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class IntroductionComponent {
    constructor() { }
    ngOnInit() {
    }
}
IntroductionComponent.ɵfac = function IntroductionComponent_Factory(t) { return new (t || IntroductionComponent)(); };
IntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroductionComponent, selectors: [["introduction"]], decls: 67, vars: 0, consts: [[1, "splitRow"], ["type", "page"], [1, "informationWidth"], ["routerLink", "../getting-started"], [1, "contentGrid"], ["routerLink", "../components", 1, "contentItem"], [1, "contentBox"], ["width", "108", "height", "90", "viewBox", "0 0 108 90", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M59.3451 87.6822H106.347V1H1.72778V87.6822H49.6812", "stroke", "#7D7878", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M97.4134 26.9901H10.7312V50.9302H97.4134V26.9901Z", "stroke", "#7D7878", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M35.6962 58.251H10.7312V78.6037H35.6962V58.251Z", "stroke", "#7D7878", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M66.5183 58.251H41.5532V78.6037H66.5183V58.251Z", "stroke", "#7D7878", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M97.3405 58.251H72.3755V78.6037H97.3405V58.251Z", "stroke", "#7D7878", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M1.65308 16.3745H106.345", "stroke", "#7D7878", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M54.3649 89C55.1331 89 55.7559 88.3773 55.7559 87.609C55.7559 86.8408 55.1331 86.218 54.3649 86.218C53.5967 86.218 52.9739 86.8408 52.9739 87.609C52.9739 88.3773 53.5967 89 54.3649 89Z", "fill", "#7D7878", "stroke", "#7D7878", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M97.4132 8.32104H91.9224", "stroke", "#7D7878", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M86.9442 8.32104H81.4534", "stroke", "#7D7878", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M76.548 8.32104H71.0571", "stroke", "#7D7878", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "boxTitle"], [1, "boxData"], ["routerLink", "../logo-library", 1, "contentItem"], ["width", "98", "height", "102", "viewBox", "0 0 98 102", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M1 13.5165H24.4681", "stroke", "#7D7878", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M32.5515 13.5165H96.3064", "stroke", "#7D7878", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M96.3064 89.0055H72.8384", "stroke", "#7D7878", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M64.7549 89.0055H1", "stroke", "#7D7878", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M15.5371 1V101", "stroke", "#7D7878", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M81.6384 1V101", "stroke", "#7D7878", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M81.5731 70.7523L48.5223 89.0053L15.4714 70.6871", "stroke", "#7D7878", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M15.4714 31.8998L48.5223 13.5165L81.5731 31.7042", "stroke", "#7D7878", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M68.5358 63.1905L48.5228 74.3378L28.5098 63.1905V39.4617L48.5228 28.2491L68.5358 39.3313V63.1905Z", "stroke", "#7D7878", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["routerLink", "../icon-library", 1, "contentItem"], ["width", "92", "height", "91", "viewBox", "0 0 92 91", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M1.721 25.45v63.988h88.557V24.46", "stroke", "#7D7878", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M80.996 15.92l2.846.866v66.897s-19.37-6.127-37.688.124V89.5", "stroke", "#7D7878", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M50.796 13.691L74.56 1.5v61.947L46.773 77.803V16.785s-16.585-6.435-38.306 0v66.898s19.37-6.127 37.688.124M53.2 25.883l14.79-7.488M53.2 37.309l14.79-7.426M53.2 48.797l14.79-7.488M53.2 60.285l14.79-7.488M18 68.875c3.404-1.175 14.852-2.537 19.556-.866M18 56.03c3.404-1.176 14.852-2.538 19.556-.867M18 43.184c3.404-1.176 14.852-2.537 19.556-.866M18 30.338c3.404-1.175 14.852-2.537 19.556-.866", "stroke", "#7D7878", "stroke-width", "1.5", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function IntroductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "search-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "What is a design system?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " When creating content, designing, photographing and so on, a uniform identity must be maintained for all final products. To make this task easier, this Design System includes rules, explanations, assets and everything needed to easily create a large and uniform environment. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "How to use?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " To use the design system head to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Getting Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " section and follow the instructions there. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Design system libraries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " The libraries contain three types of content:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Components ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Collection of key elements for digital products that share one code and prevent duplicate code. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Logo Library ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Logo Library ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Collection of logos in SVG format to prevent duplicate code and help with easy code insertion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "svg", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Icon Library ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Icon Library ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Collection of icons in SVG format to prevent duplicate code and help with easy code insertion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_1__["SearchBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["h1[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 25px;\n  margin: 0;\n  line-height: 29px;\n  color: #636363;\n}\n@media (max-width: 768px) {\n  h1[_ngcontent-%COMP%] {\n    font-weight: 500;\n    font-size: 23px;\n    line-height: 27px;\n  }\n}\n.splitRow[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 60px;\n  padding-bottom: 30px;\n  border-bottom: 1px solid #DEDEDE;\n}\n@media (max-width: 1200px) {\n  .splitRow[_ngcontent-%COMP%] {\n    border-bottom: none;\n    margin-bottom: 0;\n    padding-bottom: 0px;\n  }\n  .splitRow[_ngcontent-%COMP%]   search-bar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nh2[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 140.19%;\n  margin: 0;\n  margin-bottom: 12px;\n  margin-top: 30px;\n  color: #000000;\n}\n@media (max-width: 768px) {\n  h2[_ngcontent-%COMP%] {\n    font-weight: normal;\n    font-size: 18px;\n    line-height: 140.19%;\n  }\n}\n.informationWidth[_ngcontent-%COMP%] {\n  max-width: 870px;\n}\n.contentGrid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  margin-top: 40px;\n  width: 100%;\n}\n.contentGrid[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 104px;\n}\n@media (max-width: 1200px) {\n  .contentGrid[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    height: auto;\n    width: auto;\n    width: 65px;\n  }\n}\n@media (max-width: 768px) {\n  .contentGrid[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 20px;\n  }\n}\n.contentGrid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 40px;\n  max-width: 340px;\n}\n.contentGrid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.contentItem[_ngcontent-%COMP%] {\n  height: 100%;\n  min-width: 0;\n  margin-right: 20px;\n}\n.contentItem[_ngcontent-%COMP%]   .boxData[_ngcontent-%COMP%]   .boxTitle[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .contentItem[_ngcontent-%COMP%] {\n    display: flex;\n    background: #FFFFFF;\n    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);\n    border-radius: 5px;\n    margin-bottom: 10px;\n    align-content: stretch;\n    align-items: stretch;\n  }\n  .contentItem[_ngcontent-%COMP%]   .boxData[_ngcontent-%COMP%] {\n    padding: 16px 18px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .contentItem[_ngcontent-%COMP%]   .boxData[_ngcontent-%COMP%]   .boxTitle[_ngcontent-%COMP%] {\n    display: block;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 19px;\n    margin-bottom: 6px;\n    color: #595353;\n  }\n}\n.contentBox[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  height: 220px;\n  box-shadow: 0px 1px 1px rgba(58, 72, 80, 0.07), 0px 4px 12px rgba(58, 72, 80, 0.07), 0px 1px 4px rgba(58, 72, 80, 0.07);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  padding: 33px 23px;\n  transition: 0.2s background-color;\n}\n@media (hover: hover) {\n  .contentBox[_ngcontent-%COMP%]:hover {\n    background-color: #F8F8F8;\n  }\n}\n.contentBox[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.contentBox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 88px;\n  margin-bottom: 20px;\n}\n@media (max-width: 1200px) {\n  .contentBox[_ngcontent-%COMP%] {\n    height: 151px;\n  }\n  .contentBox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n}\n@media (max-width: 768px) {\n  .contentBox[_ngcontent-%COMP%] {\n    background: #2F3842;\n    border-radius: 2px;\n    margin: 5px;\n    margin-right: 0;\n    width: auto;\n    align-items: center;\n    align-content: center;\n    height: auto;\n  }\n  .contentBox[_ngcontent-%COMP%]   .boxTitle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .contentBox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .contentBox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    stroke: white;\n  }\n  .contentBox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 47px;\n    margin-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0U7RUFSRjtJQVNJLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VBRUY7QUFDRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUFFRjtBQUVFO0VBVkY7SUFXSSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUFDRjtFQUNFO0lBQ0UsYUFBQTtFQUNKO0FBQ0Y7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBRjtBQUVFO0VBVkY7SUFXSSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxvQkFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0FBQ0o7QUFFRTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0VBQUo7QUFDRjtBQUdFO0VBbEJGO0lBbUJJLGNBQUE7SUFDQSxnQkFBQTtFQUFGO0FBQ0Y7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVJO0VBQ0UsZUFBQTtBQUFOO0FBS0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRkY7QUFJRTtFQUNFLGFBQUE7QUFGSjtBQUtFO0VBVEY7SUFVSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSwwQ0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLG9CQUFBO0VBRkY7RUFJRTtJQUNFLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7RUFGSjtFQUtFO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7RUFISjtBQUNGO0FBT0E7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1SEFBQTtFQUdBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUFORjtBQVFFO0VBQ0U7SUFDRSx5QkFBQTtFQU5KO0FBQ0Y7QUFTRTtFQUNFLGVBQUE7QUFQSjtBQVVFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBUko7QUFXRTtFQS9CRjtJQWdDSSxhQUFBO0VBUkY7RUFVRTtJQUNFLG1CQUFBO0VBUko7QUFDRjtBQVdFO0VBdkNGO0lBd0NJLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0EsWUFBQTtFQVJGO0VBVUU7SUFDRSxhQUFBO0VBUko7RUFXRTs7SUFFRSxhQUFBO0VBVEo7RUFZRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQVZKO0FBQ0YiLCJmaWxlIjoiaW50cm9kdWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgY29sb3I6ICM2MzYzNjM7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIH1cbn1cblxuLnNwbGl0Um93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNERURFREU7XG5cblxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcblxuICAgIHNlYXJjaC1iYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuaDIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE0MC4xOSU7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0MC4xOSU7XG4gIH1cbn1cblxuLmluZm9ybWF0aW9uV2lkdGgge1xuICBtYXgtd2lkdGg6IDg3MHB4O1xufVxuXG4uY29udGVudEdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICB3aWR0aDogMTAwJTtcblxuICBzdmcge1xuICAgIHdpZHRoOiAxMDRweDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICBzdmcge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICB3aWR0aDogNjVweDtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG5cbiAgc3BhbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIG1heC13aWR0aDogMzQwcHg7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgfVxufVxuXG4uY29udGVudEl0ZW0ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuXG4gIC5ib3hEYXRhIC5ib3hUaXRsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgIC5ib3hEYXRhIHtcbiAgICAgIHBhZGRpbmc6IDE2cHggMThweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmJveERhdGEgLmJveFRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgIGNvbG9yOiAjNTk1MzUzO1xuICAgIH1cbiAgfVxufVxuXG4uY29udGVudEJveCB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGhlaWdodDogMjIwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoNTgsIDcyLCA4MCwgMC4wNyksXG4gICAgMHB4IDRweCAxMnB4IHJnYmEoNTgsIDcyLCA4MCwgMC4wNyksXG4gICAgMHB4IDFweCA0cHggcmdiYSg1OCwgNzIsIDgwLCAwLjA3KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMzNweCAyM3B4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGJhY2tncm91bmQtY29sb3I7XG5cbiAgQG1lZGlhIChob3Zlcjpob3Zlcikge1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbiAgICB9XG4gIH1cblxuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgd2lkdGg6IDg4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICBoZWlnaHQ6IDE1MXB4O1xuXG4gICAgc3ZnIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgYmFja2dyb3VuZDogIzJGMzg0MjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogYXV0bztcblxuICAgIC5ib3hUaXRsZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIHN2ZyxcbiAgICBzdmcgKiB7XG4gICAgICBzdHJva2U6IHdoaXRlO1xuICAgIH1cblxuICAgIHN2ZyB7XG4gICAgICB3aWR0aDogNDdweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "8Wgu":
/*!********************************************************************!*\
  !*** ./src/app/pages/getting-started/getting-started.component.ts ***!
  \********************************************************************/
/*! exports provided: GettingStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function() { return GettingStartedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/page-header/page-header.component */ "tGzp");
/* harmony import */ var _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/code-box/code-box.component */ "vGpf");




class GettingStartedComponent {
    constructor(title) {
        this.title = title;
        this.title.setTitle(`${this.title.getTitle()} | Getting Started`);
    }
    ngOnInit() {
    }
}
GettingStartedComponent.ɵfac = function GettingStartedComponent_Factory(t) { return new (t || GettingStartedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
GettingStartedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GettingStartedComponent, selectors: [["getting-started"]], decls: 15, vars: 1, consts: [["title", "Getting Started"], [1, "smallTitle"], [3, "inline"], ["language", "javascript"]], template: function GettingStartedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\nTo install the styling and scripts, include the following code in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " section of your project.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/@glassesusa/dsm@latest/dist/styles.min.css\"> <!-- Scripts - Required if you are using any form elements/buttons--> <script src=\"https://cdn.jsdelivr.net/npm/@glassesusa/dsm@latest/dist/dsm-effects.min.js\"></script>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\nAdditionally, in order to use the widgets with Swiper functionality such as the trustpilot widgets, include this script\ntag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " <script src=\"https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.4.14/swiper-bundle.min.js\" integrity=\"sha512-APQL/QFRDoEBh9V5ztds1P6qEICllWq9Dpcv+pVu5DE/g5MZ1GE7+pj9tHhN1SFBv4J7B2j5mfw0cOUitz+aGg==\" crossorigin=\"anonymous\"></script>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\nIf you cannot include scripts in the head tag, use the following script to include the files into your document.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " <script> var insertScript = document.createElement(\"script\"); insertScript.src = 'https://cdn.jsdelivr.net/npm/@glassesusa/dsm@latest/dist/dsm-effects.min.js' document.head.appendChild(insertScript) </script>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    } }, directives: [_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__["PageHeaderComponent"], _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_3__["CodeBoxComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZXR0aW5nLXN0YXJ0ZWQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EN7T":
/*!**************************************************************!*\
  !*** ./src/app/pages/logo-library/logo-library.component.ts ***!
  \**************************************************************/
/*! exports provided: LogoLibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoLibraryComponent", function() { return LogoLibraryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/page-header/page-header.component */ "tGzp");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tab/tab.component */ "66o4");
/* harmony import */ var _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/code-box/code-box.component */ "vGpf");
/* harmony import */ var _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/code-container/code-container.component */ "t1gI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["grid"];
const _c1 = ["iconCode"];
function LogoLibraryComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoLibraryComponent_div_13_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.copyIcon($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Copied!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dsmLogo ", icon_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r2);
} }
class LogoLibraryComponent {
    constructor() {
        this.icons = [
            'adidas',
            'alain_mikli',
            'armani_exchange',
            'autoflex',
            'balenciage',
            'blumarine',
            'burberry',
            'calvin_klein_ck',
            'calvin_klein_cosmetics',
            'calvin_klein',
            'celine',
            'coach',
            'converse',
            'diva',
            'dkny',
            'dsquared2',
            'emporio_armani',
            'ermenegildo_zenga',
            'flexon',
            'fossil',
            'gant',
            'giorgio_armani',
            'givenchy',
            'gucci',
            'guess',
            'hugo_boss',
            'jimmy_choo',
            'kate_spade',
            'lacoste',
            'lanvim',
            'marc_jacobs',
            'michael_kors',
            'miu_miu',
            'mont_blanc',
            'nike',
            'oakley',
            'oneill',
            'persol',
            'pierre_cardin',
            'polo_ralph_lauren',
            'prada',
            'puma',
            'ray_ban',
            'saint_laurent',
            'stella_mccartney',
            'super_dry',
            'swarovski',
            'tom_ford',
            'tory_burch',
            'versach',
            'viktor_and_rolf',
            'vogue',
            'revel_tune',
            'amelia_e',
            'gamespex',
            'gamespex2',
            'muse_symbol',
            'muse_x_hilary_duff',
            'muse',
            'olos',
            'ottoto',
            'revel',
            'seaclean',
            'yoji',
        ];
        this.logoEl = `<div class="dsmLogo adidas"></div>`;
    }
    ngAfterViewInit() {
        this.addBlanks();
        window.addEventListener('resize', (event) => {
            this.addBlanks();
        });
        loadElements();
    }
    copyIcon(e) {
        let el = e.target.closest('.iconContainer');
        el.querySelector('.copiedBox').style.bottom = 0;
        setTimeout(() => {
            el.querySelector('.copiedBox').removeAttribute('style');
        }, 800);
        this.logoEl = `<div class="${e.target.closest('.iconContainer').querySelector('.dsmLogo').classList
            .value}"></div>`;
    }
    addBlanks() {
        this.grid.nativeElement
            .querySelectorAll('.iconContainer.disabled')
            .forEach((a) => a.remove());
        var gap = 0;
        var minW = window.innerWidth > 768 ? 164 : 120;
        var Wc = this.grid.nativeElement.offsetWidth;
        var N = Math.floor((Wc + gap) / (minW + gap));
        let numberOfIcons = Number.isInteger(this.grid.nativeElement.querySelectorAll('.iconContainer').length / N);
        let emptyCell = document.createElement('div');
        emptyCell.classList.add('iconContainer');
        let count = 0;
        while (numberOfIcons == false && count != 10) {
            count++;
            let el = this.grid.nativeElement
                .querySelector('.iconContainer')
                .cloneNode();
            el.classList.add('disabled');
            this.grid.nativeElement.appendChild(el);
            numberOfIcons = Number.isInteger(this.grid.nativeElement.querySelectorAll('.iconContainer').length / N);
        }
    }
    ngOnInit() { }
}
LogoLibraryComponent.ɵfac = function LogoLibraryComponent_Factory(t) { return new (t || LogoLibraryComponent)(); };
LogoLibraryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoLibraryComponent, selectors: [["logo-library"]], viewQuery: function LogoLibraryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.iconCode = _t.first);
    } }, decls: 14, vars: 3, consts: [["title", "Logo Library"], [1, "componentMaxWidth"], [3, "inline"], [3, "icon"], [1, "smallTitle"], [1, "iconGrid"], ["grid", ""], ["class", "iconContainer", 3, "click", 4, "ngFor", "ngForOf"], [1, "iconContainer", 3, "click"], [1, "iconClass"], [1, "copiedBox"]], template: function LogoLibraryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All logos are preceded with the class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".dsmLogo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " and the related logo code. logos can be coloured, resized and have any effects applied to it that a normal SVG would have. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "code-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Logo Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LogoLibraryComponent_div_13_Template, 6, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.logoEl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.icons);
    } }, directives: [_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__["TabComponent"], _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__["CodeBoxComponent"], _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__["CodeContainerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".iconGrid[_ngcontent-%COMP%] {\n  margin-top: 31px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(164px, 1fr));\n  border-left: 1.5px solid #F1F1F1;\n  border-bottom: 1.5px solid #F1F1F1;\n}\n@media (max-width: 768px) {\n  .iconGrid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  }\n}\n.copiedBox[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -100px;\n  background-color: #00B16A;\n  padding: 5px 10px;\n  width: 100%;\n  color: white;\n  text-align: center;\n  transition: 0.2s bottom;\n}\n.iconContainer[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  background: white;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  padding: 55px 44px;\n  border: 1.5px solid #F1F1F1;\n  border-left: none;\n  border-bottom: 0;\n  transition: 0.3s all;\n}\n@media (max-width: 768px) {\n  .iconContainer[_ngcontent-%COMP%] {\n    padding: 0 20px;\n    min-height: 120px;\n  }\n}\n.iconContainer[_ngcontent-%COMP%]:not(.disabled) {\n  cursor: pointer;\n}\n.iconContainer[_ngcontent-%COMP%]:hover:not(.disabled) {\n  background-color: #F8F8F8;\n}\n.iconContainer[_ngcontent-%COMP%]   .iconClass[_ngcontent-%COMP%] {\n  margin-top: 9px;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ28tbGlicmFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtBQUNGO0FBQ0U7RUFQRjtJQVFJLDJEQUFBO0VBRUY7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUNGO0FBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUNGO0FBR0U7RUFoQkY7SUFpQkksZUFBQTtJQUNBLGlCQUFBO0VBQUY7QUFDRjtBQUVFO0VBQ0UsZUFBQTtBQUFKO0FBR0U7RUFDRSx5QkFBQTtBQURKO0FBSUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFGSiIsImZpbGUiOiJsb2dvLWxpYnJhcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbkdyaWQge1xuICBtYXJnaW4tdG9wOiAzMXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE2NHB4LCAxZnIpKTtcbiAgYm9yZGVyLWxlZnQ6IDEuNXB4IHNvbGlkICNGMUYxRjE7XG4gIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkICNGMUYxRjE7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMjBweCwgMWZyKSk7XG4gIH1cblxufVxuXG4uY29waWVkQm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjE2QTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycyBib3R0b207XG59XG5cbi5pY29uQ29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDU1cHggNDRweDtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjRjFGMUYxO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG5cblxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgfVxuXG4gICY6bm90KC5kaXNhYmxlZCkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICY6aG92ZXI6bm90KC5kaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG4gIH1cblxuICAuaWNvbkNsYXNzIHtcbiAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIH1cbn1cbiJdfQ== */"] });
function loadElements() {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ "Eb9P":
/*!**************************************************************!*\
  !*** ./src/app/pages/components/forms/dropdown.component.ts ***!
  \**************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/page-header/page-header.component */ "tGzp");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/tab/tab.component */ "66o4");
/* harmony import */ var _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/code-box/code-box.component */ "vGpf");
/* harmony import */ var _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/code-container/code-container.component */ "t1gI");






class DropdownComponent {
    constructor() { }
    ngOnInit() { }
}
DropdownComponent.ɵfac = function DropdownComponent_Factory(t) { return new (t || DropdownComponent)(); };
DropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropdownComponent, selectors: [["dropdown"]], decls: 74, vars: 12, consts: [["title", "Dropdown", "breadcrumb", "Components / Forms / ", "subtitle", "Used to display multiple elements to choose from."], ["tabTitle", "Usage"], [1, "componentMaxWidth"], [3, "inline"], ["action", "", 1, "dsmForm"], ["data-placeholder", "Placeholder", 1, "selectContainer"], [1, "smallTitle"], ["language", "js"], ["data-placeholder", "Placeholder", 1, "selectContainer", "error"], [1, "error"], ["data-disabled", "true", "data-placeholder", "Placeholder", 1, "selectContainer"]], template: function DropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " To use this element, add a div element with the class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".selectContainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " inside a form with the class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ".dsmForm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " . Inside that element insert a list using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Item 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Event Hooks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " If you require, there is an event that you can listen to on the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ".selectedItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " event which will return the value of the item selected. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code-box", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " document.querySelector('.selectContainer .selectedItem').addEventListener('select', ((res)=> {})) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Error Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " To add error styling, add the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, ".error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " class to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, ".selectContainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " element. If you would like to add a custom error message, you can insert a span with the class of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, ".error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " immediately after the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " closing tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Item 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Error message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Disabled Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " To add disabled styling, add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "data-disabled=true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " class to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, ".selectContainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Item 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    } }, directives: [_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__["TabComponent"], _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__["CodeBoxComponent"], _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__["CodeContainerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "EkNo":
/*!***************************************************!*\
  !*** ./src/app/components/tabs/tabs.component.ts ***!
  \***************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { active: a0 }; };
function TabsComponent_ul_1_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "", ctx_r1.urlPrefix, "", tab_r2.tabTitle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, tab_r2.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r2.tabTitle, " ");
} }
function TabsComponent_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabsComponent_ul_1_li_1_Template, 2, 6, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tabs);
} }
const _c1 = ["*"];
class TabsComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.tabs = [];
    }
    addTab(tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }
    selectTab(tab) {
        this.tabs.forEach((tab) => {
            tab.active = false;
        });
        tab.active = true;
    }
    ngOnInit() {
        if (!this.router.url.trim().includes('forms')) {
            if (this.router.url.trim().split('/').length > 3) {
                this.urlPrefix = '../';
            }
            else {
                this.urlPrefix = './';
            }
        }
        else {
            if (this.router.url.trim().split('/').length == 4) {
                this.urlPrefix = './';
            }
            else {
                this.urlPrefix = '../';
            }
        }
        this.route.params.subscribe((e) => {
            this.currentTab = e.id;
            let currentTab = this.tabs.filter((q) => q.tabTitle == e.id);
            if (currentTab.length > 0) {
                this.selectTab(currentTab[0]);
            }
        });
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["tabs"]], ngContentSelectors: _c1, decls: 3, vars: 1, consts: [[1, "tabContainer"], ["class", "tabTop", 4, "ngIf"], [1, "tabTop"], [3, "routerLink", "ngClass", 4, "ngFor", "ngForOf"], [3, "routerLink", "ngClass"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabsComponent_ul_1_Template, 2, 1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabs.length > 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".tabContainer[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 1px 1px rgba(58, 72, 80, 0.07), 0px 4px 12px rgba(58, 72, 80, 0.07), 0px 1px 4px rgba(58, 72, 80, 0.07);\n  border-radius: 12px;\n  overflow: auto;\n  position: relative;\n}\n@media (max-width: 768px) {\n  .tabContainer[_ngcontent-%COMP%] {\n    margin: 0 -20px;\n    border-radius: 0;\n  }\n}\n.tabTop[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  border-bottom: #F1F1F1 2px solid;\n  padding: 0;\n  position: sticky;\n  z-index: 10;\n  top: 0;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .tabTop[_ngcontent-%COMP%] {\n    overflow-y: auto;\n  }\n}\n.tabTop[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n  background: transparent;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.tabTop[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 20px 40px;\n  font-weight: 300;\n  cursor: pointer;\n  font-size: 14px;\n  margin-bottom: -2px;\n  line-height: 16px;\n  border-bottom: 2px solid transparent;\n  transition: 0.2s border, 0.2s background-color;\n  margin-top: 2px;\n  margin-left: 2px;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .tabTop[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    overflow: visible;\n    margin-bottom: 0;\n  }\n}\n.tabTop[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\n  border-radius: 10px 0 0 0;\n}\n.tabTop[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #f7f8f9;\n  border-bottom: 2px solid #CBCAD1;\n}\n.tabTop[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #3A4850;\n  border-bottom: 2px solid #2196F3;\n}\n.tabTop[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid #2196F3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RhYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHVIQUFBO0VBR0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUdFO0VBVEY7SUFVSSxlQUFBO0lBQ0EsZ0JBQUE7RUFBRjtBQUNGO0FBSUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtBQURGO0FBR0U7RUFWRjtJQVdJLGdCQUFBO0VBQUY7QUFDRjtBQUVFO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUFBSjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFPQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVJKO0FBSEk7RUFQRjtJQVFJLGlCQUFBO0lBQ0EsZ0JBQUE7RUFNSjtBQUNGO0FBSUk7RUFDRSx5QkFBQTtBQUZOO0FBTUk7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0FBSk47QUFRRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBTko7QUFRSTtFQUNFLGdDQUFBO0FBTk4iLCJmaWxlIjoidGFicy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJDb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDFweCByZ2JhKDU4LCA3MiwgODAsIDAuMDcpLFxuICAgIDBweCA0cHggMTJweCByZ2JhKDU4LCA3MiwgODAsIDAuMDcpLFxuICAgIDBweCAxcHggNHB4IHJnYmEoNTgsIDcyLCA4MCwgMC4wNyk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgbWFyZ2luOiAwIC0yMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbn1cblxuXG4udGFiVG9wIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLWJvdHRvbTogI0YxRjFGMSAycHggc29saWQ7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHotaW5kZXg6IDEwO1xuICB0b3A6IDA7XG4gIG1hcmdpbjogMDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICB9XG5cbiAgbGkge1xuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTJweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGJvcmRlcixcbiAgICAwLjJzIGJhY2tncm91bmQtY29sb3I7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDA7XG4gICAgfVxuXG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y4Zjk7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0NCQ0FEMTtcbiAgICB9XG4gIH1cblxuICAuYWN0aXZlIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjM0E0ODUwO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjE5NkYzO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzIxOTZGMztcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "FZpC":
/*!**********************************************************!*\
  !*** ./src/app/pages/components/trustpilot.component.ts ***!
  \**********************************************************/
/*! exports provided: TrustpilotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrustpilotComponent", function() { return TrustpilotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/page-header/page-header.component */ "tGzp");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tab/tab.component */ "66o4");
/* harmony import */ var _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/code-box/code-box.component */ "vGpf");
/* harmony import */ var _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/code-container/code-container.component */ "t1gI");






class TrustpilotComponent {
    constructor() { }
    ngOnInit() { }
}
TrustpilotComponent.ɵfac = function TrustpilotComponent_Factory(t) { return new (t || TrustpilotComponent)(); };
TrustpilotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrustpilotComponent, selectors: [["trustpilot"]], decls: 122, vars: 13, consts: [["title", "Trustpilot", "breadcrumb", "Components / "], ["tabTitle", "Usage"], [1, "componentMaxWidth"], [3, "inline"], ["data-slides", "2", "data-max-slides", "4", 1, "dsmTrustpilot"], [1, "smallTitle"], [1, "gridTable"], [1, "previewTitle"], ["id", "description", 1, "previewTitle"], [1, "propertyType"], [1, "propertyDefault"], [1, "propertyDescription"], ["tabTitle", "Trustpilot Header"], [1, "dsmTrustpilot-Header"]], template: function TrustpilotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " To apply this component, create a div with the class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".dsmTrustpilot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " . In order to use this element it is required that you have the swiper script initialised on the page. To add it copy and paste this script. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " <script src=\"https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.4.14/swiper-bundle.min.js\" integrity=\"sha512-APQL/QFRDoEBh9V5ztds1P6qEICllWq9Dpcv+pVu5DE/g5MZ1GE7+pj9tHhN1SFBv4J7B2j5mfw0cOUitz+aGg==\" crossorigin=\"anonymous\" ></script> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " There are a number of different properties you can apply to the trustpilot element which are listed below ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " There are a number of properties that can be applied to the trustpilot to change its behaviour and data displayed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " data-loop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " This is used to set the whether the swiper will loop through all the reviews or will stop at the end. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " data-stars ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\"5\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " This is used to set what ratings will show. For more then one rating use commas to separate values. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " data-touch-move ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " This is used to set if you can move the swiper using touch events. This will always be on for mobile devices. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " data-slides ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " This is used to set how many slides per page are shown. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " data-space-between ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " This is used to set the space between each slide. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " data-min-chars ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "75");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " This is used to set the minimum characters allowed in a review. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " data-tags ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " This is used to filter the results by tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " data-slides-per-group ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " This is used to decide how many slides to scroll each time the arrow is pressed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " data-speed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "300");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " This is used to set the speed of the transition ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " data-max-slides ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " This is used to set the maximum amount of slides that will be displayed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " data-mobile-max-slides ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " This is used to set the maximum amount of slides that will be displayed on mobile devices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "tab", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " You can alternatively add the trustpilot header element which shows how many people have reviewed the site along with an average score. To insert it create a element with the class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, ".dsmTrustpilot-Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    } }, directives: [_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__["TabComponent"], _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__["CodeBoxComponent"], _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__["CodeContainerComponent"]], styles: [".gridTable[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, auto);\n  margin-top: 37px;\n}\n.gridTable[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  border-bottom: 1.5px solid #F1F1F1;\n  padding: 10px 0;\n  padding-right: 35px;\n}\n.gridTable[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(n+5) {\n  padding: 25px 0;\n  padding-right: 35px;\n}\n@media (max-width: 768px) {\n  .gridTable[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, auto);\n  }\n  .gridTable[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    padding-right: 25px;\n  }\n  .gridTable[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(n+4) {\n    padding: 0;\n    border-bottom: none;\n  }\n  .gridTable[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(4n) {\n    padding-bottom: 10px;\n    border-bottom: 1.5px solid #F1F1F1;\n  }\n  .gridTable[_ngcontent-%COMP%]   .previewTitle[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n  .gridTable[_ngcontent-%COMP%]   #description[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .gridTable[_ngcontent-%COMP%]   .propertyDescription[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 4;\n    margin-top: 10px;\n    margin-bottom: 15px;\n  }\n  .gridTable[_ngcontent-%COMP%]   .propertyDescription[_ngcontent-%COMP%]:last-of-type {\n    margin-bottom: 0;\n  }\n}\n.propertyDefault[_ngcontent-%COMP%] {\n  color: #c95151;\n}\n.propertyType[_ngcontent-%COMP%] {\n  color: #6cb09d;\n}\n.previewTitle[_ngcontent-%COMP%] {\n  color: #2d2d2d;\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: 0;\n  line-height: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RydXN0cGlsb3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFRRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQU5KO0FBRkk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFJTjtBQUtFO0VBbEJGO0lBbUJJLHNDQUFBO0VBRkY7RUFJRTtJQVlFLGVBQUE7SUFDQSxtQkFBQTtFQWJKO0VBRUk7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUFBTjtFQUdJO0lBQ0Usb0JBQUE7SUFDQSxrQ0FBQTtFQUROO0VBUUU7SUFDRSxtQkFBQTtFQU5KO0VBU0U7SUFDRSxhQUFBO0VBUEo7RUFVRTtJQUNFLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VBUko7RUFVSTtJQUNFLGdCQUFBO0VBUk47QUFDRjtBQWFBO0VBQ0UsY0FBQTtBQVZGO0FBYUE7RUFDRSxjQUFBO0FBVkY7QUFhQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBVkYiLCJmaWxlIjoidHJ1c3RwaWxvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkVGFibGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBhdXRvKTtcbiAgbWFyZ2luLXRvcDogMzdweDtcblxuICA+KiB7XG5cbiAgICAmOm50aC1jaGlsZChuKzUpIHtcbiAgICAgIHBhZGRpbmc6IDI1cHggMDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG5cbiAgICB9XG5cbiAgICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjRjFGMUYxO1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XG5cbiAgICA+KiB7XG5cbiAgICAgICY6bnRoLWNoaWxkKG4rNCkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgfVxuXG4gICAgICAmOm50aC1jaGlsZCg0bikge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgI0YxRjFGMTtcbiAgICAgIH1cblxuICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICB9XG5cbiAgICAucHJldmlld1RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuXG4gICAgI2Rlc2NyaXB0aW9uIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnByb3BlcnR5RGVzY3JpcHRpb24ge1xuICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ucHJvcGVydHlEZWZhdWx0IHtcbiAgY29sb3I6ICNjOTUxNTE7XG59XG5cbi5wcm9wZXJ0eVR5cGUge1xuICBjb2xvcjogIzZjYjA5ZDtcbn1cblxuLnByZXZpZXdUaXRsZSB7XG4gIGNvbG9yOiAjMmQyZDJkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMTlweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "QStO":
/*!*******************************************************!*\
  !*** ./src/app/pages/components/shadows.component.ts ***!
  \*******************************************************/
/*! exports provided: ShadowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadowsComponent", function() { return ShadowsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/page-header/page-header.component */ "tGzp");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tab/tab.component */ "66o4");
/* harmony import */ var _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/code-box/code-box.component */ "vGpf");
/* harmony import */ var _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/code-container/code-container.component */ "t1gI");






class ShadowsComponent {
    constructor() { }
    ngOnInit() { }
}
ShadowsComponent.ɵfac = function ShadowsComponent_Factory(t) { return new (t || ShadowsComponent)(); };
ShadowsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShadowsComponent, selectors: [["shadows"]], decls: 21, vars: 1, consts: [["title", "Shadows", "breadcrumb", "Components / "], ["tabTitle", "Usage"], [1, "componentMaxWidth"], [3, "inline"], [1, "dsmShadow"], [1, "smallTitle"], [1, "dsmShadow", "shadow-2"], [1, "dsmShadow", "shadow-3"], [1, "dsmShadow", "shadow-4"], [1, "dsmShadow", "shadow-5"], [1, "dsmShadow", "shadow-6"]], template: function ShadowsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " To apply this component, add the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".dsmShadow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " class to a div element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Shadow Weights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " There are a few different weights available to choose from the normal shadow until shadow-6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    } }, directives: [_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__["TabComponent"], _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__["CodeBoxComponent"], _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__["CodeContainerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "RSQq":
/*!**********************************************************!*\
  !*** ./src/app/pages/components/cta-button.component.ts ***!
  \**********************************************************/
/*! exports provided: CtaButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtaButtonComponent", function() { return CtaButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/page-header/page-header.component */ "tGzp");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tab/tab.component */ "66o4");
/* harmony import */ var _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/code-box/code-box.component */ "vGpf");
/* harmony import */ var _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/code-container/code-container.component */ "t1gI");






class CtaButtonComponent {
    constructor() { }
    ngOnInit() { }
}
CtaButtonComponent.ɵfac = function CtaButtonComponent_Factory(t) { return new (t || CtaButtonComponent)(); };
CtaButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CtaButtonComponent, selectors: [["cta-button"]], decls: 47, vars: 1, consts: [["title", "CTA Button", "breadcrumb", "Components / ", "subtitle", "The CTA buttons are the most important buttons on the site and are designed for the central reference on the\n  page."], ["tabTitle", "Usage"], [1, "componentMaxWidth"], [3, "inline"], [1, "dsmButton"], ["disabled", "", 1, "dsmButton"], [1, "dsmButton", "ghost"], ["tabTitle", "Colours"], [1, "dsmButton", "secondary"], ["tabTitle", "Sizes"], [1, "dsmButton", "extralarge"], [1, "dsmButton", "large"], [1, "dsmButton", "regular"], [1, "dsmButton", "medium"], [1, "dsmButton", "small"]], template: function CtaButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " To apply this component, add the .dsmButton class to a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " element. This will activate the default styling and allow you to use the button transitions and effects. If you use a different element tag type instead of button then the click animation will not be available. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CTA Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " The disabled version of the button is activated by adding the disabled attribute to the button element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Disabled Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " The final style available for buttons is the ghost effect. This changes the button to have an outline instead of a fill and on hover for it to become filled. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ghost Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " There are two different colours to choose from, either the default primary styling or the secondary styling. To add the secondary styling add .secondary to the button element classlist. For the default styling there is no need to add an extra class. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " There are several size modifiers available which are set by adding the class to the element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Extra Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Regular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    } }, directives: [_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__["TabComponent"], _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__["CodeBoxComponent"], _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__["CodeContainerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "mvyS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "pageLayout"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".pageLayout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  margin-left: 280px;\n}\n\nmain[_ngcontent-%COMP%] {\n  padding: 37px 64px;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 176.19%;\n  max-width: 1180px;\n  width: 100%;\n  min-height: 100vh;\n  overflow: auto;\n  margin: 0 auto;\n}\n\nnavigation[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  z-index: 11;\n  top: 0;\n}\n\n@media (max-width: 1000px) {\n  main[_ngcontent-%COMP%] {\n    min-height: calc(100vh - 70px);\n    margin-top: 70px;\n    padding: 30px 30px;\n  }\n\n  navigation[_ngcontent-%COMP%] {\n    position: fixed;\n    width: 100%;\n    z-index: 11;\n  }\n\n  .pageLayout[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  .pageLayout[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n\n@media (max-width: 768px) {\n  main[_ngcontent-%COMP%] {\n    min-height: calc(100vh - 70px);\n    margin-top: 70px;\n    padding: 30px 20px;\n    padding-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0FBREY7O0FBTUE7RUFDRTtJQUNFLDhCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQUhGOztFQU1BO0lBQ0UsZUFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0VBSEY7O0VBTUE7SUFDRSxjQUFBO0VBSEY7O0VBTUE7SUFDRSxjQUFBO0VBSEY7QUFDRjs7QUFNQTtFQUNFO0lBQ0UsOEJBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUFKRjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlTGF5b3V0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIG1hcmdpbi1sZWZ0OiAyODBweDtcbn1cblxuXG5cbm1haW4ge1xuICBwYWRkaW5nOiAzN3B4IDY0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTc2LjE5JTtcbiAgbWF4LXdpZHRoOiAxMTgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5uYXZpZ2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMTtcbiAgdG9wOiAwO1xufVxuXG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICBtYWluIHtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XG4gIH1cblxuICBuYXZpZ2F0aW9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTE7XG4gIH1cblxuICAucGFnZUxheW91dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAucGFnZUxheW91dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIG1haW4ge1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/code-container/code-container.component */ "t1gI");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "lCy9");
/* harmony import */ var _components_mobile_background_mobile_background_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mobile-background/mobile-background.component */ "cNnG");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "mvyS");
/* harmony import */ var _pages_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/introduction/introduction.component */ "7Ol6");
/* harmony import */ var _pages_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/getting-started/getting-started.component */ "8Wgu");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page-header/page-header.component */ "tGzp");
/* harmony import */ var _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/code-box/code-box.component */ "vGpf");
/* harmony import */ var _pages_components_cta_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/components/cta-button.component */ "RSQq");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tab/tab.component */ "66o4");
/* harmony import */ var _pages_components_round_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/components/round-button.component */ "aUpf");
/* harmony import */ var _pages_components_toggles_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/components/toggles.component */ "vTgN");
/* harmony import */ var _pages_components_trustpilot_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/components/trustpilot.component */ "FZpC");
/* harmony import */ var _pages_components_forms_dropdown_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/components/forms/dropdown.component */ "Eb9P");
/* harmony import */ var _pages_components_forms_text_area_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/components/forms/text-area.component */ "a6mq");
/* harmony import */ var _pages_components_forms_text_field_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/components/forms/text-field.component */ "5DdF");
/* harmony import */ var _pages_components_forms_radio_button_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/components/forms/radio-button.component */ "yUPx");
/* harmony import */ var _pages_components_forms_checkbox_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/components/forms/checkbox.component */ "vsHK");
/* harmony import */ var _pages_components_forms_ticked_checkbox_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/components/forms/ticked-checkbox.component */ "uRwK");
/* harmony import */ var _pages_components_tooltips_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/components/tooltips.component */ "vbRC");
/* harmony import */ var _pages_components_badges_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/components/badges.component */ "gP1A");
/* harmony import */ var _pages_components_shadows_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/components/shadows.component */ "QStO");
/* harmony import */ var _pages_components_accordian_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/components/accordian.component */ "qxRy");
/* harmony import */ var _pages_logo_library_logo_library_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/logo-library/logo-library.component */ "EN7T");
/* harmony import */ var _pages_icon_library_icon_library_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/icon-library/icon-library.component */ "x0ip");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ "fXoL");






























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({ providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_3__["CodeContainerComponent"],
        _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__["SearchBarComponent"],
        _components_mobile_background_mobile_background_component__WEBPACK_IMPORTED_MODULE_5__["MobileBackgroundComponent"],
        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
        _pages_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_7__["IntroductionComponent"],
        _pages_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_8__["GettingStartedComponent"],
        _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_9__["PageHeaderComponent"],
        _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_10__["CodeBoxComponent"],
        _pages_components_cta_button_component__WEBPACK_IMPORTED_MODULE_11__["CtaButtonComponent"],
        _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_12__["TabsComponent"],
        _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_13__["TabComponent"],
        _pages_components_round_button_component__WEBPACK_IMPORTED_MODULE_14__["RoundButtonComponent"],
        _pages_components_toggles_component__WEBPACK_IMPORTED_MODULE_15__["TogglesComponent"],
        _pages_components_trustpilot_component__WEBPACK_IMPORTED_MODULE_16__["TrustpilotComponent"],
        _pages_components_forms_dropdown_component__WEBPACK_IMPORTED_MODULE_17__["DropdownComponent"],
        _pages_components_forms_text_area_component__WEBPACK_IMPORTED_MODULE_18__["TextAreaComponent"],
        _pages_components_forms_text_field_component__WEBPACK_IMPORTED_MODULE_19__["TextFieldComponent"],
        _pages_components_forms_radio_button_component__WEBPACK_IMPORTED_MODULE_20__["RadioButtonComponent"],
        _pages_components_forms_checkbox_component__WEBPACK_IMPORTED_MODULE_21__["CheckboxComponent"],
        _pages_components_forms_ticked_checkbox_component__WEBPACK_IMPORTED_MODULE_22__["TickedCheckboxComponent"],
        _pages_components_tooltips_component__WEBPACK_IMPORTED_MODULE_23__["TooltipsComponent"],
        _pages_components_badges_component__WEBPACK_IMPORTED_MODULE_24__["BadgesComponent"],
        _pages_components_shadows_component__WEBPACK_IMPORTED_MODULE_25__["ShadowsComponent"],
        _pages_components_accordian_component__WEBPACK_IMPORTED_MODULE_26__["AccordianComponent"],
        _pages_logo_library_logo_library_component__WEBPACK_IMPORTED_MODULE_27__["LogoLibraryComponent"],
        _pages_icon_library_icon_library_component__WEBPACK_IMPORTED_MODULE_28__["IconLibraryComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "a6mq":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/forms/text-area.component.ts ***!
  \***************************************************************/
/*! exports provided: TextAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaComponent", function() { return TextAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/page-header/page-header.component */ "tGzp");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/tab/tab.component */ "66o4");
/* harmony import */ var _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/code-box/code-box.component */ "vGpf");
/* harmony import */ var _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/code-container/code-container.component */ "t1gI");






class TextAreaComponent {
    constructor() { }
    ngOnInit() { }
}
TextAreaComponent.ɵfac = function TextAreaComponent_Factory(t) { return new (t || TextAreaComponent)(); };
TextAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextAreaComponent, selectors: [["text-area"]], decls: 44, vars: 7, consts: [["title", "Text Area", "breadcrumb", "Components / Forms / "], ["tabTitle", "Usage"], [1, "componentMaxWidth"], [3, "inline"], ["action", "", 1, "dsmForm"], ["placeholder", "Text area"], [1, "smallTitle"], ["placeholder", "Text area", 1, "error"], [1, "error"], ["placeholder", "Text area", "disabled", ""]], template: function TextAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " To use this element, add a textarea inside a form with the class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".dsmForm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Error Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " To add error styling, add the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ".error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " class to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " element. If you would like to add a custom error message, you can insert a span with the class of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ".error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " immediately after the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " closing tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "This is an error message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Disabled Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " To add disabled styling, add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " class to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    } }, directives: [_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__["TabComponent"], _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__["CodeBoxComponent"], _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__["CodeContainerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "aUpf":
/*!************************************************************!*\
  !*** ./src/app/pages/components/round-button.component.ts ***!
  \************************************************************/
/*! exports provided: RoundButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundButtonComponent", function() { return RoundButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/page-header/page-header.component */ "tGzp");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tab/tab.component */ "66o4");
/* harmony import */ var _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/code-box/code-box.component */ "vGpf");
/* harmony import */ var _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/code-container/code-container.component */ "t1gI");






class RoundButtonComponent {
    constructor() { }
    ngOnInit() { }
}
RoundButtonComponent.ɵfac = function RoundButtonComponent_Factory(t) { return new (t || RoundButtonComponent)(); };
RoundButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoundButtonComponent, selectors: [["round-button"]], decls: 55, vars: 3, consts: [["title", "Round Button", "breadcrumb", "Components / ", "subtitle", "The rounded buttons are less important than the main CTA buttons and use for making a second-level hierarchy."], ["tabTitle", "Usage"], [1, "componentMaxWidth"], [3, "inline"], [1, "dsmButton", "round"], ["disabled", "", 1, "dsmButton", "round"], [1, "dsmButton", "round", "ghost"], ["tabTitle", "Colours"], [1, "dsmButton", "round", "codGray"], [1, "dsmButton", "round", "porcelain"], [1, "dsmButton", "round", "regentGray"], [1, "dsmButton", "round", "towerGray"], [1, "dsmButton", "round", "white"], ["tabTitle", "Sizes"], [1, "dsmButton", "round", "regular"], [1, "dsmButton", "round", "medium"], [1, "dsmButton", "round", "small"]], template: function RoundButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " To apply this component, add the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".dsmButton round");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " class to a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " element. This will activate the default styling and allow you to use the button transitions and effects. If you use a different element tag type instead of button then the click animation will not be available. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "CTA Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " The disabled version of the button is activated by adding the disabled attribute to the button element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Disabled Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " The final style available for buttons is the ghost effect. This changes the button to have an outline instead of a fill and on hover for it to become filled. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ghost Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " There are a few different colour options to choose from listed below. Add one of the following classes to a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ".dsmButton round");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " button element to apply the styles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cod Gray");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Porcelain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Regent Gray");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Tower Gray");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "White");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tab", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " There are several size modifiers available which are set by adding the class to the element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Regular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    } }, directives: [_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__["TabComponent"], _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__["CodeBoxComponent"], _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__["CodeContainerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "cNnG":
/*!*****************************************************************************!*\
  !*** ./src/app/components/mobile-background/mobile-background.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MobileBackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileBackgroundComponent", function() { return MobileBackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MobileBackgroundComponent {
    constructor() { }
}
MobileBackgroundComponent.ɵfac = function MobileBackgroundComponent_Factory(t) { return new (t || MobileBackgroundComponent)(); };
MobileBackgroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileBackgroundComponent, selectors: [["mobile-background"]], decls: 1, vars: 0, consts: [[1, "overlayBackground"]], template: function MobileBackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["@media (max-width: 1000px) {\n  .overlayBackground[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    background: linear-gradient(180deg, #2F4054 0%, #2F353D 100%);\n    opacity: 0.7;\n    z-index: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vYmlsZS1iYWNrZ3JvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLDZEQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RUFDRjtBQUNGIiwiZmlsZSI6Im1vYmlsZS1iYWNrZ3JvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAub3ZlcmxheUJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyRjQwNTQgMCUsICMyRjM1M0QgMTAwJSk7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "gP1A":
/*!******************************************************!*\
  !*** ./src/app/pages/components/badges.component.ts ***!
  \******************************************************/
/*! exports provided: BadgesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgesComponent", function() { return BadgesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/page-header/page-header.component */ "tGzp");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tab/tab.component */ "66o4");
/* harmony import */ var _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/code-box/code-box.component */ "vGpf");
/* harmony import */ var _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/code-container/code-container.component */ "t1gI");






class BadgesComponent {
    constructor() { }
    ngOnInit() { }
}
BadgesComponent.ɵfac = function BadgesComponent_Factory(t) { return new (t || BadgesComponent)(); };
BadgesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BadgesComponent, selectors: [["badges"]], decls: 24, vars: 1, consts: [["title", "Badges", "breadcrumb", "Components / "], ["tabTitle", "Usage"], [1, "componentMaxWidth"], [3, "inline"], [1, "dsmBadge", "misc"], [1, "smallTitle"], [1, "dsmBadge", "sellingFast"], [1, "dsmBadge", "premium"], [1, "dsmBadge", "sales"]], template: function BadgesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " To apply this component, add the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".dsmBadge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " class to a div element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Styles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " There are a few different styles available to choose from: Premium, Selling Fast, Sales and Misc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    } }, directives: [_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__["TabComponent"], _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__["CodeBoxComponent"], _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__["CodeContainerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "lCy9":
/*!***************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = ["searchResultElement"];
const _c1 = ["searchInput"];
function SearchBarComponent_div_6__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { "noResults": a0 }; };
function SearchBarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchBarComponent_div_6__svg_svg_4_Template, 3, 0, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", "/" + result_r2.url || false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, result_r2.error));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r2.breadcrumb);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", result_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !result_r2.error);
} }
class SearchBarComponent {
    constructor(el) {
        this.el = el;
        this.menuItems = [
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
        ];
        this.searchResults = [];
        this.search = '';
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    hideResults() {
        if (window.innerWidth < 768)
            return;
        setTimeout(() => {
            this.searchResultElement.nativeElement.style.opacity = '0';
            setTimeout(() => {
                this.searchResultElement.nativeElement.style.display = 'none';
            }, 300);
        }, 300);
    }
    showResults() {
        this.searchResultElement.nativeElement.style.display = 'inline-block';
        this.searchResultElement.nativeElement.style.opacity = '1';
    }
    filterSearch(el) {
        this.value.emit(el.target.value);
        if (window.innerWidth < 1000)
            return;
        if (el == null)
            return;
        if (!el.target) {
            return;
        }
        if (el.target.value.trim().length == 0) {
            this.searchResults.length = 0;
            return;
        }
        this.searchResults = this.menuItems.filter((e) => e.name.toLowerCase().includes(el.target.value.trim().toLowerCase()));
        if (this.searchResults.length == 0) {
            this.searchResults = [{ name: 'No Results found...', error: true }];
        }
    }
    ngOnChanges(e) {
        var _a;
        if (((_a = this.search) === null || _a === void 0 ? void 0 : _a.trim().length) == 0) {
            this.searchResults.length = 0;
            return;
        }
        this.searchResults = this.menuItems.filter((e) => {
            if (!this.search)
                return false;
            return e.name.toLowerCase().includes(this.search.trim().toLowerCase());
        });
        if (this.searchResults.length == 0) {
            this.searchResults = [{ name: 'No Results found...', error: true }];
        }
    }
    closeSearch() {
        this.el.nativeElement.style.display = 'none';
    }
    resetSearch() {
        this.searchResultElement.nativeElement.style.opacity = '0';
        setTimeout(() => {
            this.search = '';
            this.searchResults.length = 0;
        }, 200);
    }
    ngOnInit() { }
    ngAfterViewInit() { }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["search-bar"]], viewQuery: function SearchBarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchResultElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlay = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    } }, inputs: { search: "search", type: "type" }, outputs: { value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 2, consts: [[1, "searchBoxContainer"], ["placeholder", "Search...", "type", "text", "name", "", "id", "", "tabindex", "-1", 1, "searchBox", 3, "value", "focusout", "focusin", "input"], ["width", "15", "height", "15", "viewBox", "0 0 15 15", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "searchIcon"], ["d", "M14.0203 13.0518L9.45527 8.48672C10.1637 7.5709 10.5469 6.45117 10.5469 5.27344C10.5469 3.86367 9.99668 2.5418 9.00176 1.54512C8.00684 0.548437 6.68145 0 5.27344 0C3.86543 0 2.54004 0.550195 1.54512 1.54512C0.548437 2.54004 0 3.86367 0 5.27344C0 6.68145 0.550195 8.00684 1.54512 9.00176C2.54004 9.99844 3.86367 10.5469 5.27344 10.5469C6.45117 10.5469 7.56914 10.1637 8.48496 9.45703L13.05 14.0203C13.0634 14.0337 13.0793 14.0443 13.0968 14.0516C13.1143 14.0588 13.133 14.0626 13.152 14.0626C13.1709 14.0626 13.1896 14.0588 13.2071 14.0516C13.2246 14.0443 13.2405 14.0337 13.2539 14.0203L14.0203 13.2557C14.0337 13.2423 14.0443 13.2264 14.0516 13.2089C14.0588 13.1914 14.0626 13.1726 14.0626 13.1537C14.0626 13.1348 14.0588 13.116 14.0516 13.0985C14.0443 13.081 14.0337 13.0651 14.0203 13.0518ZM8.05781 8.05781C7.3125 8.80137 6.32461 9.21094 5.27344 9.21094C4.22227 9.21094 3.23438 8.80137 2.48906 8.05781C1.74551 7.3125 1.33594 6.32461 1.33594 5.27344C1.33594 4.22227 1.74551 3.23262 2.48906 2.48906C3.23438 1.74551 4.22227 1.33594 5.27344 1.33594C6.32461 1.33594 7.31426 1.74375 8.05781 2.48906C8.80137 3.23438 9.21094 4.22227 9.21094 5.27344C9.21094 6.32461 8.80137 7.31426 8.05781 8.05781Z", "fill", "#8D8989"], [1, "searchResults"], ["searchResultElement", ""], ["class", "searchItem", 3, "routerLink", "ngClass", 4, "ngFor", "ngForOf"], [1, "searchItem", 3, "routerLink", "ngClass"], [1, "searchBreadcrumb"], ["class", "searchArrow", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "searchArrow"], ["d", "M4 12H20", "stroke", "#ADADAD", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M13 5L20 12L13 19", "stroke", "#ADADAD", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function SearchBarComponent_Template_input_focusout_1_listener() { return ctx.hideResults(); })("focusin", function SearchBarComponent_Template_input_focusin_1_listener() { return ctx.showResults(); })("input", function SearchBarComponent_Template_input_input_1_listener($event) { return ctx.filterSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchBarComponent_div_6_Template, 5, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchResults);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".searchBox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 11px 0px 11px 20px;\n  background: #FFFFFF;\n  border: 1px solid rgba(188, 188, 188, 0.25);\n  box-sizing: border-box;\n  outline: none;\n  border-radius: 5px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  transition: 0.3s all;\n  font-size: 14px;\n  line-height: 16px;\n  height: 44px;\n  padding-right: 50px;\n  width: 100%;\n}\n.searchBox[_ngcontent-%COMP%]:focus {\n  border: 1px solid rgba(188, 188, 188, 0.4);\n  border-radius: 5px 5px 0 0;\n}\n@media (max-width: 1000px) {\n  .searchBox[_ngcontent-%COMP%]:focus {\n    border-radius: 0;\n  }\n}\n.searchBox[_ngcontent-%COMP%]:hover {\n  border: 1px solid rgba(188, 188, 188, 0.4);\n}\n.searchBox[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: #7D7878;\n}\n@media (max-width: 1000px) {\n  .searchBox[_ngcontent-%COMP%] {\n    height: 69px;\n    font-size: 18px;\n    border-radius: 0;\n    padding: 0 25px;\n    padding-right: 70px;\n    box-shadow: 2px 1px 5px 2px rgba(0, 0, 0, 0.3);\n  }\n}\n.noResults[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.searchResults[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 44px;\n  background: #FFFFFF;\n  box-sizing: border-box;\n  border-radius: 0px 0px 5px 5px;\n  overflow: auto;\n  font-family: Roboto;\n  font-style: normal;\n  max-height: 316px;\n  transition: 0.3s all;\n  font-weight: normal;\n  font-size: 16px;\n  width: 100%;\n  line-height: 21px;\n  z-index: 14;\n  color: #000000;\n  scrollbar-color: white grey;\n}\n.searchResults[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background-color: grey;\n}\n.searchResults[_ngcontent-%COMP%]::-webkit-scrollbar-track, .searchResults[_ngcontent-%COMP%]::-webkit-scrollbar-track-piece {\n  background: transparent;\n}\n.searchResults[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.4em;\n  border-bottom: 1px solid rgba(188, 188, 188, 0.4);\n  border-radius: 0px 0px 5px 5px;\n  box-shadow: transparent;\n}\n@media (max-width: 1000px) {\n  .searchResults[_ngcontent-%COMP%] {\n    top: 69px;\n    display: none;\n    font-size: 18px;\n    background: rgba(255, 255, 255, 0.92);\n    border-radius: 0px 0px 4px 4px;\n  }\n}\n.searchArrow[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1000px) {\n  .searchArrow[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    right: 25px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n}\n.searchBreadcrumb[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 12px;\n}\n@media (max-width: 1000px) {\n  .searchBreadcrumb[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n.searchItem[_ngcontent-%COMP%]:first-child {\n  border-top: none;\n}\n.searchItem[_ngcontent-%COMP%] {\n  border: 1px solid rgba(188, 188, 188, 0.4);\n  border-bottom: none;\n  padding: 18px 20px;\n  position: relative;\n  transition: 0.2s all;\n  cursor: pointer;\n}\n.searchItem[_ngcontent-%COMP%]:hover {\n  background-color: rgba(188, 188, 188, 0.4);\n}\n.searchItem[_ngcontent-%COMP%]:last-child {\n  border-bottom: 1px solid rgba(188, 188, 188, 0.4);\n}\n.searchBoxContainer[_ngcontent-%COMP%] {\n  position: relative;\n  width: 269px;\n}\n@media (max-width: 1000px) {\n  .searchBoxContainer[_ngcontent-%COMP%] {\n    width: 100%;\n    position: fixed;\n    top: 0;\n    z-index: 2;\n    left: 0;\n  }\n}\n.searchIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 15px;\n}\n@media (max-width: 1000px) {\n  .searchIcon[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 21px;\n    right: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlYXJjaC1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFDRTtFQUNFLDBDQUFBO0VBQ0EsMEJBQUE7QUFDSjtBQUNJO0VBSkY7SUFLSSxnQkFBQTtFQUVKO0FBQ0Y7QUFDRTtFQUNFLDBDQUFBO0FBQ0o7QUFFRTtFQUNFLGNBQUE7QUFBSjtBQUdFO0VBckNGO0lBc0NJLFlBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSw4Q0FBQTtFQUFGO0FBQ0Y7QUFJQTtFQUNFLG9CQUFBO0FBREY7QUFJQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQURGO0FBR0U7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBREo7QUFLRTtFQUVFLHVCQUFBO0FBSko7QUFPRTtFQUNFLFlBQUE7RUFDQSxpREFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUFMSjtBQVNFO0VBdkNGO0lBd0NJLFNBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtJQUNBLHFDQUFBO0lBQ0EsOEJBQUE7RUFORjtBQUNGO0FBU0E7RUFDRSxhQUFBO0FBTkY7QUFRRTtFQUhGO0lBSUksY0FBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtFQUxGO0FBQ0Y7QUFRQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFMRjtBQU9FO0VBTkY7SUFPSSxlQUFBO0VBSkY7QUFDRjtBQU9BO0VBQ0UsZ0JBQUE7QUFKRjtBQU9BO0VBQ0UsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFKRjtBQU1FO0VBQ0UsMENBQUE7QUFKSjtBQU9FO0VBQ0UsaURBQUE7QUFMSjtBQVNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBTkY7QUFRRTtFQUpGO0lBS0ksV0FBQTtJQUNBLGVBQUE7SUFDQSxNQUFBO0lBQ0EsVUFBQTtJQUNBLE9BQUE7RUFMRjtBQUNGO0FBUUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFMRjtBQU9FO0VBTkY7SUFPSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUFKRjtBQUNGIiwiZmlsZSI6InNlYXJjaC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoQm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTFweCAwcHggMTFweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE4OCwgMTg4LCAxODgsIDAuMjUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGhlaWdodDogNDRweDtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxODgsIDE4OCwgMTg4LCAwLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE4OCwgMTg4LCAxODgsIDAuNCk7XG4gIH1cblxuICA6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzdENzg3ODtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICBoZWlnaHQ6IDY5cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcGFkZGluZzogMCAyNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDcwcHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDFweCA1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgfVxufVxuXG5cbi5ub1Jlc3VsdHMge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnNlYXJjaFJlc3VsdHMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIG1heC1oZWlnaHQ6IDMxNnB4O1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIHotaW5kZXg6IDE0O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgc2Nyb2xsYmFyLWNvbG9yOiB3aGl0ZSBncmV5O1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgfVxuXG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2ssXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudFxuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAwLjRlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxODgsIDE4OCwgMTg4LCAwLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICBib3gtc2hhZG93OiB0cmFuc3BhcmVudDtcblxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIHRvcDogNjlweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNHB4IDRweDtcbiAgfVxufVxuXG4uc2VhcmNoQXJyb3cge1xuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDI1cHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG59XG5cbi5zZWFyY2hCcmVhZGNydW1iIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEycHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuXG4uc2VhcmNoSXRlbTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi5zZWFyY2hJdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxODgsIDE4OCwgMTg4LCAwLjQpO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBwYWRkaW5nOiAxOHB4IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4OCwgMTg4LCAxODgsIDAuNCk7XG4gIH1cblxuICAmOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE4OCwgMTg4LCAxODgsIDAuNCk7XG4gIH1cbn1cblxuLnNlYXJjaEJveENvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI2OXB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDI7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuXG4uc2VhcmNoSWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgcmlnaHQ6IDE1cHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjFweDtcbiAgICByaWdodDogMjVweDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "mvyS":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search-bar/search-bar.component */ "lCy9");
/* harmony import */ var _mobile_background_mobile_background_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mobile-background/mobile-background.component */ "cNnG");










const _c0 = ["container"];
function NavigationComponent__svg_svg_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavigationComponent__svg_svg_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1, a2, a3) { return { "open": a0, "close": a1, "menuClose": a2, "menuOpen": a3 }; };
const _c2 = function () { return { exact: true }; };
const _c3 = function (a0, a1) { return { "closeEffect": a0, "openAnimation": a1 }; };
class NavigationComponent {
    constructor(document, router, title) {
        this.document = document;
        this.router = router;
        this.title = title;
        this.componentsActive = false;
        this.formComponentsActive = false;
        this.searchOpen = false;
        this.searchClose = false;
        this.menuOpen = false;
        this.effectTriggered = false;
        this.formEffectTriggered = false;
        this.effectFormTriggered = false;
        this.menuClose = false;
        this.defaultValue = '';
        this.menuTransition = false;
        this.baseURL = "GlassesUSA DSM";
        this.resetSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    setTitle(title) {
        if (!title)
            title = "";
        this.title.setTitle(`${this.baseURL} ${title}`);
    }
    ngOnInit() {
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]))
            .subscribe(({ url }) => {
            if (url.trim().length > 1) {
                this.setTitle(' | ' + url.trim().split('/').slice(-1)[0].replace(/-/g, ' ').replace(/\w\S*/g, function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                }));
            }
            else {
                this.setTitle();
            }
            window.scrollTo(0, 0);
            if (document.body.style.overflow == 'hidden') {
                this.document.body.style.overflow = '';
            }
            if (url.trim().split('/').length > 2 || !url.includes('components')) {
                if (!url.includes('forms') || url.trim().split('/').length != 3) {
                    this.searchOpen = false;
                    this.searchClose = true;
                    this.defaultValue = '';
                    this.menuOpen = false;
                    this.menuClose = true;
                }
            }
            if (url.includes('components')) {
                this.componentsActive = true;
                if (!this.effectTriggered) {
                    this.effectTriggered = true;
                }
                if (url.includes('forms')) {
                    this.formComponentsActive = true;
                    if (!this.formEffectTriggered) {
                        this.formEffectTriggered = true;
                    }
                }
                else {
                    this.formEffectTriggered = false;
                }
            }
            else {
                this.formEffectTriggered = false;
                this.effectTriggered = false;
            }
        });
    }
    openSearch() {
        if (this.menuOpen) {
            this.menuOpen = false;
            this.menuClose = true;
            this.document.body.style.overflow = '';
        }
        else {
            this.document.body.style.overflow = 'hidden';
            this.searchClose = false;
            this.searchOpen = true;
        }
    }
    closeSearch() {
        this.searchOpen = false;
        this.searchClose = true;
        this.defaultValue = '';
        setTimeout(() => {
            this.document.body.removeAttribute('style');
        }, 300);
    }
    openMenu() {
        console.log(this.menuOpen);
        if (this.menuOpen == false) {
            this.menuOpen = true;
            this.menuClose = false;
            this.document.body.style.overflow = 'hidden';
        }
        else {
            this.document.body.style.overflow = '';
            this.menuOpen = false;
            this.menuClose = true;
            setTimeout(() => {
                this.document.body.removeAttribute('style');
            }, 300);
        }
    }
    onSearch(e) {
        this.defaultValue = e;
    }
    toolbarToggle(e) {
        console.log(e);
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["navigation"]], viewQuery: function NavigationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.containerEl = _t.first);
    } }, outputs: { resetSearch: "resetSearch" }, decls: 57, vars: 19, consts: [[1, "navigation-container", 3, "ngClass"], ["routerLink", "/", 1, "logoWrapper"], ["id", "siteLogo", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 142 62"], ["d", "M14.668 14c-.47-.987-1.148-1.746-2.037-2.28-.889-.55-1.923-.824-3.103-.824-1.18 0-2.247.275-3.2.824-.938.534-1.681 1.31-2.23 2.328-.534 1.002-.8 2.165-.8 3.49 0 1.326.266 2.49.8 3.492.549 1.002 1.292 1.778 2.23 2.327.953.534 2.02.8 3.2.8 1.648 0 3.006-.492 4.073-1.478 1.067-.986 1.689-2.32 1.867-4h-6.74v-1.795h9.091v1.697a8.47 8.47 0 01-1.309 3.83 8.232 8.232 0 01-2.933 2.74c-1.213.663-2.562.994-4.05.994-1.567 0-2.997-.363-4.29-1.09a8.278 8.278 0 01-3.08-3.08c-.743-1.309-1.115-2.788-1.115-4.436 0-1.649.372-3.128 1.116-4.437.76-1.325 1.786-2.351 3.079-3.079C6.53 9.28 7.96 8.908 9.527 8.908c1.795 0 3.379.445 4.753 1.334 1.39.888 2.4 2.141 3.03 3.757h-2.642zm8.274-5.94V26h-2.206V8.06h2.206zm2.936 11.249c0-1.358.275-2.546.825-3.564.55-1.035 1.3-1.835 2.254-2.4.97-.566 2.045-.849 3.225-.849 1.163 0 2.174.25 3.03.752.857.5 1.495 1.131 1.915 1.89v-2.424h2.23V26h-2.23v-2.473c-.436.776-1.09 1.422-1.963 1.94-.857.5-1.859.751-3.007.751-1.18 0-2.246-.29-3.2-.873-.953-.581-1.705-1.398-2.254-2.448-.55-1.05-.825-2.247-.825-3.588zm11.25.024c0-1.002-.203-1.875-.607-2.618-.404-.744-.953-1.31-1.648-1.697a4.325 4.325 0 00-2.255-.607c-.824 0-1.576.194-2.255.582-.678.388-1.22.954-1.624 1.697-.404.744-.606 1.617-.606 2.619 0 1.018.202 1.907.606 2.666.404.744.946 1.318 1.624 1.722.68.388 1.43.582 2.255.582.824 0 1.576-.194 2.255-.582a4.339 4.339 0 001.648-1.721c.404-.76.606-1.641.606-2.643zm10.661 6.885c-1.018 0-1.931-.17-2.74-.509-.807-.355-1.446-.84-1.914-1.455a3.932 3.932 0 01-.776-2.157h2.279c.064.662.372 1.204.921 1.624.566.42 1.301.63 2.206.63.84 0 1.503-.185 1.988-.557.485-.372.727-.84.727-1.406 0-.582-.258-1.01-.775-1.285-.517-.291-1.317-.574-2.4-.849-.986-.258-1.794-.517-2.425-.776a4.605 4.605 0 01-1.6-1.188c-.436-.533-.654-1.228-.654-2.084 0-.68.202-1.302.606-1.867.404-.566.977-1.01 1.72-1.334.744-.34 1.593-.509 2.547-.509 1.47 0 2.658.372 3.563 1.115.906.744 1.39 1.762 1.455 3.055h-2.206c-.049-.695-.331-1.252-.849-1.673-.5-.42-1.18-.63-2.036-.63-.792 0-1.422.17-1.891.509-.469.34-.703.784-.703 1.334 0 .436.137.8.412 1.09.29.275.646.502 1.067.68.436.16 1.034.347 1.794.557.953.258 1.729.517 2.327.776a3.859 3.859 0 011.527 1.115c.437.5.663 1.155.68 1.964 0 .727-.203 1.382-.607 1.963-.404.582-.978 1.043-1.721 1.382-.727.324-1.568.485-2.522.485zm12.667 0c-1.018 0-1.931-.17-2.74-.509-.808-.355-1.446-.84-1.915-1.455a3.932 3.932 0 01-.776-2.157h2.28c.064.662.371 1.204.92 1.624.566.42 1.302.63 2.207.63.84 0 1.503-.185 1.988-.557.485-.372.727-.84.727-1.406 0-.582-.259-1.01-.776-1.285-.517-.291-1.317-.574-2.4-.849-.986-.258-1.794-.517-2.424-.776a4.604 4.604 0 01-1.6-1.188c-.437-.533-.655-1.228-.655-2.084 0-.68.202-1.302.606-1.867.404-.566.978-1.01 1.721-1.334.744-.34 1.592-.509 2.546-.509 1.47 0 2.659.372 3.564 1.115.905.744 1.39 1.762 1.454 3.055h-2.206c-.048-.695-.331-1.252-.848-1.673-.501-.42-1.18-.63-2.037-.63-.792 0-1.422.17-1.89.509-.47.34-.704.784-.704 1.334 0 .436.138.8.412 1.09.291.275.647.502 1.067.68.437.16 1.035.347 1.794.557.954.258 1.73.517 2.328.776a3.859 3.859 0 011.527 1.115c.436.5.663 1.155.679 1.964 0 .727-.202 1.382-.606 1.963-.404.582-.978 1.043-1.722 1.382-.727.324-1.567.485-2.521.485zm20.085-7.37c0 .42-.024.865-.073 1.334H69.85c.08 1.309.525 2.335 1.333 3.078.824.728 1.818 1.091 2.982 1.091.953 0 1.745-.218 2.376-.654a3.57 3.57 0 001.358-1.794h2.375a5.77 5.77 0 01-2.133 3.127c-1.067.792-2.392 1.188-3.976 1.188-1.26 0-2.392-.283-3.394-.848-.986-.566-1.762-1.366-2.328-2.4-.565-1.051-.848-2.263-.848-3.637s.275-2.578.824-3.612c.55-1.035 1.317-1.827 2.303-2.376 1.002-.566 2.15-.849 3.443-.849 1.26 0 2.376.275 3.346.824.97.55 1.713 1.31 2.23 2.28.533.953.8 2.036.8 3.248zm-2.279-.46c0-.841-.186-1.56-.558-2.158a3.509 3.509 0 00-1.527-1.382c-.63-.323-1.333-.485-2.109-.485-1.115 0-2.069.356-2.86 1.067-.777.71-1.221 1.697-1.334 2.957h8.388zm9.894 7.83c-1.018 0-1.93-.17-2.74-.509-.807-.355-1.446-.84-1.914-1.455a3.932 3.932 0 01-.776-2.157h2.279c.065.662.371 1.204.921 1.624.566.42 1.301.63 2.206.63.84 0 1.503-.185 1.988-.557.485-.372.728-.84.728-1.406 0-.582-.259-1.01-.776-1.285-.517-.291-1.318-.574-2.4-.849-.986-.258-1.794-.517-2.425-.776a4.605 4.605 0 01-1.6-1.188c-.436-.533-.654-1.228-.654-2.084 0-.68.202-1.302.606-1.867.404-.566.977-1.01 1.721-1.334.744-.34 1.592-.509 2.546-.509 1.47 0 2.658.372 3.563 1.115.906.744 1.39 1.762 1.455 3.055h-2.206c-.049-.695-.331-1.252-.849-1.673-.5-.42-1.18-.63-2.036-.63-.792 0-1.422.17-1.891.509-.469.34-.703.784-.703 1.334 0 .436.137.8.412 1.09.29.275.646.502 1.067.68.436.16 1.034.347 1.794.557.953.258 1.73.517 2.327.776a3.86 3.86 0 011.527 1.115c.437.5.663 1.155.68 1.964 0 .727-.203 1.382-.607 1.963-.404.582-.978 1.043-1.721 1.382-.727.324-1.568.485-2.522.485zM98.277 9.102v10.692c0 1.503.364 2.618 1.091 3.345.744.727 1.77 1.091 3.079 1.091 1.293 0 2.304-.364 3.031-1.09.743-.728 1.115-1.843 1.115-3.346V9.102h2.206v10.667c0 1.407-.283 2.594-.848 3.564a5.335 5.335 0 01-2.303 2.134c-.954.468-2.029.703-3.225.703-1.196 0-2.279-.235-3.249-.703-.953-.47-1.713-1.18-2.279-2.134-.549-.97-.824-2.157-.824-3.564V9.102h2.206zm19.56 17.068c-1.115 0-2.117-.194-3.006-.582-.873-.404-1.559-.954-2.06-1.649-.502-.71-.76-1.527-.776-2.448h2.351a3.17 3.17 0 00.97 2.012c.582.533 1.422.8 2.521.8 1.051 0 1.875-.259 2.473-.776.615-.533.922-1.212.922-2.036 0-.647-.178-1.172-.534-1.576a3.404 3.404 0 00-1.333-.921c-.534-.21-1.253-.437-2.158-.68-1.115-.29-2.012-.581-2.691-.872-.663-.291-1.236-.744-1.721-1.358-.469-.63-.703-1.47-.703-2.521 0-.921.234-1.738.703-2.449.468-.71 1.123-1.26 1.964-1.648.856-.388 1.834-.582 2.933-.582 1.584 0 2.877.396 3.879 1.188 1.018.792 1.592 1.842 1.721 3.152h-2.424c-.081-.647-.42-1.213-1.018-1.698-.598-.5-1.39-.751-2.376-.751-.921 0-1.673.242-2.255.727-.582.469-.873 1.131-.873 1.988 0 .614.17 1.115.509 1.503a3.62 3.62 0 001.285.897c.518.194 1.237.42 2.158.68 1.115.306 2.012.613 2.691.92.679.291 1.261.752 1.746 1.382.485.614.727 1.455.727 2.522 0 .824-.218 1.6-.655 2.327-.436.727-1.082 1.317-1.939 1.77-.857.452-1.867.679-3.031.679zm18.86-3.928h-7.37L127.969 26h-2.327l6.109-16.801h2.546L140.382 26h-2.327l-1.358-3.758zm-.63-1.794l-3.055-8.534-3.055 8.534h6.11zM5.92 40.26c1.083 0 2.019.204 2.807.613a4.162 4.162 0 011.824 1.724c.427.75.64 1.633.64 2.65 0 1.016-.213 1.899-.64 2.65-.418.74-1.026 1.31-1.824 1.709-.788.39-1.724.584-2.807.584H2.83v-9.93H5.92zm0 8.862c1.283 0 2.26-.338 2.935-1.012.675-.684 1.012-1.638 1.012-2.864 0-1.234-.342-2.198-1.026-2.892-.674-.693-1.648-1.04-2.92-1.04H4.124v7.808H5.92zm8.278-7.807v3.319h3.619v1.068h-3.619v3.42h4.046v1.068h-5.342v-9.944h5.342v1.069h-4.046zm14.214-1.055l-3.747 9.93h-1.496l-3.747-9.93h1.382l3.12 8.562 3.12-8.562h1.368zm2.718 1.055v3.319h3.619v1.068h-3.62v3.42h4.047v1.068h-5.343v-9.944h5.343v1.069H31.13zm7.304 7.82h3.476v1.055h-4.772v-9.93h1.296v8.876zm9.355 1.155a5.054 5.054 0 01-2.522-.641 4.865 4.865 0 01-1.81-1.81c-.436-.778-.654-1.652-.654-2.621 0-.969.218-1.838.655-2.607a4.73 4.73 0 011.81-1.81c.759-.436 1.6-.655 2.52-.655.932 0 1.777.219 2.537.656a4.658 4.658 0 011.795 1.795c.437.769.655 1.643.655 2.621s-.218 1.852-.655 2.621a4.76 4.76 0 01-1.795 1.81c-.76.427-1.605.64-2.536.64zm0-1.126c.693 0 1.315-.161 1.866-.484.56-.323.997-.784 1.31-1.382.324-.598.485-1.292.485-2.08 0-.798-.161-1.491-.484-2.08a3.376 3.376 0 00-1.297-1.382c-.55-.323-1.177-.484-1.88-.484-.703 0-1.33.161-1.88.484-.552.323-.989.784-1.311 1.382-.314.589-.47 1.282-.47 2.08 0 .788.156 1.482.47 2.08.322.598.76 1.059 1.31 1.382.56.323 1.188.484 1.88.484zm13.337-5.998c0 .827-.285 1.515-.855 2.066-.56.542-1.42.812-2.579.812h-1.909v4.146h-1.296v-9.93h3.205c1.12 0 1.97.27 2.55.812.59.542.884 1.24.884 2.094zm-3.434 1.81c.722 0 1.254-.157 1.596-.47.342-.314.513-.76.513-1.34 0-1.225-.703-1.837-2.109-1.837h-1.909v3.647h1.91zm6.341-3.661v3.319h3.619v1.068h-3.619v3.42h4.046v1.068h-5.342v-9.944h5.342v1.069h-4.046zM75.27 50.19l-2.365-4.06h-1.567v4.06h-1.296v-9.93h3.206c.75 0 1.381.128 1.894.385.523.256.912.603 1.168 1.04a2.9 2.9 0 01.385 1.496 2.9 2.9 0 01-.598 1.81c-.39.521-.978.868-1.767 1.04l2.493 4.16H75.27zm-3.932-5.1h1.91c.702 0 1.23-.171 1.58-.513.352-.352.528-.817.528-1.396 0-.59-.176-1.045-.527-1.368-.342-.323-.87-.484-1.582-.484h-1.909v3.76zm10.52 5.2c-.655 0-1.244-.114-1.766-.342-.513-.238-.917-.56-1.212-.969a2.516 2.516 0 01-.455-1.439h1.381c.048.466.238.86.57 1.183.342.313.836.47 1.482.47.617 0 1.102-.152 1.453-.456.361-.314.542-.712.542-1.197 0-.38-.105-.688-.314-.926a2.002 2.002 0 00-.783-.541 12.242 12.242 0 00-1.268-.4c-.656-.17-1.183-.341-1.582-.512a2.625 2.625 0 01-1.011-.798c-.276-.37-.413-.864-.413-1.481 0-.542.137-1.021.413-1.44a2.7 2.7 0 011.154-.968c.503-.228 1.078-.342 1.724-.342.93 0 1.69.233 2.279.698.598.465.936 1.083 1.011 1.852h-1.424c-.048-.38-.247-.712-.599-.997-.35-.295-.816-.442-1.396-.442-.541 0-.983.143-1.325.428-.341.275-.513.665-.513 1.168 0 .36.1.655.3.883.209.228.46.404.755.527.304.114.726.247 1.268.4.655.18 1.182.36 1.581.54.399.172.74.442 1.026.813.285.36.427.854.427 1.481 0 .485-.128.94-.384 1.368-.257.427-.637.774-1.14 1.04-.504.266-1.097.399-1.781.399zM95.363 50.224l-5.048-4.666 5.048-4.666h1.79l-5.068 4.666 5.068 4.666h-1.79zm5.227-9.332h1.791l5.048 4.666-5.048 4.666h-1.791l5.069-4.666-5.069-4.666z", "fill", "#fff"], [1, "nav"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "getting-started", "routerLinkActive", "active", 3, "click"], ["routerLinkActive", "active", 1, "dropdown"], ["routerLink", "components", 1, "dropDownInner"], ["width", "10", "height", "6", "viewBox", "0 0 10 6", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], [1, "dropdownNav", 3, "ngClass"], ["routerLink", "/components/cta-button", "routerLinkActive", "active"], ["routerLink", "/components/round-button", "routerLinkActive", "active"], ["routerLink", "/components/toggles", "routerLinkActive", "active"], ["routerLinkActive", "active", 1, "dropdown", "dropdownForm"], ["routerLink", "/components/forms", 1, "dropDownInnerForm"], ["routerLink", "/components/forms/dropdown", "routerLinkActive", "active"], ["routerLink", "/components/forms/text-area", "routerLinkActive", "active"], ["routerLink", "/components/forms/text-field", "routerLinkActive", "active"], ["routerLink", "/components/forms/radio-button", "routerLinkActive", "active"], ["routerLink", "/components/forms/checkbox", "routerLinkActive", "active"], ["routerLink", "/components/forms/ticked-checkbox", "routerLinkActive", "active"], ["routerLink", "/components/tooltips", "routerLinkActive", "active"], ["routerLink", "/components/badges", "routerLinkActive", "active"], ["routerLink", "/components/shadows", "routerLinkActive", "active"], ["routerLink", "/components/accordian", "routerLinkActive", "active"], ["routerLink", "/components/trustpilot", "routerLinkActive", "active"], ["routerLink", "/logo-library", "routerLinkActive", "active"], ["routerLink", "/icon-library", "routerLinkActive", "active"], ["id", "searchIcon", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 16 17", 3, "click"], ["d", "M15.766 15.524l-5.073-5.326a6.296 6.296 0 001.213-3.749A6.274 6.274 0 0010.19 2.1C9.084.938 7.61.298 6.047.298 4.482.297 3.01.939 1.904 2.1.797 3.26.188 4.804.188 6.45c0 1.642.61 3.188 1.716 4.349 1.106 1.163 2.576 1.803 4.143 1.803 1.308 0 2.55-.447 3.568-1.272l5.072 5.324a.16.16 0 00.114.05.154.154 0 00.113-.05l.852-.892a.169.169 0 00.047-.12.177.177 0 00-.047-.118zM9.14 9.698c-.829.867-1.926 1.345-3.094 1.345s-2.266-.478-3.094-1.345a4.687 4.687 0 01-1.281-3.249c0-1.226.455-2.38 1.281-3.248.828-.868 1.926-1.346 3.094-1.346s2.267.476 3.094 1.346a4.687 4.687 0 011.28 3.248 4.684 4.684 0 01-1.28 3.249z", "fill", "#fff"], ["id", "menuIcon", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 27 27", 3, "click"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M2.7 5.4a.9.9 0 000 1.8h21.6a.9.9 0 000-1.8H2.7zm-.9 8.1a.9.9 0 01.9-.9h21.6a.9.9 0 110 1.8H2.7a.9.9 0 01-.9-.9zm0 7.2a.9.9 0 01.9-.9h21.6a.9.9 0 110 1.8H2.7a.9.9 0 01-.9-.9z", "fill", "#fff"], [3, "search", "value"], [3, "click"], ["width", "10", "height", "6", "viewBox", "0 0 10 6", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M1 1L5 5L9 1", "stroke", "#D3D3D3", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_7_listener() { return ctx.setTitle("Getting Started"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Getting Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Components ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NavigationComponent__svg_svg_12_Template, 2, 0, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "CTA Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Round Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Toggles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Forms ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, NavigationComponent__svg_svg_23_Template, 2, 0, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Text Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Text Field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Radio Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Ticked Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Tooltips");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Badges");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Shadows");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Accordian");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Trustpilot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Logo Library");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Icon Library");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template__svg_svg_click_51_listener() { return ctx.openSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template__svg_svg_click_53_listener() { return ctx.openMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "search-bar", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("value", function NavigationComponent_Template_search_bar_value_55_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mobile-background", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_mobile_background_click_56_listener() { return ctx.closeSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](7, _c1, ctx.searchOpen, ctx.searchClose, ctx.menuClose, ctx.menuOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.effectTriggered);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](13, _c3, ctx.componentsActive == true, ctx.effectTriggered));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.formEffectTriggered);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](16, _c3, ctx.formComponentsActive == true, ctx.formEffectTriggered));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("search", ctx.defaultValue);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__["SearchBarComponent"], _mobile_background_mobile_background_component__WEBPACK_IMPORTED_MODULE_6__["MobileBackgroundComponent"]], styles: [".navigation-container[_ngcontent-%COMP%] {\n  background: #030622;\n  height: 100vh;\n  width: 280px;\n  transition: 0.5s width ease-out;\n}\n.navigation-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  letter-spacing: 0.3px;\n}\n@media (min-width: 1001px) {\n  .navigation-container[_ngcontent-%COMP%] {\n    overflow: auto;\n  }\n}\n.navigation-container.pageLoad[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n.navigation-container[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdownNav[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  margin: 0;\n  overflow: hidden;\n  max-height: 0;\n}\n.navigation-container[_ngcontent-%COMP%]   .closeEffect[_ngcontent-%COMP%] {\n  animation: smoothClose 0.3s ease-in forwards;\n}\n.navigation-container[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  border-left: none;\n  padding: 0 !important;\n}\n.navigation-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.navigation-container[_ngcontent-%COMP%]   .dropDownInner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  padding: 15px 31px;\n  padding-right: 36px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.navigation-container[_ngcontent-%COMP%]   .dropDownInnerForm[_ngcontent-%COMP%] {\n  display: flex !important;\n  justify-content: space-between;\n  align-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.navigation-container[_ngcontent-%COMP%]   .dropdownForm.active[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n}\n.navigation-container[_ngcontent-%COMP%]   .dropdownForm.active[_ngcontent-%COMP%]   .dropDownInnerForm[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: white !important;\n  pointer-events: none;\n}\n.navigation-container[_ngcontent-%COMP%]   .dropdownForm.active[_ngcontent-%COMP%]   .dropdownNav[_ngcontent-%COMP%] {\n  border-left: 1px solid #617690;\n  margin: 10px 0;\n  margin-left: 56px;\n}\n.navigation-container[_ngcontent-%COMP%]   .dropdownForm.active[_ngcontent-%COMP%]   .dropdownNav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  letter-spacing: 0.3px;\n  transition: 0.3s color;\n}\n.navigation-container[_ngcontent-%COMP%]   .dropdownForm.active[_ngcontent-%COMP%]   .dropdownNav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n  padding-top: 0;\n}\n.navigation-container[_ngcontent-%COMP%]   .dropdownForm.active[_ngcontent-%COMP%]   .dropdownNav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n.navigation-container[_ngcontent-%COMP%]   .dropdownForm.active[_ngcontent-%COMP%]   .dropdownNav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  color: white;\n}\n@media (max-width: 1000px) {\n  .navigation-container[_ngcontent-%COMP%]   .dropdownForm.active[_ngcontent-%COMP%]   .dropdownNav[_ngcontent-%COMP%] {\n    border-width: 4px;\n    padding: 15px 0;\n    margin: 0;\n    border-top: rgba(62, 82, 105, 0.4) solid 1px;\n  }\n  .navigation-container[_ngcontent-%COMP%]   .dropdownForm.active[_ngcontent-%COMP%]   .dropdownNav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 15px 40px;\n    border-top: none;\n  }\n  .navigation-container[_ngcontent-%COMP%]   .dropdownForm.active[_ngcontent-%COMP%]   .dropdownNav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n    padding-bottom: 15px;\n  }\n}\n.navigation-container[_ngcontent-%COMP%]   .dropdown.active[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  background-color: rgba(152, 186, 237, 0.12);\n}\n.navigation-container[_ngcontent-%COMP%]   .dropdown.active[_ngcontent-%COMP%]   .openAnimation[_ngcontent-%COMP%] {\n  animation: smoothOpen 0.5s ease-in forwards;\n}\n.navigation-container[_ngcontent-%COMP%]   .dropdown.active[_ngcontent-%COMP%]   .dropdownNav[_ngcontent-%COMP%] {\n  padding-bottom: 13px;\n}\n@media (max-width: 1000px) {\n  .navigation-container[_ngcontent-%COMP%]   .dropdown.active[_ngcontent-%COMP%]   .dropdownNav[_ngcontent-%COMP%] {\n    padding-bottom: 0;\n  }\n}\n.navigation-container[_ngcontent-%COMP%]   .dropdown.active[_ngcontent-%COMP%]   .dropDownInner[_ngcontent-%COMP%] {\n  color: white !important;\n  pointer-events: none;\n  font-weight: 500;\n}\n.navigation-container[_ngcontent-%COMP%]   .dropdownForm[_ngcontent-%COMP%]   .dropdownNav[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n.navigation-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  padding: 10px 50px;\n  padding-right: 36px;\n  color: #D3D3D3;\n  font-size: 15px;\n}\n@media (max-width: 1000px) {\n  .navigation-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 25px 30px;\n  }\n  .navigation-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n}\n.navigation-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   a.dropDownInner[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 18px;\n  padding: 15px 36px;\n  border-bottom: none;\n  line-height: 21px;\n}\n@media (max-width: 1000px) {\n  .navigation-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   a.dropDownInner[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 19px;\n    padding: 25px;\n  }\n}\n.navigation-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: transparent;\n  font-weight: bold;\n  color: white;\n}\n@keyframes smoothOpen {\n  0% {\n    opacity: 0;\n    max-height: 0px;\n  }\n  70% {\n    opacity: 1;\n  }\n  100% {\n    max-height: 1000px;\n  }\n}\n.navigation-container[_ngcontent-%COMP%]   .closeDropdown[_ngcontent-%COMP%] {\n  animation: smoothClose 0.5s ease-in forwards;\n}\n@keyframes smoothClose {\n  0% {\n    opacity: 1;\n    max-height: 1000px;\n  }\n  80% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n    max-height: 0px;\n  }\n}\n.navigation-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  display: block;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin-top: 40px;\n}\n.navigation-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .navigation-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .dropdownContainer[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 18px;\n  padding: 15px 36px;\n  line-height: 21px;\n  color: #D3D3D3;\n  cursor: pointer;\n  transition: 0.3s background-color;\n}\n.navigation-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .navigation-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .dropdownContainer.active[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: white;\n  background-color: rgba(152, 186, 237, 0.12);\n}\n@media (hover: hover) {\n  .navigation-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .navigation-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .dropdownContainer[_ngcontent-%COMP%]:hover {\n    background-color: rgba(152, 186, 237, 0.12);\n  }\n}\n.navigation-container[_ngcontent-%COMP%]   search-bar[_ngcontent-%COMP%]:first-of-type, .navigation-container[_ngcontent-%COMP%]   mobile-background[_ngcontent-%COMP%]:first-of-type {\n  position: absolute;\n  top: -100px;\n  transform: rotateX(180deg);\n}\n.navigation-container[_ngcontent-%COMP%]   search-bar[_ngcontent-%COMP%]:first-of-type {\n  position: absolute;\n  width: 100%;\n  display: block;\n  opacity: 0;\n  left: 0;\n  z-index: 2;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transform: rotateX(180deg);\n}\n@media (max-width: 1000px) {\n  .navigation-container[_ngcontent-%COMP%] {\n    height: 70px;\n    width: 100%;\n    position: absolute;\n    z-index: 10;\n    top: 0;\n    left: 0;\n    display: grid;\n    align-content: center;\n    justify-content: center;\n    align-items: center;\n    grid-template-columns: 1fr auto auto;\n    padding: 15px 25px;\n    perspective: 1000px;\n  }\n  .navigation-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    display: none;\n    z-index: 10;\n    height: 100%;\n  }\n  .navigation-container.open[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    top: 0;\n    left: 0;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n  }\n  .navigation-container.open[_ngcontent-%COMP%]   search-bar[_ngcontent-%COMP%]:first-of-type {\n    position: absolute;\n    width: 100%;\n    display: block;\n    top: 0;\n    opacity: 1;\n    left: 0;\n    z-index: 2;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    animation: openView 0.3s ease-in-out;\n    transform: rotateX(0);\n  }\n  .navigation-container.open[_ngcontent-%COMP%]   mobile-background[_ngcontent-%COMP%]:first-of-type {\n    display: block;\n    animation: openBackground 0.4s ease-in;\n    transform: rotateX(0);\n    width: 100%;\n    display: block;\n    top: 0;\n    opacity: 1;\n    left: 0;\n  }\n  .navigation-container.close[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    top: 0;\n    left: 0;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n  }\n  .navigation-container.close[_ngcontent-%COMP%]   search-bar[_ngcontent-%COMP%]:first-of-type {\n    position: absolute;\n    width: 100%;\n    display: block;\n    top: 0;\n    opacity: 1;\n    left: 0;\n    z-index: 2;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    animation: closeView 0.3s ease-in;\n    transform: rotateX(180deg);\n  }\n  .navigation-container.close[_ngcontent-%COMP%]   mobile-background[_ngcontent-%COMP%]:first-of-type {\n    display: block;\n    animation: closeView 0.3s ease-in forwards;\n    transform: rotateX(180deg);\n    position: absolute;\n    width: 100%;\n    display: block;\n    top: 0;\n    opacity: 1;\n    left: 0;\n  }\n  @keyframes openView {\n    from {\n      opacity: 0;\n      transform: rotateX(180deg);\n      transform-style: preserve-3d;\n    }\n    to {\n      display: block;\n      opacity: 1;\n      transform: rotateX(0);\n      transform-style: preserve-3d;\n    }\n  }\n  @keyframes openBackground {\n    from {\n      opacity: 0;\n    }\n    to {\n      display: block;\n      opacity: 1;\n    }\n  }\n  @keyframes closeView {\n    from {\n      opacity: 1;\n      display: block;\n      transform: rotateX(0);\n      transform-style: preserve-3d;\n    }\n    to {\n      display: none;\n      opacity: 0;\n      transform: rotateX(180deg);\n      transform-style: preserve-3d;\n    }\n  }\n  .navigation-container.menuOpen[_ngcontent-%COMP%] {\n    background: rgba(3, 6, 34, 0.97);\n  }\n  .navigation-container.menuOpen[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    margin-top: 0;\n    display: block;\n    position: absolute;\n    top: 70px;\n    animation: openMenu 0.2s ease-in;\n    background: rgba(3, 6, 34, 0.97);\n    height: calc(100vh - 70px);\n    width: 100%;\n  }\n  .navigation-container.menuOpen[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    animation: fadeItems 0.6s linear forwards;\n    line-height: 19px;\n    padding: 25px;\n    border-top: rgba(62, 82, 105, 0.4) solid 1px;\n    color: #FFFFFF;\n  }\n  .navigation-container.menuOpen[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n    border-bottom: rgba(62, 82, 105, 0.4) solid 1px;\n  }\n  @keyframes openMenu {\n    from {\n      display: none;\n      height: 0;\n    }\n    to {\n      display: block;\n      height: calc(100vh - 70px);\n    }\n  }\n  .navigation-container.menuClose[_ngcontent-%COMP%] {\n    background: rgba(3, 6, 34, 0.97);\n  }\n  .navigation-container.menuClose[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    margin-top: 0;\n    position: absolute;\n    top: 70px;\n    display: block;\n    animation: closeMenu 0.3s ease-in forwards;\n    background: rgba(3, 6, 34, 0.97);\n    width: 100%;\n  }\n  .navigation-container.menuClose[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 19px;\n    padding: 25px;\n    border-top: transparent solid 1px;\n    color: #FFFFFF;\n  }\n  @keyframes hideNav {\n    from {\n      opacity: 1;\n      visibility: visible;\n      height: 100%;\n    }\n    to {\n      opacity: 0;\n      visibility: hidden;\n      height: 0;\n    }\n  }\n  @keyframes fadeItems {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n  @keyframes closeMenu {\n    from {\n      height: calc(100vh - 70px);\n    }\n    to {\n      height: 0;\n    }\n  }\n}\n#menuIcon[_ngcontent-%COMP%] {\n  display: none;\n  cursor: pointer;\n  transition: 0.3s opacity;\n}\n@media (hover: hover) {\n  #menuIcon[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n}\n@media (max-width: 1000px) {\n  #menuIcon[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 27px;\n    height: 27px;\n    margin-left: 22px;\n  }\n}\n#searchIcon[_ngcontent-%COMP%] {\n  display: none;\n  cursor: pointer;\n  transition: 0.3s opacity;\n}\n@media (hover: hover) {\n  #searchIcon[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n}\n@media (max-width: 1000px) {\n  #searchIcon[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n  }\n}\n.logoWrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 28px 36px;\n  padding-bottom: 27px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n@media (max-width: 1000px) {\n  .logoWrapper[_ngcontent-%COMP%] {\n    padding-bottom: 0;\n    width: auto;\n    display: inline-block;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    border-bottom: none;\n    padding: 0;\n  }\n}\n.logoWrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: 0.3s all;\n  cursor: pointer;\n  max-width: 142px;\n}\n@media (max-width: 1000px) {\n  .logoWrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    height: 44px;\n    width: auto;\n    object-fit: contain;\n  }\n}\n@media (hover: hover) {\n  .logoWrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover {\n    transform: scale(1.1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUFDRjtBQUNFO0VBQ0UscUJBQUE7QUFDSjtBQUVFO0VBVkY7SUFXSSxjQUFBO0VBQ0Y7QUFDRjtBQUNFO0VBQ0UsWUFBQTtBQUNKO0FBRUU7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUFKO0FBR0U7RUFDRSw0Q0FBQTtBQURKO0FBSUU7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FBRko7QUFLRTtFQUNFLGNBQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSko7QUFPRTtFQUNFLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUxKO0FBUUU7RUFDRSx3Q0FBQTtBQU5KO0FBUUk7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFOTjtBQVNJO0VBQ0UsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFQTjtBQVVNO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBUlI7QUFVUTtFQUNFLGNBQUE7QUFSVjtBQVdRO0VBQ0UsaUJBQUE7QUFUVjtBQVlRO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0FBVlY7QUFjTTtFQXpCRjtJQTBCSSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxTQUFBO0lBQ0EsNENBQUE7RUFYTjtFQWFNO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtFQVhSO0VBYVE7SUFDRSxvQkFBQTtFQVhWO0FBQ0Y7QUFpQkU7RUFDRSxxQkFBQTtFQUNBLDJDQUFBO0FBZko7QUFpQkk7RUFDRSwyQ0FBQTtBQWZOO0FBa0JJO0VBQ0Usb0JBQUE7QUFoQk47QUFrQk07RUFIRjtJQUlJLGlCQUFBO0VBZk47QUFDRjtBQWtCSTtFQUNFLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQWhCTjtBQW9CRTtFQUNFLDRCQUFBO0FBbEJKO0FBdUJJO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBckJOO0FBdUJNO0VBUkY7SUFTSSxrQkFBQTtFQXBCTjtFQXNCTTtJQUNFLG1CQUFBO0VBcEJSO0FBQ0Y7QUF1Qk07RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBV0EsbUJBQUE7RUFDQSxpQkFBQTtBQS9CUjtBQXFCUTtFQUxGO0lBTUksbUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtFQWxCUjtBQUNGO0FBd0JNO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUF0QlI7QUEyQkk7RUFDRTtJQUNFLFVBQUE7SUFDQSxlQUFBO0VBekJOO0VBNEJJO0lBQ0UsVUFBQTtFQTFCTjtFQTZCSTtJQUNFLGtCQUFBO0VBM0JOO0FBQ0Y7QUErQkU7RUFDRSw0Q0FBQTtBQTdCSjtBQWdDRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0VBOUJKO0VBaUNFO0lBQ0UsVUFBQTtFQS9CSjtFQWtDRTtJQUNFLFVBQUE7SUFDQSxlQUFBO0VBaENKO0FBQ0Y7QUFtQ0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBakNKO0FBbUNJOztFQUVFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQWpDTjtBQW1DTTs7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtBQWhDUjtBQW1DTTtFQUNFOztJQUNFLDJDQUFBO0VBaENSO0FBQ0Y7QUFxQ0U7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFuQ0o7QUFzQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDBCQUFBO0FBcENKO0FBdUNFO0VBNVFGO0lBNlFJLFlBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxhQUFBO0lBQ0EscUJBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0NBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBcENGO0VBc0NFO0lBQ0UsYUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBcENKO0VBd0NFO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0VBdENKO0VBd0NJO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLE1BQUE7SUFDQSxVQUFBO0lBQ0EsT0FBQTtJQUNBLFVBQUE7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0lBQ0Esb0NBQUE7SUFDQSxxQkFBQTtFQXRDTjtFQXlDSTtJQUNFLGNBQUE7SUFDQSxzQ0FBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7SUFDQSxNQUFBO0lBQ0EsVUFBQTtJQUNBLE9BQUE7RUF2Q047RUEyQ0U7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLG1DQUFBO1lBQUEsMkJBQUE7RUF6Q0o7RUEyQ0k7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0lBQ0EsTUFBQTtJQUNBLFVBQUE7SUFDQSxPQUFBO0lBQ0EsVUFBQTtJQUNBLG1DQUFBO1lBQUEsMkJBQUE7SUFDQSxpQ0FBQTtJQUNBLDBCQUFBO0VBekNOO0VBNENJO0lBQ0UsY0FBQTtJQUNBLDBDQUFBO0lBQ0EsMEJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0lBQ0EsTUFBQTtJQUNBLFVBQUE7SUFDQSxPQUFBO0VBMUNOO0VBOENFO0lBQ0U7TUFDRSxVQUFBO01BQ0EsMEJBQUE7TUFDQSw0QkFBQTtJQTVDSjtJQStDRTtNQUNFLGNBQUE7TUFDQSxVQUFBO01BQ0EscUJBQUE7TUFDQSw0QkFBQTtJQTdDSjtFQUNGO0VBZ0RFO0lBQ0U7TUFDRSxVQUFBO0lBOUNKO0lBaURFO01BQ0UsY0FBQTtNQUNBLFVBQUE7SUEvQ0o7RUFDRjtFQWtERTtJQUNFO01BQ0UsVUFBQTtNQUNBLGNBQUE7TUFDQSxxQkFBQTtNQUNBLDRCQUFBO0lBaERKO0lBbURFO01BQ0UsYUFBQTtNQUNBLFVBQUE7TUFDQSwwQkFBQTtNQUNBLDRCQUFBO0lBakRKO0VBQ0Y7RUFvREU7SUFDRSxnQ0FBQTtFQWxESjtFQW9ESTtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsZ0NBQUE7SUFDQSxnQ0FBQTtJQUNBLDBCQUFBO0lBQ0EsV0FBQTtFQWxETjtFQW9ETTtJQUNFLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSx5Q0FBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtJQUNBLDRDQUFBO0lBQ0EsY0FBQTtFQWxEUjtFQXFETTtJQUNFLCtDQUFBO0VBbkRSO0VBdURJO0lBQ0U7TUFDRSxhQUFBO01BQ0EsU0FBQTtJQXJETjtJQXdESTtNQUNFLGNBQUE7TUFDQSwwQkFBQTtJQXRETjtFQUNGO0VBMERFO0lBQ0UsZ0NBQUE7RUF4REo7RUEwREk7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsY0FBQTtJQUNBLDBDQUFBO0lBQ0EsZ0NBQUE7SUFDQSxXQUFBO0VBeEROO0VBMERNO0lBQ0UsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtJQUNBLGlDQUFBO0lBQ0EsY0FBQTtFQXhEUjtFQTZESTtJQUNFO01BQ0UsVUFBQTtNQUNBLG1CQUFBO01BQ0EsWUFBQTtJQTNETjtJQThESTtNQUNFLFVBQUE7TUFDQSxrQkFBQTtNQUNBLFNBQUE7SUE1RE47RUFDRjtFQStESTtJQUNFO01BQ0UsVUFBQTtJQTdETjtJQWdFSTtNQUNFLFVBQUE7SUE5RE47RUFDRjtFQWlFSTtJQUNFO01BQ0UsMEJBQUE7SUEvRE47SUFrRUk7TUFDRSxTQUFBO0lBaEVOO0VBQ0Y7QUFDRjtBQXFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFsRUY7QUFvRUU7RUFDRTtJQUNFLFlBQUE7RUFsRUo7QUFDRjtBQXFFRTtFQVhGO0lBWUkscUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VBbEVGO0FBQ0Y7QUFxRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBbEVGO0FBb0VFO0VBQ0U7SUFDRSxZQUFBO0VBbEVKO0FBQ0Y7QUFxRUU7RUFYRjtJQVlJLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFsRUY7QUFDRjtBQXFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaURBQUE7QUFsRUY7QUFvRUU7RUFORjtJQU9JLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLHFCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7RUFqRUY7QUFDRjtBQW1FRTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBakVKO0FBbUVJO0VBTEY7SUFNSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VBaEVKO0FBQ0Y7QUFrRUk7RUFDRTtJQUNFLHFCQUFBO0VBaEVOO0FBQ0YiLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9uLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICMwMzA2MjI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAyODBweDtcbiAgdHJhbnNpdGlvbjogMC41cyB3aWR0aCBlYXNlLW91dDtcblxuICBhIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwMXB4KSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICAmLnBhZ2VMb2FkIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gIH1cblxuICAuZHJvcGRvd24gLmRyb3Bkb3duTmF2IHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBtYXJnaW46IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtaGVpZ2h0OiAwO1xuICB9XG5cbiAgLmNsb3NlRWZmZWN0IHtcbiAgICBhbmltYXRpb246IHNtb290aENsb3NlIDAuM3MgZWFzZS1pbiBmb3J3YXJkcztcbiAgfVxuXG4gIC5kcm9wZG93biB7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5hdiB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICAuZHJvcERvd25Jbm5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE1cHggMzFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgLmRyb3BEb3duSW5uZXJGb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuXG4gIC5kcm9wZG93bkZvcm0uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgLmRyb3BEb3duSW5uZXJGb3JtIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG5cbiAgICAuZHJvcGRvd25OYXYge1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNjE3NjkwO1xuICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICBtYXJnaW4tbGVmdDogNTZweDtcblxuXG4gICAgICBhIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBjb2xvcjtcblxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICAgICBib3JkZXItd2lkdGg6IDRweDtcbiAgICAgICAgcGFkZGluZzogMTVweCAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGJvcmRlci10b3A6IHJnYmEoNjIsIDgyLCAxMDUsIDAuNCkgc29saWQgMXB4O1xuXG4gICAgICAgIGEge1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHggNDBweDtcbiAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xuXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5kcm9wZG93bi5hY3RpdmUge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MiwgMTg2LCAyMzcsIDAuMTIpO1xuXG4gICAgLm9wZW5BbmltYXRpb24ge1xuICAgICAgYW5pbWF0aW9uOiBzbW9vdGhPcGVuIDAuNXMgZWFzZS1pbiBmb3J3YXJkcztcbiAgICB9XG5cbiAgICAuZHJvcGRvd25OYXYge1xuICAgICAgcGFkZGluZy1ib3R0b206IDEzcHg7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRyb3BEb3duSW5uZXIge1xuICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICB9XG5cbiAgLmRyb3Bkb3duRm9ybSAuZHJvcGRvd25OYXYge1xuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuXG4gIC5uYXYgLmRyb3Bkb3duIHtcbiAgICBhIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgcGFkZGluZzogMTBweCA1MHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMzZweDtcbiAgICAgIGNvbG9yOiAjRDNEM0QzO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgICAgIHBhZGRpbmc6IDI1cHggMzBweDtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5kcm9wRG93bklubmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDM2cHg7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIEBrZXlmcmFtZXMgc21vb3RoT3BlbiB7XG4gICAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICAgIH1cblxuICAgICAgNzAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuICAgICAgMTAwJSB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMDBweFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jbG9zZURyb3Bkb3duIHtcbiAgICBhbmltYXRpb246IHNtb290aENsb3NlIDAuNXMgZWFzZS1pbiBmb3J3YXJkcztcbiAgfVxuXG4gIEBrZXlmcmFtZXMgc21vb3RoQ2xvc2Uge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBtYXgtaGVpZ2h0OiAxMDAwcHg7XG4gICAgfVxuXG4gICAgODAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgbWF4LWhlaWdodDogMHB4XG4gICAgfVxuICB9XG5cbiAgLm5hdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuXG4gICAgYSxcbiAgICAuZHJvcGRvd25Db250YWluZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHBhZGRpbmc6IDE1cHggMzZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgICAgY29sb3I6ICNEM0QzRDM7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzIGJhY2tncm91bmQtY29sb3I7XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MiwgMTg2LCAyMzcsIDAuMTIpO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MiwgMTg2LCAyMzcsIDAuMTIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoLWJhcjpmaXJzdC1vZi10eXBlLFxuICBtb2JpbGUtYmFja2dyb3VuZDpmaXJzdC1vZi10eXBlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTAwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG4gIH1cblxuICBzZWFyY2gtYmFyOmZpcnN0LW9mLXR5cGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvcGFjaXR5OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMjtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG8gYXV0bztcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcblxuICAgIC5uYXYge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuXG4gICAgJi5vcGVuIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblxuICAgICAgc2VhcmNoLWJhcjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICBhbmltYXRpb246IG9wZW5WaWV3IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwKTtcbiAgICAgIH1cblxuICAgICAgbW9iaWxlLWJhY2tncm91bmQ6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBhbmltYXRpb246IG9wZW5CYWNrZ3JvdW5kIDAuNHMgZWFzZS1pbjtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDApO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmNsb3NlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblxuICAgICAgc2VhcmNoLWJhcjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICBhbmltYXRpb246IGNsb3NlVmlldyAwLjNzIGVhc2UtaW47XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuICAgICAgfVxuXG4gICAgICBtb2JpbGUtYmFja2dyb3VuZDpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGFuaW1hdGlvbjogY2xvc2VWaWV3IDAuM3MgZWFzZS1pbiBmb3J3YXJkcztcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBvcGVuVmlldyB7XG4gICAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgICB9XG5cbiAgICAgIHRvIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwKTtcbiAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIG9wZW5CYWNrZ3JvdW5kIHtcbiAgICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuXG4gICAgICB0byB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgY2xvc2VWaWV3IHtcbiAgICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDApO1xuICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgfVxuXG4gICAgICB0byB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWVudU9wZW4ge1xuICAgICAgYmFja2dyb3VuZDogcmdiKDMsIDYsIDM0LCAwLjk3KTtcblxuICAgICAgLm5hdiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNzBweDtcbiAgICAgICAgYW5pbWF0aW9uOiBvcGVuTWVudSAwLjJzIGVhc2UtaW47XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigzLCA2LCAzNCwgMC45Nyk7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBhbmltYXRpb246IGZhZGVJdGVtcyAwLjZzIGxpbmVhciBmb3J3YXJkcztcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICAgIGJvcmRlci10b3A6IHJnYmEoNjIsIDgyLCAxMDUsIDAuNCkgc29saWQgMXB4O1xuICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICB9XG5cbiAgICAgICAgOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IHJnYmEoNjIsIDgyLCAxMDUsIDAuNCkgc29saWQgMXB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgb3Blbk1lbnUge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYubWVudUNsb3NlIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYigzLCA2LCAzNCwgMC45Nyk7XG5cbiAgICAgIC5uYXYge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNzBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGFuaW1hdGlvbjogY2xvc2VNZW51IDAuM3MgZWFzZS1pbiBmb3J3YXJkcztcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDMsIDYsIDM0LCAwLjk3KTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgICBib3JkZXItdG9wOiB0cmFuc3BhcmVudCBzb2xpZCAxcHg7XG4gICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgLy8gYW5pbWF0aW9uOiBoaWRlTmF2IDAuM3MgZWFzZS1pbiBmb3J3YXJkcztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGhpZGVOYXYge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgdG8ge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGZhZGVJdGVtcyB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0byB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGNsb3NlTWVudSB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG8ge1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4jbWVudUljb24ge1xuICBkaXNwbGF5OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3Mgb3BhY2l0eTtcblxuICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgICY6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDI3cHg7XG4gICAgaGVpZ2h0OiAyN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xuICB9XG59XG5cbiNzZWFyY2hJY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzIG9wYWNpdHk7XG5cbiAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgfVxufVxuXG4ubG9nb1dyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjhweCAzNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjdweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgc3ZnIHtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxNDJweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICB9XG5cbiAgICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "qxRy":
/*!*********************************************************!*\
  !*** ./src/app/pages/components/accordian.component.ts ***!
  \*********************************************************/
/*! exports provided: AccordianComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordianComponent", function() { return AccordianComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/page-header/page-header.component */ "tGzp");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tab/tab.component */ "66o4");
/* harmony import */ var _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/code-box/code-box.component */ "vGpf");
/* harmony import */ var _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/code-container/code-container.component */ "t1gI");






class AccordianComponent {
    constructor() { }
    ngOnInit() { }
}
AccordianComponent.ɵfac = function AccordianComponent_Factory(t) { return new (t || AccordianComponent)(); };
AccordianComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccordianComponent, selectors: [["accordian"]], decls: 16, vars: 2, consts: [["title", "Accordian", "breadcrumb", "Components / "], ["tabTitle", "Usage"], [1, "componentMaxWidth"], [3, "inline"], [1, "dsmAccordian"]], template: function AccordianComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " To apply this component, create a details component with the class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".dsmAccordian");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " . Inside the details component create a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " element. Inside that element insert the title of the accordian. This will be the content shown when the accordian is closed. Underneath the closing tag of the summary, enter the rest of the content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "details", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Example title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Text shown on click on the title. This can be whatever you want here and as long as you wish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    } }, directives: [_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__["TabComponent"], _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__["CodeBoxComponent"], _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__["CodeContainerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "t1gI":
/*!***********************************************************************!*\
  !*** ./src/app/components/code-container/code-container.component.ts ***!
  \***********************************************************************/
/*! exports provided: CodeContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeContainerComponent", function() { return CodeContainerComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var js_beautify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-beautify */ "5VLF");
/* harmony import */ var js_beautify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_beautify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var htmlparser2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! htmlparser2 */ "hS6j");
/* harmony import */ var htmlparser2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(htmlparser2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const _c0 = ["projected"];
const _c1 = ["codeContainer"];
const _c2 = ["codeEditor"];
const _c3 = ["codeBox"];
const _c4 = ["*"];
class CodeContainerComponent {
    constructor(router, el, active) {
        this.router = router;
        this.el = el;
        this.active = active;
        this.beautifySettings = {
            wrap_line_length: '70',
        };
        this.codeReset = false;
        this.active.params.subscribe((a) => {
            if (Object.keys(a).length > 0) {
                setTimeout(() => {
                    if (document.querySelector('.swiper-outer'))
                        return;
                    loadElements();
                }, 40);
            }
        });
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]))
            .subscribe(({ url }) => {
            this.currentURL = url;
        });
    }
    ngOnChanges() {
        if (this.icon && this.codeContainer) {
            this.codeContainer.nativeElement.innerHTML = this.icon;
            this.codeContent = this.codeContainer.nativeElement.innerHTML;
            if (this.codeElement && this.codeContainer) {
                this.codeElement.nativeElement.innerText = js_beautify__WEBPACK_IMPORTED_MODULE_2__["html"](this.beautifyFormat(this.codeContent), this.beautifySettings);
            }
            this.copyCode();
            loadElements();
            hljs.highlightBlock(this.codeElement.nativeElement);
        }
    }
    ngAfterViewInit() {
        if (this.icon) {
            this.codeContainer.nativeElement.innerHTML = this.icon;
        }
        this.codeContainer.nativeElement.innerHTML = this.codeContainer.nativeElement.innerHTML.replace(/(<pre>)|(<\/pre>|(_ngcontent.+?""))/g, '');
        this.codeContent = this.codeContainer.nativeElement.innerHTML;
        this.codeContainer.nativeElement.innerHTML = '';
        if (this.codeElement && this.codeContainer) {
            this.codeElement.nativeElement.innerText = js_beautify__WEBPACK_IMPORTED_MODULE_2__["html"](this.beautifyFormat(this.codeContent), this.beautifySettings);
        }
        this.codeContainer.nativeElement.innerHTML = this.codeContent;
        if (this.currentURL.includes('trustpilot')) {
            this.codeContainer.nativeElement.innerHTML = '';
            this.codeContainer.nativeElement.innerHTML = this.codeContent;
            this.originalCode = this.codeContainer.nativeElement.innerHTML;
            setTimeout(() => {
                if (document.querySelector('.swiper-outer'))
                    return;
                loadElements();
            }, 120);
        }
        else {
            this.originalCode = this.codeContainer.nativeElement.innerHTML;
            setTimeout(() => {
                loadElements();
            }, 10);
        }
        hljs.highlightBlock(this.codeElement.nativeElement);
    }
    stripChars(text) {
        let finalText = '';
        let cancelEnd = false;
        const parser = new htmlparser2__WEBPACK_IMPORTED_MODULE_3__["Parser"]({
            onopentag(name, attributes) {
                cancelEnd = false;
                /*
                 * This fires when a new tag is opened.
                 *
                 * If you don't need an aggregated `attributes` object,
                 * have a look at the `onopentagname` and `onattribute` events.
                 */
                if (name == 'br' || name == 'p' || name == 'font' || 'pre') {
                    cancelEnd = true;
                }
                else if (name == 'span' &&
                    attributes.class &&
                    attributes.class.includes('hljs')) {
                    cancelEnd = true;
                }
                else if (attributes.style) {
                    cancelEnd = true;
                }
                else {
                    let props = '';
                    console.log(attributes);
                    for (let key in attributes) {
                        if (key.includes('_ngcontent'))
                            return;
                        props += ` ${key}="${attributes[key]}"`;
                    }
                    finalText += `<${name}${props}>`;
                }
            },
            ontext(text) {
                finalText += text;
            },
            onclosetag(name) {
                if (cancelEnd)
                    return;
                finalText += `</${name}>`;
            },
        });
        parser.write(text);
        parser.end();
        return finalText;
    }
    formatCode(event) {
        event.stopPropagation();
        document.addEventListener('click', (this.listener = () => {
            this.codeReset = false;
            document.removeEventListener('click', this.listener, false);
            let element = this.stripChars(this.codeElement.nativeElement.innerHTML);
            if (this.currentURL.includes('trustpilot')) {
                this.codeContainer.nativeElement.innerHTML = element;
                loadElements();
            }
            this.codeElement.nativeElement.innerHTML = element;
            this.codeElement.nativeElement.innerText = js_beautify__WEBPACK_IMPORTED_MODULE_2__["html"](this.beautifyFormat(element), this.beautifySettings);
            hljs.highlightBlock(this.codeElement.nativeElement);
        }));
    }
    beautifyFormat(text) {
        return (text = text
            .replace(/<br>/g, '')
            .replace(/<\/button>/g, '</button>\n')
            // .replace(/<\/label>/g, '</label>\n')
            .replace(/<input/g, '\n<input')
            .replace(/<textarea/g, '\n<textarea')
            .replace(/<label/g, '\n<label')
            .replace(/<span/g, '\n<span'));
    }
    updateCode(el) {
        el = el.target;
        let text = this.stripChars(el.innerHTML);
        this.codeContent = text;
        if (!this.currentURL.includes('trustpilot')) {
            this.codeContainer.nativeElement.innerHTML = text;
            loadElements();
        }
        else {
            if (this.codeContainer.nativeElement.querySelector('.clickLoad'))
                return;
            this.codeContainer.nativeElement.innerHTML += `<div class="clickLoad">To refresh the component, click here</div>`;
        }
    }
    resetCode(el) {
        el = el.target;
        let parentNode = this.codeElement.nativeElement;
        let formattedCode = this.originalCode.replace(/(_ngcontent).+?=""/g, '');
        parentNode.innerHTML = formattedCode;
        this.codeContent = this.originalCode;
        this.codeContainer.nativeElement.innerHTML = this.originalCode;
        this.codeElement.nativeElement.innerText = js_beautify__WEBPACK_IMPORTED_MODULE_2__["html"](this.beautifyFormat(this.originalCode), this.beautifySettings);
        setTimeout(() => {
            loadElements();
        }, 10);
        hljs.highlightBlock(parentNode);
    }
    copyCode() {
        let copyEl = document.createElement('input');
        copyEl.value = this.codeContent.replace(/(_ngcontent).+?=""\s?/g, '');
        copyEl.id = 'copyCodeInput';
        document.body.append(copyEl);
        const input = document.querySelector('#copyCodeInput');
        input.select();
        input.setSelectionRange(0, 999999);
        document.execCommand('copy');
        input.remove();
    }
    ngOnInit() { }
}
CodeContainerComponent.ɵfac = function CodeContainerComponent_Factory(t) { return new (t || CodeContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"])); };
CodeContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CodeContainerComponent, selectors: [["code-container"]], contentQueries: function CodeContainerComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, _c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.projectedContent = _t.first);
    } }, viewQuery: function CodeContainerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.codeContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.codeElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.codeBox = _t.first);
    } }, inputs: { icon: "icon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c4, decls: 13, vars: 1, consts: [[1, "codeBox"], ["codeBox", ""], [1, "codeContainer"], ["codeContainer", ""], [1, "codeEditorBox"], [1, "navButtons"], ["width", "13", "height", "13", "viewBox", "0 0 15 15", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "resetButton", 3, "click"], ["d", "M14 1V5.33333H9.66667M13.2778 4.61111C12.2645 2.47333 10.0545 1 7.5 1C6.64641 1 5.80117 1.16813 5.01256 1.49478C4.22394 1.82144 3.50739 2.30022 2.90381 2.90381C2.30023 3.50739 1.82144 4.22394 1.49478 5.01256C1.16813 5.80117 1 6.64641 1 7.5C1 8.35359 1.16813 9.19883 1.49478 9.98744C1.82144 10.7761 2.30023 11.4926 2.90381 12.0962C3.50739 12.6998 4.22394 13.1786 5.01256 13.5052C5.80117 13.8319 6.64641 14 7.5 14V14C9.22391 14 10.8772 13.3152 12.0962 12.0962C13.3152 10.8772 14 9.22391 14 7.5L13.2778 4.61111Z", "stroke", "#999999", "stroke-width", "2"], ["width", "16", "height", "19", "viewBox", "0 0 16 19", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "copyButton", 3, "click"], ["d", "M11.7895 0H1.68421C0.757895 0 0 0.777273 0 1.72727V13.8182H1.68421V1.72727H11.7895V0ZM14.3158 3.45455H5.05263C4.12632 3.45455 3.36842 4.23182 3.36842 5.18182V17.2727C3.36842 18.2227 4.12632 19 5.05263 19H14.3158C15.2421 19 16 18.2227 16 17.2727V5.18182C16 4.23182 15.2421 3.45455 14.3158 3.45455ZM14.3158 17.2727H5.05263V5.18182H14.3158V17.2727Z", "fill", "#999999"], ["contenteditable", "true", 1, "codeEditor", "html", 3, "innerHTML", "input", "click"], ["codeEditor", ""]], template: function CodeContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CodeContainerComponent_Template__svg_svg_click_7_listener($event) { return ctx.resetCode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CodeContainerComponent_Template__svg_svg_click_9_listener() { return ctx.copyCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "pre", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function CodeContainerComponent_Template_pre_input_11_listener($event) { return ctx.updateCode($event); })("click", function CodeContainerComponent_Template_pre_click_11_listener($event) { return ctx.formatCode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx.currentCode, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    } }, styles: [".navButtons[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:first-child {\n  margin-right: 20px;\n}\n\n.navButtons[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  top: 20px;\n}\n\n.codeBox[_ngcontent-%COMP%] {\n  margin: 28px 0;\n}\n\n.codeTitle[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 13px;\n  line-height: 140.19%;\n  color: #000000;\n  opacity: 0.7;\n}\n\n.codeContainer[_ngcontent-%COMP%] {\n  border: 1.5px solid #F1F1F1;\n  box-sizing: border-box;\n  border-radius: 1px;\n  font-family: Roboto;\n  position: relative;\n  padding: 20px;\n  gap: 10px;\n}\n\n.codeEditorBox[_ngcontent-%COMP%] {\n  position: relative;\n  outline: none;\n  background: #F1F1F1;\n  text-align: left;\n  border-radius: 0px 0px 5px 5px;\n  padding: 28px 23px;\n  font-family: monospace;\n}\n\n.codeEditor[_ngcontent-%COMP%] {\n  background: transparent;\n  outline: none;\n}\n\n@media (max-width: 1000px) {\n  .codeEditor[_ngcontent-%COMP%] {\n    margin-right: 50px;\n    word-break: break-all;\n  }\n}\n\n.navButtons[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.navButtons[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  transition: 0.2s stroke;\n}\n\n.resetButton[_ngcontent-%COMP%]:hover   *[_ngcontent-%COMP%] {\n  stroke: #545454;\n}\n\n.copyButton[_ngcontent-%COMP%]:hover   *[_ngcontent-%COMP%] {\n  fill: #545454;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvZGUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFDRTtFQUpGO0lBS0ksa0JBQUE7SUFDQSxxQkFBQTtFQUVGO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSx1QkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtBQUVGIiwiZmlsZSI6ImNvZGUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdkJ1dHRvbnMgc3ZnOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubmF2QnV0dG9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRvcDogMjBweDtcbn1cblxuLmNvZGVCb3gge1xuICBtYXJnaW46IDI4cHggMDtcbn1cblxuLmNvZGVUaXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTQwLjE5JTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmNvZGVDb250YWluZXIge1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNGMUYxRjE7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBnYXA6IDEwcHg7XG59XG5cbi5jb2RlRWRpdG9yQm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIHBhZGRpbmc6IDI4cHggMjNweDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cblxuLmNvZGVFZGl0b3Ige1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogbm9uZTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgfVxufVxuXG4ubmF2QnV0dG9ucyBzdmcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZCdXR0b25zIHN2ZyAqIHtcbiAgdHJhbnNpdGlvbjogMC4ycyBzdHJva2U7XG59XG5cbi5yZXNldEJ1dHRvbjpob3ZlciAqIHtcbiAgc3Ryb2tlOiByZ2IoODQsIDg0LCA4NCk7XG59XG5cbi5jb3B5QnV0dG9uOmhvdmVyICoge1xuICBmaWxsOiByZ2IoODQsIDg0LCA4NCk7XG59XG4iXX0= */"] });
function loadElements() {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ "tGzp":
/*!*****************************************************************!*\
  !*** ./src/app/components/page-header/page-header.component.ts ***!
  \*****************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search-bar/search-bar.component */ "lCy9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PageHeaderComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.subtitle);
} }
class PageHeaderComponent {
    constructor() { }
    ngOnInit() { }
}
PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) { return new (t || PageHeaderComponent)(); };
PageHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageHeaderComponent, selectors: [["page-header"]], inputs: { breadcrumb: "breadcrumb", title: "title", subtitle: "subtitle" }, decls: 7, vars: 3, consts: [[1, "splitColumn"], [1, "breadCrumb"], [1, "currentPage"], [4, "ngIf"], [1, "smallTitle"], [1, "usageDesc"]], template: function PageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "search-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PageHeaderComponent_ng_container_6_Template, 5, 1, "ng-container", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.breadcrumb, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subtitle);
    } }, directives: [_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_1__["SearchBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".smallTitle[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 140.19%;\n}\n\n.usageDesc[_ngcontent-%COMP%] {\n  max-width: 680px;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 175%;\n  margin-bottom: 40px;\n}\n\n.breadCrumb[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 25px;\n  line-height: normal;\n  color: #3A4850;\n}\n\n.currentPage[_ngcontent-%COMP%] {\n  color: #0F0F0F;\n}\n\n.splitColumn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  align-items: center;\n  padding-bottom: 32px;\n  margin-bottom: 40px;\n  border-bottom: 1px solid #DEDEDE;\n}\n\n@media (max-width: 1000px) {\n  search-bar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc21hbGxUaXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE0MC4xOSU7XG59XG5cbi51c2FnZURlc2Mge1xuICBtYXgtd2lkdGg6IDY4MHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNzUlO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uYnJlYWRDcnVtYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzNBNDg1MDtcbn1cblxuLmN1cnJlbnRQYWdlIHtcbiAgY29sb3I6ICMwRjBGMEY7XG59XG5cbi5zcGxpdENvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNERURFREU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgc2VhcmNoLWJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "uRwK":
/*!*********************************************************************!*\
  !*** ./src/app/pages/components/forms/ticked-checkbox.component.ts ***!
  \*********************************************************************/
/*! exports provided: TickedCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TickedCheckboxComponent", function() { return TickedCheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/page-header/page-header.component */ "tGzp");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/tab/tab.component */ "66o4");
/* harmony import */ var _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/code-box/code-box.component */ "vGpf");
/* harmony import */ var _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/code-container/code-container.component */ "t1gI");






class TickedCheckboxComponent {
    constructor() { }
    ngOnInit() { }
}
TickedCheckboxComponent.ɵfac = function TickedCheckboxComponent_Factory(t) { return new (t || TickedCheckboxComponent)(); };
TickedCheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TickedCheckboxComponent, selectors: [["ticked-checkbox"]], decls: 25, vars: 4, consts: [["title", "Ticked Checkbox", "breadcrumb", "Components / Forms / "], ["tabTitle", "Usage"], [1, "componentMaxWidth"], [3, "inline"], ["action", "", 1, "dsmForm"], ["data-checked", "true", 1, "checkboxContainer"], [1, "smallTitle"], ["data-checked", "true", "data-size", "large", 1, "checkboxContainer"]], template: function TickedCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " To use this element, create a label with the class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".checkboxContainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " inside a form with the class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ".dsmForm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " . In the label element add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "data-checked=true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " To change the size, add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "data-size=large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " . There is only two sizes available, the default size and large ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    } }, directives: [_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__["TabComponent"], _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__["CodeBoxComponent"], _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__["CodeContainerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "vGpf":
/*!***********************************************************!*\
  !*** ./src/app/components/code-box/code-box.component.ts ***!
  \***********************************************************/
/*! exports provided: CodeBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeBoxComponent", function() { return CodeBoxComponent; });
/* harmony import */ var js_beautify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-beautify */ "5VLF");
/* harmony import */ var js_beautify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_beautify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = ["code"];
function CodeBoxComponent__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CodeBoxComponent__svg_svg_1_Template__svg_svg_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.copyCode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { inline: a0 }; };
const _c2 = ["*"];
class CodeBoxComponent {
    constructor(el) {
        this.el = el;
        this.inline = false;
        this.language = 'html';
    }
    ngOnInit() { }
    ngAfterViewInit() {
        let newCode = this.code.nativeElement.innerHTML;
        this.formattedCode = newCode;
        if (this.inline) {
            newCode = newCode
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/\s?(_ngcontent).+?=""/g, '');
            this.code.nativeElement.innerHTML = newCode;
        }
        else {
            newCode = newCode.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
            this.code.nativeElement.innerHTML = `<pre>${js_beautify__WEBPACK_IMPORTED_MODULE_0__["html"](newCode, {
                wrap_line_length: '70',
            })
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')}</pre>`;
        }
        hljs.highlightBlock(this.code.nativeElement);
    }
    copyCode() {
        let copyEl = document.createElement('input');
        copyEl.value = this.formattedCode
            .replace(/(_ngcontent).+?=""/g, '')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/(<p><\/p>)/g, '')
            .replace(/<br>/g, '')
            .replace(/(<pre.+?>)|(<\/pre>)/g, '')
            .replace(/\s{2,}/g, '');
        copyEl.id = 'copyCodeInput';
        document.body.append(copyEl);
        const input = document.querySelector('#copyCodeInput');
        input.select();
        input.setSelectionRange(0, 999999);
        document.execCommand('copy');
        input.remove();
    }
}
CodeBoxComponent.ɵfac = function CodeBoxComponent_Factory(t) { return new (t || CodeBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
CodeBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CodeBoxComponent, selectors: [["code-box"]], viewQuery: function CodeBoxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.code = _t.first);
    } }, inputs: { inline: "inline", language: "language" }, ngContentSelectors: _c2, decls: 5, vars: 10, consts: [[1, "codeWrapper", 3, "ngClass"], ["class", "copyButton", "width", "16", "height", "19", "viewBox", "0 0 16 19", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "click", 4, "ngIf"], [3, "ngClass"], ["code", ""], ["width", "16", "height", "19", "viewBox", "0 0 16 19", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "copyButton", 3, "click"], ["d", "M11.7895 0H1.68421C0.757895 0 0 0.777273 0 1.72727V13.8182H1.68421V1.72727H11.7895V0ZM14.3158 3.45455H5.05263C4.12632 3.45455 3.36842 4.23182 3.36842 5.18182V17.2727C3.36842 18.2227 4.12632 19 5.05263 19H14.3158C15.2421 19 16 18.2227 16 17.2727V5.18182C16 4.23182 15.2421 3.45455 14.3158 3.45455ZM14.3158 17.2727H5.05263V5.18182H14.3158V17.2727Z", "fill", "#999999"]], template: function CodeBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CodeBoxComponent__svg_svg_1_Template, 2, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, ctx.inline));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.inline);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("codeBox ", ctx.language, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c1, ctx.inline));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".codeBox[_ngcontent-%COMP%] {\n  position: relative;\n  outline: none;\n  background: #F1F1F1;\n  border-radius: 4px;\n  padding: 28px 23px;\n  font-family: monospace;\n  padding-right: 50px;\n}\n.codeBox.inline[_ngcontent-%COMP%] {\n  display: inline;\n  margin: 0;\n  padding: 0 2px;\n  border-radius: 0;\n}\n.codeWrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin: 30px 0;\n  width: 100%;\n}\n.codeWrapper.inline[_ngcontent-%COMP%] {\n  display: inline;\n  margin: 0;\n  width: auto;\n}\n.codeWrapper[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  z-index: 3;\n  right: 20px;\n  cursor: pointer;\n}\n.codeWrapper[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  transition: 0.3s fill;\n}\n.codeWrapper[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%]:hover   *[_ngcontent-%COMP%] {\n  fill: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvZGUtYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBRUU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFKO0FBSUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFERjtBQUdFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUZKO0FBSUk7RUFDRSxxQkFBQTtBQUZOO0FBS0k7RUFDRSxXQUFBO0FBSE4iLCJmaWxlIjoiY29kZS1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29kZUJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI0YxRjFGMTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAyOHB4IDIzcHg7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG5cblxuICAmLmlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDJweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG59XG5cbi5jb2RlV3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDMwcHggMDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJi5pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cblxuICA+c3ZnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIHotaW5kZXg6IDM7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgKiB7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzIGZpbGw7XG4gICAgfVxuXG4gICAgJjpob3ZlciAqIHtcbiAgICAgIGZpbGw6IGJsYWNrO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "vTgN":
/*!*******************************************************!*\
  !*** ./src/app/pages/components/toggles.component.ts ***!
  \*******************************************************/
/*! exports provided: TogglesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TogglesComponent", function() { return TogglesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/page-header/page-header.component */ "tGzp");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tab/tab.component */ "66o4");
/* harmony import */ var _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/code-box/code-box.component */ "vGpf");
/* harmony import */ var _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/code-container/code-container.component */ "t1gI");






class TogglesComponent {
    constructor() { }
    ngOnInit() { }
}
TogglesComponent.ɵfac = function TogglesComponent_Factory(t) { return new (t || TogglesComponent)(); };
TogglesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TogglesComponent, selectors: [["toggles"]], decls: 14, vars: 2, consts: [["title", "Toggles", "breadcrumb", "Components / ", "subtitle", "The toggles are used to choose between two different states."], ["tabTitle", "Usage"], [1, "componentMaxWidth"], [3, "inline"], [1, "dsmSlider"], ["data-disabled", "true", 1, "dsmSlider"]], template: function TogglesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " To apply this component, add a label component with the class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".dsmSlider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " . To disable the slider, add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "data-disabled=true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " attribute to the label element. No data can be entered inside the label tags ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    } }, directives: [_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__["TabComponent"], _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__["CodeBoxComponent"], _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__["CodeContainerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_components_accordian_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/components/accordian.component */ "qxRy");
/* harmony import */ var _pages_components_badges_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/components/badges.component */ "gP1A");
/* harmony import */ var _pages_components_cta_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/components/cta-button.component */ "RSQq");
/* harmony import */ var _pages_components_forms_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/components/forms/checkbox.component */ "vsHK");
/* harmony import */ var _pages_components_forms_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/components/forms/dropdown.component */ "Eb9P");
/* harmony import */ var _pages_components_forms_radio_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/components/forms/radio-button.component */ "yUPx");
/* harmony import */ var _pages_components_forms_text_area_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/components/forms/text-area.component */ "a6mq");
/* harmony import */ var _pages_components_forms_text_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/components/forms/text-field.component */ "5DdF");
/* harmony import */ var _pages_components_forms_ticked_checkbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/components/forms/ticked-checkbox.component */ "uRwK");
/* harmony import */ var _pages_components_round_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/components/round-button.component */ "aUpf");
/* harmony import */ var _pages_components_shadows_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/components/shadows.component */ "QStO");
/* harmony import */ var _pages_components_toggles_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/components/toggles.component */ "vTgN");
/* harmony import */ var _pages_components_tooltips_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/components/tooltips.component */ "vbRC");
/* harmony import */ var _pages_components_trustpilot_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/components/trustpilot.component */ "FZpC");
/* harmony import */ var _pages_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/getting-started/getting-started.component */ "8Wgu");
/* harmony import */ var _pages_icon_library_icon_library_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/icon-library/icon-library.component */ "x0ip");
/* harmony import */ var _pages_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/introduction/introduction.component */ "7Ol6");
/* harmony import */ var _pages_logo_library_logo_library_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/logo-library/logo-library.component */ "EN7T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");





















const routes = [
    { path: '', component: _pages_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_17__["IntroductionComponent"], pathMatch: 'full' },
    { path: 'getting-started', component: _pages_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_15__["GettingStartedComponent"] },
    { path: 'logo-library', component: _pages_logo_library_logo_library_component__WEBPACK_IMPORTED_MODULE_18__["LogoLibraryComponent"] },
    { path: 'icon-library', component: _pages_icon_library_icon_library_component__WEBPACK_IMPORTED_MODULE_16__["IconLibraryComponent"] },
    {
        path: 'components',
        children: [
            { path: 'cta-button/:id', component: _pages_components_cta_button_component__WEBPACK_IMPORTED_MODULE_3__["CtaButtonComponent"] },
            { path: 'cta-button', component: _pages_components_cta_button_component__WEBPACK_IMPORTED_MODULE_3__["CtaButtonComponent"] },
            { path: 'round-button/:id', component: _pages_components_round_button_component__WEBPACK_IMPORTED_MODULE_10__["RoundButtonComponent"] },
            { path: 'round-button', component: _pages_components_round_button_component__WEBPACK_IMPORTED_MODULE_10__["RoundButtonComponent"] },
            { path: 'toggles', component: _pages_components_toggles_component__WEBPACK_IMPORTED_MODULE_12__["TogglesComponent"] },
            { path: 'trustpilot/:id', component: _pages_components_trustpilot_component__WEBPACK_IMPORTED_MODULE_14__["TrustpilotComponent"] },
            { path: 'trustpilot', component: _pages_components_trustpilot_component__WEBPACK_IMPORTED_MODULE_14__["TrustpilotComponent"] },
            { path: 'tooltips/:id', component: _pages_components_tooltips_component__WEBPACK_IMPORTED_MODULE_13__["TooltipsComponent"] },
            { path: 'tooltips', component: _pages_components_tooltips_component__WEBPACK_IMPORTED_MODULE_13__["TooltipsComponent"] },
            { path: 'badges', component: _pages_components_badges_component__WEBPACK_IMPORTED_MODULE_2__["BadgesComponent"] },
            { path: 'shadows', component: _pages_components_shadows_component__WEBPACK_IMPORTED_MODULE_11__["ShadowsComponent"] },
            { path: 'accordian', component: _pages_components_accordian_component__WEBPACK_IMPORTED_MODULE_1__["AccordianComponent"] },
            {
                path: 'forms',
                children: [
                    { path: 'dropdown', component: _pages_components_forms_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["DropdownComponent"] },
                    { path: 'text-area', component: _pages_components_forms_text_area_component__WEBPACK_IMPORTED_MODULE_7__["TextAreaComponent"] },
                    { path: 'text-field', component: _pages_components_forms_text_field_component__WEBPACK_IMPORTED_MODULE_8__["TextFieldComponent"] },
                    { path: 'radio-button/:id', component: _pages_components_forms_radio_button_component__WEBPACK_IMPORTED_MODULE_6__["RadioButtonComponent"] },
                    { path: 'radio-button', component: _pages_components_forms_radio_button_component__WEBPACK_IMPORTED_MODULE_6__["RadioButtonComponent"] },
                    { path: 'checkbox', component: _pages_components_forms_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxComponent"] },
                    { path: 'ticked-checkbox', component: _pages_components_forms_ticked_checkbox_component__WEBPACK_IMPORTED_MODULE_9__["TickedCheckboxComponent"] },
                    { path: '', redirectTo: 'dropdown', pathMatch: 'full' },
                ],
            },
            { path: '', redirectTo: 'cta-button', pathMatch: 'full' },
        ],
    },
    {
        path: '**',
        component: _pages_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_17__["IntroductionComponent"],
        pathMatch: 'full',
        redirectTo: '',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vbRC":
/*!********************************************************!*\
  !*** ./src/app/pages/components/tooltips.component.ts ***!
  \********************************************************/
/*! exports provided: TooltipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipsComponent", function() { return TooltipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/page-header/page-header.component */ "tGzp");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tab/tab.component */ "66o4");
/* harmony import */ var _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/code-box/code-box.component */ "vGpf");
/* harmony import */ var _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/code-container/code-container.component */ "t1gI");






class TooltipsComponent {
    constructor() { }
    ngOnInit() { }
}
TooltipsComponent.ɵfac = function TooltipsComponent_Factory(t) { return new (t || TooltipsComponent)(); };
TooltipsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TooltipsComponent, selectors: [["tooltips"]], decls: 45, vars: 4, consts: [["title", "Tooltips", "breadcrumb", "Components / "], ["tabTitle", "Usage"], [1, "componentMaxWidth"], [3, "inline"], [2, "text-align", "center"], [1, "dsmTooltip"], [1, "smallTitle"], [1, "dsmTooltip", "click"], [1, "dsmTooltip", "close"], ["tabTitle", "Position"], [1, "dsmTooltip", "left"], [1, "dsmTooltip", "right"], [1, "dsmTooltip", "up"], [1, "dsmTooltip", "bottom"]], template: function TooltipsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " To apply this component, add the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".dsmTooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " class to a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " element. Inside the div enter the text you want to be displayed on hover ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Some text here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Clickable Tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " To convert the tooltip into a clickable element insteaad of hover, add the class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "click");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Some text here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Close Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " To insert a close button inside the tooltip, add the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " class to the element ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "code-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Some text here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " There are a few different positions you can place the tooltip in. This is changed by adding one of the following classes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "code-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Some text here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Some text here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Some text here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Some text here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    } }, directives: [_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__["TabComponent"], _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__["CodeBoxComponent"], _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__["CodeContainerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "vsHK":
/*!**************************************************************!*\
  !*** ./src/app/pages/components/forms/checkbox.component.ts ***!
  \**************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/page-header/page-header.component */ "tGzp");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/tab/tab.component */ "66o4");
/* harmony import */ var _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/code-box/code-box.component */ "vGpf");
/* harmony import */ var _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/code-container/code-container.component */ "t1gI");






class CheckboxComponent {
    constructor() { }
    ngOnInit() { }
}
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(); };
CheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckboxComponent, selectors: [["checkbox"]], decls: 50, vars: 8, consts: [["title", "Checkbox", "breadcrumb", "Components / Forms / "], ["tabTitle", "Usage"], [1, "componentMaxWidth"], [3, "inline"], ["action", "", 1, "dsmForm"], [1, "checkboxContainer"], [1, "smallTitle"], ["data-error", "true", 1, "checkboxContainer"], [1, "error"], ["data-disabled", "true", 1, "checkboxContainer"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " To use this element, create a label with the class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".checkboxContainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " inside a form with the class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ".dsmForm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Error Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " To add error styling, add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "data-error=true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " class to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " element. If you would like to add a custom error message, you can insert a span with the class of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ".error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " immediately after the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " closing tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Placeholder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "This is an error message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Disabled Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " To add disabled styling, add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "data-disabled=true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " class to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Placeholder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    } }, directives: [_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__["TabComponent"], _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__["CodeBoxComponent"], _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__["CodeContainerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "x0ip":
/*!**************************************************************!*\
  !*** ./src/app/pages/icon-library/icon-library.component.ts ***!
  \**************************************************************/
/*! exports provided: IconLibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconLibraryComponent", function() { return IconLibraryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/page-header/page-header.component */ "tGzp");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tab/tab.component */ "66o4");
/* harmony import */ var _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/code-box/code-box.component */ "vGpf");
/* harmony import */ var _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/code-container/code-container.component */ "t1gI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["grid"];
const _c1 = ["iconCode"];
function IconLibraryComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IconLibraryComponent_div_13_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.copyIcon($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Copied!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dsmIcons ", icon_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r2);
} }
class IconLibraryComponent {
    constructor() {
        this.icons = [
            'app',
            'approve_circle',
            'approve',
            'arrow-down',
            'arrow-left',
            'arrow-right',
            'arrow-up',
            'call',
            'camera',
            'chat',
            'customer_service',
            'exit',
            'eyestrain_relief',
            'form',
            'gift',
            'glasses',
            'heart',
            'location',
            'minus',
            'money_guarantee',
            'money',
            'phone',
            'plus',
            'prescription_scanner',
            'search',
            'truck',
        ];
        this.iconEl = `<div class="dsmIcons arrow-left"></div>`;
    }
    ngAfterViewInit() {
        this.addBlanks();
        window.addEventListener('resize', (event) => {
            this.addBlanks();
        });
        loadElements();
    }
    copyIcon(e) {
        let el = e.target.closest('.iconContainer');
        el.querySelector('.copiedBox').style.bottom = 0;
        setTimeout(() => {
            el.querySelector('.copiedBox').removeAttribute('style');
        }, 800);
        this.iconEl = `<div class="${e.target.closest('.iconContainer').querySelector('.dsmIcons').classList
            .value}"></div>`;
    }
    addBlanks() {
        this.grid.nativeElement
            .querySelectorAll('.iconContainer.disabled')
            .forEach((a) => a.remove());
        var gap = 0;
        var minW = window.innerWidth > 768 ? 164 : 120;
        var Wc = this.grid.nativeElement.offsetWidth;
        var N = Math.floor((Wc + gap) / (minW + gap));
        let numberOfIcons = Number.isInteger(this.grid.nativeElement.querySelectorAll('.iconContainer').length / N);
        let emptyCell = document.createElement('div');
        emptyCell.classList.add('iconContainer');
        let count = 0;
        while (numberOfIcons == false && count != 10) {
            count++;
            let el = this.grid.nativeElement
                .querySelector('.iconContainer')
                .cloneNode();
            el.classList.add('disabled');
            this.grid.nativeElement.appendChild(el);
            numberOfIcons = Number.isInteger(this.grid.nativeElement.querySelectorAll('.iconContainer').length / N);
        }
    }
}
IconLibraryComponent.ɵfac = function IconLibraryComponent_Factory(t) { return new (t || IconLibraryComponent)(); };
IconLibraryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconLibraryComponent, selectors: [["icon-library"]], viewQuery: function IconLibraryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.iconCode = _t.first);
    } }, decls: 14, vars: 3, consts: [["title", "Icon Library"], [1, "componentMaxWidth"], [3, "inline"], [3, "icon"], [1, "smallTitle"], [1, "iconGrid"], ["grid", ""], ["class", "iconContainer", 3, "click", 4, "ngFor", "ngForOf"], [1, "iconContainer", 3, "click"], [1, "iconClass"], [1, "copiedBox"]], template: function IconLibraryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All icons are preceded with the class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".dsmIcons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " and the related icon code. Icons can be coloured, resized and have any effects applied to it that a normal SVG would have. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "code-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Icon Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, IconLibraryComponent_div_13_Template, 6, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.iconEl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.icons);
    } }, directives: [_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__["TabComponent"], _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__["CodeBoxComponent"], _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__["CodeContainerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".iconGrid[_ngcontent-%COMP%] {\n  margin-top: 31px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(164px, 1fr));\n  border-left: 1.5px solid #F1F1F1;\n  border-bottom: 1.5px solid #F1F1F1;\n}\n@media (max-width: 768px) {\n  .iconGrid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  }\n}\n.copiedBox[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -100px;\n  background-color: #00B16A;\n  padding: 5px 10px;\n  width: 100%;\n  color: white;\n  text-align: center;\n  transition: 0.2s bottom;\n}\n.iconContainer[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  background: white;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  padding: 55px 44px;\n  border: 1.5px solid #F1F1F1;\n  border-left: none;\n  border-bottom: 0;\n  transition: 0.3s all;\n}\n@media (max-width: 768px) {\n  .iconContainer[_ngcontent-%COMP%] {\n    padding: 0;\n    min-height: 120px;\n  }\n}\n.iconContainer[_ngcontent-%COMP%]:not(.disabled) {\n  cursor: pointer;\n}\n.iconContainer[_ngcontent-%COMP%]:hover:not(.disabled) {\n  background-color: #F8F8F8;\n}\n.iconContainer[_ngcontent-%COMP%]   .iconClass[_ngcontent-%COMP%] {\n  margin-top: 9px;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ljb24tbGlicmFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtBQUNGO0FBQ0U7RUFQRjtJQVFJLDJEQUFBO0VBRUY7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUNGO0FBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUNGO0FBR0U7RUFoQkY7SUFpQkksVUFBQTtJQUNBLGlCQUFBO0VBQUY7QUFDRjtBQUVFO0VBQ0UsZUFBQTtBQUFKO0FBR0U7RUFDRSx5QkFBQTtBQURKO0FBSUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFGSiIsImZpbGUiOiJpY29uLWxpYnJhcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbkdyaWQge1xuICBtYXJnaW4tdG9wOiAzMXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE2NHB4LCAxZnIpKTtcbiAgYm9yZGVyLWxlZnQ6IDEuNXB4IHNvbGlkICNGMUYxRjE7XG4gIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkICNGMUYxRjE7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMjBweCwgMWZyKSk7XG4gIH1cblxufVxuXG4uY29waWVkQm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjE2QTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycyBib3R0b207XG59XG5cbi5pY29uQ29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDU1cHggNDRweDtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjRjFGMUYxO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG5cblxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWluLWhlaWdodDogMTIwcHg7XG4gIH1cblxuICAmOm5vdCguZGlzYWJsZWQpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAmOmhvdmVyOm5vdCguZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xuICB9XG5cbiAgLmljb25DbGFzcyB7XG4gICAgbWFyZ2luLXRvcDogOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB9XG59XG4iXX0= */"] });
function loadElements() {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ "yUPx":
/*!******************************************************************!*\
  !*** ./src/app/pages/components/forms/radio-button.component.ts ***!
  \******************************************************************/
/*! exports provided: RadioButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function() { return RadioButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/page-header/page-header.component */ "tGzp");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/tab/tab.component */ "66o4");
/* harmony import */ var _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/code-box/code-box.component */ "vGpf");
/* harmony import */ var _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/code-container/code-container.component */ "t1gI");






class RadioButtonComponent {
    constructor() { }
    ngOnInit() { }
}
RadioButtonComponent.ɵfac = function RadioButtonComponent_Factory(t) { return new (t || RadioButtonComponent)(); };
RadioButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RadioButtonComponent, selectors: [["radio-button"]], decls: 64, vars: 9, consts: [["title", "Radio Button", "breadcrumb", "Components / Forms / "], ["tabTitle", "Usage"], [1, "componentMaxWidth"], [3, "inline"], ["action", "", 1, "dsmForm"], [1, "radioContainer"], ["type", "radio", "name", "radioTest"], [1, "smallTitle"], ["data-error", "true", 1, "radioContainer"], [1, "error"], ["type", "radio", "name", "radioTest", "disabled", ""], ["tabTitle", "Sizes"], ["data-size", "medium", 1, "radioContainer"], ["data-size", "large", 1, "radioContainer"]], template: function RadioButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " To use this element, create a div with the class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".radioContainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " inside a form with the class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ".dsmForm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " . Inside that div element, create a radio input with the name of the group that you will use to switch between the buttons. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Error Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " To add error styling, add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "data-error=\"true\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " class to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "radioContainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " element. If you would like to add a custom error message, you can insert a span with the class of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ".error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " immediately after the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " closing tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "This is an error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Disabled Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " To add disabled styling, add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " class to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tab", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " There are also 3 different size options to choose from. You can choose between medium or large and the default size which requires no extra class. Add these styles using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "code-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "data-size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "code-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    } }, directives: [_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__["TabComponent"], _components_code_box_code_box_component__WEBPACK_IMPORTED_MODULE_4__["CodeBoxComponent"], _components_code_container_code_container_component__WEBPACK_IMPORTED_MODULE_5__["CodeContainerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map