(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sequences-sequences-module"],{

/***/ "./src/app/sequences/sequence-list/sequence-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/sequences/sequence-list/sequence-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcXVlbmNlcy9zZXF1ZW5jZS1saXN0L3NlcXVlbmNlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sequences/sequence-list/sequence-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/sequences/sequence-list/sequence-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sequence-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/sequences/sequence-list/sequence-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/sequences/sequence-list/sequence-list.component.ts ***!
  \********************************************************************/
/*! exports provided: SequenceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SequenceListComponent", function() { return SequenceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SequenceListComponent = /** @class */ (function () {
    function SequenceListComponent() {
    }
    SequenceListComponent.prototype.ngOnInit = function () {
    };
    SequenceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sequence-list',
            template: __webpack_require__(/*! ./sequence-list.component.html */ "./src/app/sequences/sequence-list/sequence-list.component.html"),
            styles: [__webpack_require__(/*! ./sequence-list.component.css */ "./src/app/sequences/sequence-list/sequence-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SequenceListComponent);
    return SequenceListComponent;
}());



/***/ }),

/***/ "./src/app/sequences/sequences-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/sequences/sequences-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SequencesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SequencesRoutingModule", function() { return SequencesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sequence_list_sequence_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sequence-list/sequence-list.component */ "./src/app/sequences/sequence-list/sequence-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _sequence_list_sequence_list_component__WEBPACK_IMPORTED_MODULE_2__["SequenceListComponent"]
    }
];
var SequencesRoutingModule = /** @class */ (function () {
    function SequencesRoutingModule() {
    }
    SequencesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SequencesRoutingModule);
    return SequencesRoutingModule;
}());



/***/ }),

/***/ "./src/app/sequences/sequences.module.ts":
/*!***********************************************!*\
  !*** ./src/app/sequences/sequences.module.ts ***!
  \***********************************************/
/*! exports provided: SequencesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SequencesModule", function() { return SequencesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sequences_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sequences-routing.module */ "./src/app/sequences/sequences-routing.module.ts");
/* harmony import */ var _sequence_list_sequence_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sequence-list/sequence-list.component */ "./src/app/sequences/sequence-list/sequence-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SequencesModule = /** @class */ (function () {
    function SequencesModule() {
    }
    SequencesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_sequence_list_sequence_list_component__WEBPACK_IMPORTED_MODULE_3__["SequenceListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _sequences_routing_module__WEBPACK_IMPORTED_MODULE_2__["SequencesRoutingModule"]
            ]
        })
    ], SequencesModule);
    return SequencesModule;
}());



/***/ })

}]);
//# sourceMappingURL=sequences-sequences-module.js.map