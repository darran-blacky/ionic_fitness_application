webpackJsonp([7],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__current_clients__ = __webpack_require__(309);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentClientsPageModule", function() { return CurrentClientsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CurrentClientsPageModule = (function () {
    function CurrentClientsPageModule() {
    }
    return CurrentClientsPageModule;
}());
CurrentClientsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__current_clients__["a" /* CurrentClientsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__current_clients__["a" /* CurrentClientsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__current_clients__["a" /* CurrentClientsPage */]
        ]
    })
], CurrentClientsPageModule);

//# sourceMappingURL=current-clients.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pt_user_pt_user__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_trainers_trainers__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manage_deals_manage_deals__ = __webpack_require__(211);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentClientsPage; });
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
 * Generated class for the CurrentClientsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CurrentClientsPage = (function () {
    function CurrentClientsPage(navCtrl, navParams, authService, trainerService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.trainerService = trainerService;
    }
    CurrentClientsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CurrentClientsPage');
    };
    CurrentClientsPage.prototype.clients = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pt_user_pt_user__["a" /* PtUserPage */]);
    };
    CurrentClientsPage.prototype.manage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__manage_deals_manage_deals__["a" /* ManageDealsPage */]);
    };
    return CurrentClientsPage;
}());
CurrentClientsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-current-clients',template:/*ion-inline-start:"/Users/darranblackweir/Documents/workspace/Ionic_workspace/myfitnesshelper/client/src/pages/current-clients/current-clients.html"*/'<!--\n  Generated template for the CurrentClientsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    \n    <ion-navbar color="secondary">\n        <ion-buttons start>\n            <button ion-button icon-only  menuToggle>\n                  <ion-icon name="menu"></ion-icon>\n                </button>\n           </ion-buttons>\n              <ion-title>Clients</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n\n      <ion-card>\n    \n        <ion-card-header>\n          Package Manager\n        </ion-card-header>\n        \n        <ion-card-content>\n    \n            <ion-item> \n                <button ion-button block outline color="secondary" (click)="manage()">Edit Offers</button>            \n             </ion-item>\n\n        </ion-card-content>\n\n        <ion-card-header>\n           Client Manager\n        </ion-card-header>\n        <ion-card-content>\n            \n        <ion-list no-line>\n            \n                    <ion-item> \n                        <ion-label color="white">Current Clients </ion-label>\n                    </ion-item>\n                    <ion-item> \n                       <button ion-button block outline color="secondary" (click)="clients()">View Clients</button>            \n                    </ion-item>\n              \n                    \n                  </ion-list>\n        </ion-card-content>\n        \n      </ion-card>\n    </ion-content>\n    \n    \n    '/*ion-inline-end:"/Users/darranblackweir/Documents/workspace/Ionic_workspace/myfitnesshelper/client/src/pages/current-clients/current-clients.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_3__providers_trainers_trainers__["a" /* TrainersProvider */]])
], CurrentClientsPage);

//# sourceMappingURL=current-clients.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map