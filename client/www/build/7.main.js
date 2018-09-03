webpackJsonp([7],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exercise_list__ = __webpack_require__(307);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseListPageModule", function() { return ExerciseListPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExerciseListPageModule = (function () {
    function ExerciseListPageModule() {
    }
    return ExerciseListPageModule;
}());
ExerciseListPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__exercise_list__["a" /* ExerciseListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exercise_list__["a" /* ExerciseListPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__exercise_list__["a" /* ExerciseListPage */]
        ]
    })
], ExerciseListPageModule);

//# sourceMappingURL=exercise-list.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_workout_manager_workout_manager__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseListPage; });
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
 * Generated class for the ExerciseListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ExerciseListPage = (function () {
    function ExerciseListPage(navCtrl, navParams, workoutService, modalCtrl, alertCtrl, authService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.workoutService = workoutService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.muscle = navParams.get("muscle");
        console.log("muscle == ", this.muscle);
    }
    ExerciseListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ExerciseListPage');
        this.workoutService.getExercisesByGroup(this.muscle).then(function (data) {
            _this.exercises = data;
            console.log('exercises == ', data);
        }, function (err) {
            console.log("not allowed");
        });
    };
    ExerciseListPage.prototype.getInfo = function (description) {
        console.log(description);
        var alert = this.alertCtrl.create({
            title: 'Discription',
            subTitle: 'This will display information on how to do the exercises for :' + description + ".",
            buttons: ['Return']
        });
        alert.present();
    };
    return ExerciseListPage;
}());
ExerciseListPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-exercise-list',template:/*ion-inline-start:"/Users/darranblackweir/Documents/workspace/Ionic_workspace/myfitnesshelper/client/src/pages/exercise-list/exercise-list.html"*/'<!--\n  Generated template for the ExerciseListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="secondary">\n        <ion-buttons start>\n            <button ion-button icon-only menuToggle>\n                  <ion-icon name="menu"></ion-icon>\n                </button>\n           </ion-buttons>\n              <ion-title>Exercise List</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-card-content>\n<ion-content padding>\n    <ion-card (click)="getInfo(exercise.description)" *ngFor="let exercise of exercises" >\n        <ion-card-header>\n          <img src="{{exercise.img}}">\n        </ion-card-header>\n        <ion-card-header>\n          {{exercise.title}}\n        </ion-card-header>\n      </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"/Users/darranblackweir/Documents/workspace/Ionic_workspace/myfitnesshelper/client/src/pages/exercise-list/exercise-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_workout_manager_workout_manager__["a" /* WorkoutManagerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], ExerciseListPage);

//# sourceMappingURL=exercise-list.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map