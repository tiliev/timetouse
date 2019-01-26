(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cycles-cycles-module"],{

/***/ "./src/app/cycles/cycle-list/cycle-list.component.css":
/*!************************************************************!*\
  !*** ./src/app/cycles/cycle-list/cycle-list.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cycle-actions {\n  margin-top:20px;\n}\n\n.cycle-container {\n  overflow:auto;\n  height:400px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3ljbGVzL2N5Y2xlLWxpc3QvY3ljbGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsY0FBYztFQUNkLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2N5Y2xlcy9jeWNsZS1saXN0L2N5Y2xlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jeWNsZS1hY3Rpb25zIHtcbiAgbWFyZ2luLXRvcDoyMHB4O1xufVxuXG4uY3ljbGUtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6YXV0bztcbiAgaGVpZ2h0OjQwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/cycles/cycle-list/cycle-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/cycles/cycle-list/cycle-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab label=\"Cycles\">\n\n<p>Cycles here</p>\n\n  </mat-tab>\n  <mat-tab label=\"Rounds\">\n    <ng-template matTabContent>\n      <p>Lazy loaded</p>\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Archived\">\n    <ng-template matTabContent>\n      <p>Really old cycles here.</p>\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/cycles/cycle-list/cycle-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/cycles/cycle-list/cycle-list.component.ts ***!
  \***********************************************************/
/*! exports provided: CycleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CycleListComponent", function() { return CycleListComponent; });
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

var CycleListComponent = /** @class */ (function () {
    function CycleListComponent() {
    }
    CycleListComponent.prototype.ngOnInit = function () {
    };
    CycleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cycle-list',
            template: __webpack_require__(/*! ./cycle-list.component.html */ "./src/app/cycles/cycle-list/cycle-list.component.html"),
            styles: [__webpack_require__(/*! ./cycle-list.component.css */ "./src/app/cycles/cycle-list/cycle-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CycleListComponent);
    return CycleListComponent;
}());



/***/ }),

/***/ "./src/app/cycles/cycles-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/cycles/cycles-routing.module.ts ***!
  \*************************************************/
/*! exports provided: CyclesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CyclesRoutingModule", function() { return CyclesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cycle_list_cycle_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cycle-list/cycle-list.component */ "./src/app/cycles/cycle-list/cycle-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _cycle_list_cycle_list_component__WEBPACK_IMPORTED_MODULE_2__["CycleListComponent"]
    }
];
var CyclesRoutingModule = /** @class */ (function () {
    function CyclesRoutingModule() {
    }
    CyclesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CyclesRoutingModule);
    return CyclesRoutingModule;
}());



/***/ }),

/***/ "./src/app/cycles/cycles.module.ts":
/*!*****************************************!*\
  !*** ./src/app/cycles/cycles.module.ts ***!
  \*****************************************/
/*! exports provided: CyclesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CyclesModule", function() { return CyclesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cycles_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cycles-routing.module */ "./src/app/cycles/cycles-routing.module.ts");
/* harmony import */ var _cycle_list_cycle_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cycle-list/cycle-list.component */ "./src/app/cycles/cycle-list/cycle-list.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CyclesModule = /** @class */ (function () {
    function CyclesModule() {
    }
    CyclesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_cycle_list_cycle_list_component__WEBPACK_IMPORTED_MODULE_3__["CycleListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _cycles_routing_module__WEBPACK_IMPORTED_MODULE_2__["CyclesRoutingModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"]
            ]
        })
    ], CyclesModule);
    return CyclesModule;
}());



/***/ })

}]);
//# sourceMappingURL=cycles-cycles-module.js.map