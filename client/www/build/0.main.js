webpackJsonp([0],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(305);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardPageModule = (function () {
    function DashboardPageModule() {
    }
    return DashboardPageModule;
}());
DashboardPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]
        ]
    })
], DashboardPageModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_workout_manager_workout_manager__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__workout_exercises_workout_exercises__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_workout_create_workout__ = __webpack_require__(209);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutsPage; });
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
 * Generated class for the WorkoutsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WorkoutsPage = (function () {
    function WorkoutsPage(navCtrl, navParams, workoutService, modalCtrl, alertCtrl, authService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.workoutService = workoutService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.email = authService.getUserEmail();
    }
    WorkoutsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad WorkoutsPage');
        this.workoutService.getExercises().then(function (data) {
            _this.exercises = data;
            console.log("get exercises ===  ", data);
        }, function (err) {
            console.log("not allowed");
        });
        this.workoutService.getWorkoutExercises('Workout Test One').then(function (data) {
            console.log("get workout exercises first time with string == ", data);
        }, function (err) {
            console.log("not allowed");
        });
        this.workoutService.getWorkout(this.email).then(function (data) {
            console.log("getWorkout ===-----....", data);
            _this.names = data;
        }, function (err) {
            console.log("not allowed -----....", err);
        });
    };
    WorkoutsPage.prototype.newPage = function (x) {
        console.log("SELECTED :", x);
    };
    WorkoutsPage.prototype.display = function (workout_page, e1) {
        var _this = this;
        this.workoutService.getWorkoutExercises(workout_page).then(function (data) {
            console.log("get workout exercises 2nd time with params ", data);
            _this.test = data;
        }, function (err) {
            console.log("not allowed", err);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__workout_exercises_workout_exercises__["a" /* WorkoutExercisesPage */], {
            name: workout_page,
            exercises: e1,
            email: this.email
        });
    };
    WorkoutsPage.prototype.addExercise = function () {
        var prompt = this.alertCtrl.create({
            title: 'Exercises',
            message: 'Select exercises below:',
            inputs: [
                {
                    label: 'text'
                }
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Add',
                }
            ]
        });
        prompt.present();
    };
    WorkoutsPage.prototype.createWorkout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__create_workout_create_workout__["a" /* CreateWorkoutPage */]);
    };
    return WorkoutsPage;
}());
WorkoutsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-workouts',template:/*ion-inline-start:"/Users/darranblackweir/Documents/workspace/Ionic_workspace/myfitnesshelper/client/src/pages/workouts/workouts.html"*/'<!--\n  Generated template for the WorkoutsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n      <ion-buttons left >\n          <button ion-button icon-only  menuToggle>\n                <ion-icon name="menu"></ion-icon>\n              </button>\n         </ion-buttons>\n    <ion-title>Workouts</ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content>\n  <ion-card-header class="db">\n    Workouts\n  </ion-card-header> \n   <ion-list>\n  \n     <ion-item-sliding *ngFor="let name of names">\n        <ion-item> \n          <button (click)="display(name.title, name.exercises)" ion-button color="secondary"> {{name.title}}</button>   \n        </ion-item>\n     </ion-item-sliding>\n  \n   </ion-list>\n  \n \n  \n        <ion-item> \n             <button width= "100%" ion-button color="secondary" (click)="createWorkout()">Create new Workout<ion-icon name="add"></ion-icon></button>\n        </ion-item>\n  \n\n </ion-content>'/*ion-inline-end:"/Users/darranblackweir/Documents/workspace/Ionic_workspace/myfitnesshelper/client/src/pages/workouts/workouts.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_workout_manager_workout_manager__["a" /* WorkoutManagerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], WorkoutsPage);

//# sourceMappingURL=workouts.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regular_user_regular_user__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workouts_workouts__ = __webpack_require__(302);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
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
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DashboardPage = (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageSource = "/Users/darranblackweir/Documents/workspace/Ionic_workspace/myfitnesshelper/client/src/assets/img/button_workouts.png";
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.test = function () {
        try {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__regular_user_regular_user__["a" /* RegularUserPage */]);
        }
        catch (e) {
            console.log("Message is : ", e);
        }
    };
    DashboardPage.prototype.go_to_workouts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__workouts_workouts__["a" /* WorkoutsPage */]);
    };
    return DashboardPage;
}());
DashboardPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-dashboard',template:/*ion-inline-start:"/Users/darranblackweir/Documents/workspace/Ionic_workspace/myfitnesshelper/client/src/pages/dashboard/dashboard.html"*/'<ion-header>\n    <ion-navbar color="secondary">\n          <ion-buttons start>\n              <button ion-button icon-only menuToggle>\n                    <ion-icon name="menu"></ion-icon>\n                  </button>\n             </ion-buttons>\n    <ion-title>Dashboard</ion-title>\n</ion-navbar>\n\n</ion-header>\n<ion-content >\n  \n<ion-content id="homeContent" scroll="false" class="padding">\n    <div class="row" id="buttonsFirstWrapper">\n        <div class="col col-50"><img src="http://commercepromote.com/mobile-app/contacts_btn.png" (click)="test()"/></div>\n        <div class="col col-50"><img src="http://commercepromote.com/mobile-app/groups_btn.png" (click)="go_to_workouts()" /></div>\n    </div>\n    <div class="row">\n        <div class="col col-50">\n          <a href="javascript:void(0);"><img src="http://commercepromote.com/mobile-app/de_duplication_btn.png" /></a></div>\n        <div class="col col-50"><a href="javascript:void(0);"><img src="http://commercepromote.com/mobile-app/import_btn.png" /></a></div>\n    </div>\n    <div class="row">\n        <div class="col col-50"><a href="javascript:void(0);"><img src="http://commercepromote.com/mobile-app/export_btn.png" /></a></div>\n        <div class="col col-50"><a href="javascript:void(0);"><img src="http://commercepromote.com/mobile-app/configuration_btn.png" /></a></div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/darranblackweir/Documents/workspace/Ionic_workspace/myfitnesshelper/client/src/pages/dashboard/dashboard.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], DashboardPage);

//# sourceMappingURL=dashboard.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map