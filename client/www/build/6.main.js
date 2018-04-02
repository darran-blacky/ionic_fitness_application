webpackJsonp([6],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__current_pt__ = __webpack_require__(302);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentPtPageModule", function() { return CurrentPtPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CurrentPtPageModule = (function () {
    function CurrentPtPageModule() {
    }
    return CurrentPtPageModule;
}());
CurrentPtPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__current_pt__["a" /* CurrentPtPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__current_pt__["a" /* CurrentPtPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__current_pt__["a" /* CurrentPtPage */]
        ]
    })
], CurrentPtPageModule);

//# sourceMappingURL=current-pt.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pt_finder_pt_finder__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_trainers_trainers__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentPtPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
* Generated class for the CurrentPtPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
var CurrentPtPage = (function () {
    function CurrentPtPage(navCtrl, navParams, authService, trainerService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.trainerService = trainerService;
        this.email = authService.getUserEmail();
        this.rating = 0;
    }
    CurrentPtPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CurrentPtPage');
        this.trainerService.getCurrentCoach(this.email).then(function (data) {
            _this.current = data;
            console.log("data client ---- ===> : ", data);
        }, function (err) {
            console.log("not allowed : ");
        });
    };
    CurrentPtPage.prototype.search = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pt_finder_pt_finder__["a" /* PtFinderPage */]);
    };
    return CurrentPtPage;
}());
CurrentPtPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-current-pt',template:/*ion-inline-start:"/Users/darranblackweir/Documents/workspace/Ionic_workspace/myfitnesshelper/client/src/pages/current-pt/current-pt.html"*/' \n    <ion-header>\n        \n            <ion-navbar color="secondary">\n                <ion-buttons start>\n                    <button ion-button icon-only menuToggle>\n                          <ion-icon name="menu"></ion-icon>\n                        </button>\n                   </ion-buttons>\n                      <ion-title>Current Trainer</ion-title>\n            </ion-navbar>\n    </ion-header>\n<ion-content>\n  \n          <ion-card>\n        \n            <ion-card-header>\n              Find a Trainer!\n            </ion-card-header>\n            \n            <ion-card-content>\n        \n              <ion-list no-line>\n        \n                <ion-item> \n                   <button ion-button block outline color="secondary" (click)="search()">Search</button>            \n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n          <br>\n\n        <ion-card>\n            <ion-card-header>\n                Current Trainer : {{current}}\n              </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n                <ion-item> \n                    <ion-label color="white">Rate Online Coach (Stars : {{rating}})</ion-label>\n                </ion-item>\n\n                <ion-item>\n                        <ion-range max="10"  pin="true" [(ngModel)]="rating" dark>\n                            <ion-icon range-left small name="star-half"></ion-icon>\n                            <ion-icon range-right name="star"></ion-icon>\n                        </ion-range>\n                 </ion-item>\n\n                 <ion-item> \n                    <button ion-button class="db" (click)="search()">Submit</button>            \n                 </ion-item>\n\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n</ion-content>\n\n    \n        \n        '/*ion-inline-end:"/Users/darranblackweir/Documents/workspace/Ionic_workspace/myfitnesshelper/client/src/pages/current-pt/current-pt.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_3__providers_trainers_trainers__["a" /* TrainersProvider */]])
], CurrentPtPage);

//# sourceMappingURL=current-pt.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map