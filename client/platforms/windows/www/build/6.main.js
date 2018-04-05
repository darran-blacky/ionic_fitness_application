webpackJsonp([6],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exercise_groups__ = __webpack_require__(311);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseGroupsPageModule", function() { return ExerciseGroupsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExerciseGroupsPageModule = (function () {
    function ExerciseGroupsPageModule() {
    }
    return ExerciseGroupsPageModule;
}());
ExerciseGroupsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__exercise_groups__["a" /* ExerciseGroupsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exercise_groups__["a" /* ExerciseGroupsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__exercise_groups__["a" /* ExerciseGroupsPage */]
        ]
    })
], ExerciseGroupsPageModule);

//# sourceMappingURL=exercise-groups.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exercise_list_exercise_list__ = __webpack_require__(210);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseGroupsPage; });
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
 * Generated class for the ExerciseGroupsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ExerciseGroupsPage = (function () {
    function ExerciseGroupsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExerciseGroupsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExerciseGroupsPage');
    };
    ExerciseGroupsPage.prototype.ViewExercise = function (selected_muscle) {
        console.log('ADDED : ', selected_muscle);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__exercise_list_exercise_list__["a" /* ExerciseListPage */], {
            muscle: selected_muscle
        });
    };
    return ExerciseGroupsPage;
}());
ExerciseGroupsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-exercise-groups',template:/*ion-inline-start:"/Users/darranblackweir/Documents/workspace/Ionic_workspace/myfitnesshelper/client/src/pages/exercise-groups/exercise-groups.html"*/'<!--\n  Generated template for the ExerciseGroupsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n    <ion-navbar color="secondary">\n        <ion-buttons start>\n            <button ion-button icon-only menuToggle>\n                  <ion-icon name="menu"></ion-icon>\n                </button>\n           </ion-buttons>\n              <ion-title>Exercise Catalogue</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card (click)="ViewExercise(\'Chest\')">\n    <ion-card-header>\n      <img src="https://cdn-maf0.heartyhosting.com/sites/muscleandfitness.com/files/styles/full_node_image_1090x614/public/media/bench-press-max-ot.jpg?itok=ueAUZjqR&timestamp=1480723989">\n    </ion-card-header>\n    <ion-card-header>\n      Chest\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card (click)="ViewExercise(\'Back\')">\n      <ion-card-header>\n        <img src="https://www.bodybuilding.com/fun/images/2014/18-laws-of-back-training-facebook-box-960x540.jpg">\n      </ion-card-header>\n      <ion-card-header>\n        Back\n      </ion-card-header>\n    </ion-card>\n\n    <ion-card (click)="ViewExercise(\'Arms\')">\n        <ion-card-header>\n          <img src="https://www.bodybuilding.com/fun/images/2014/how-to-build-monster-arms-facebook-960x540.jpg">\n        </ion-card-header>\n        <ion-card-header>\n          Arms\n        </ion-card-header>\n      </ion-card>\n\n      <ion-card (click)="ViewExercise(\'Shoulders\')">\n          <ion-card-header>\n            <img src="https://s3.amazonaws.com/strengthblog/wp-content/uploads/2016/04/20162534/press_banner.jpg">\n          </ion-card-header>\n          <ion-card-header>\n            Shoulders\n          </ion-card-header>\n        </ion-card>\n\n      <ion-card (click)="ViewExercise(\'Legs\')">\n          <ion-card-header>\n            <img src="https://www.bodybuilding.com/fun/images/2015/best-squat-alternatives-desktop.jpg">\n          </ion-card-header>\n          <ion-card-header>\n            Legs\n          </ion-card-header>\n        </ion-card>\n\n        <ion-card (click)="ViewExercise(\'Abs\')">\n            <ion-card-header>\n              <img src="https://health-bt.com/wp-content/uploads/2016/06/93917f57583d47bf8b1914c63be04bf6.jpg">\n            </ion-card-header>\n            <ion-card-header>\n              Core\n            </ion-card-header>\n          </ion-card>\n         \n</ion-content>\n'/*ion-inline-end:"/Users/darranblackweir/Documents/workspace/Ionic_workspace/myfitnesshelper/client/src/pages/exercise-groups/exercise-groups.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ExerciseGroupsPage);

//# sourceMappingURL=exercise-groups.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map