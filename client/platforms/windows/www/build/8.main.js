webpackJsonp([8],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_workout__ = __webpack_require__(307);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWorkoutPageModule", function() { return CreateWorkoutPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateWorkoutPageModule = (function () {
    function CreateWorkoutPageModule() {
    }
    return CreateWorkoutPageModule;
}());
CreateWorkoutPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_workout__["a" /* CreateWorkoutPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_workout__["a" /* CreateWorkoutPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__create_workout__["a" /* CreateWorkoutPage */]
        ]
    })
], CreateWorkoutPageModule);

//# sourceMappingURL=create-workout.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_workout_manager_workout_manager__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateWorkoutPage; });
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
 * Generated class for the CreateWorkoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CreateWorkoutPage = (function () {
    function CreateWorkoutPage(navCtrl, navParams, workoutService, modalCtrl, alertCtrl, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.workoutService = workoutService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.muscle_groups = "testing";
        this.workout = { title: "Untitled" };
        this.muscle_groups2 = [];
        this.email = authService.getUserEmail();
    }
    CreateWorkoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateWorkoutPage');
        this.email = this.authService.getUserEmail();
    };
    CreateWorkoutPage.prototype.onChange = function () {
        var _this = this;
        this.workoutService.getExercisesByGroup(this.muscle_groups2).then(function (data) {
            _this.exercises = data;
        }, function (err) {
            console.log("not allowed");
        });
    };
    CreateWorkoutPage.prototype.addToWorkout = function () {
        var _this = this;
        var k = this.selected_exercises + "";
        var s = k.split(",");
        var new_Workout = {
            title: this.workout.title,
            email: this.email,
            exercises: s
        };
        this.showLoader();
        console.log("adding ===  ", new_Workout);
        this.workoutService.createWorkout(new_Workout).then(function (result) {
            _this.loading.dismiss();
            _this.presentToast();
            console.log("new workout ===  ", result);
        }, function (err) {
            console.log("not allowed");
        });
    };
    CreateWorkoutPage.prototype.showLoader = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Creating Workout...'
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
        }, 5000);
    };
    CreateWorkoutPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Workout was added successfully',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.setCssClass("my_toast");
        toast.present();
    };
    return CreateWorkoutPage;
}());
CreateWorkoutPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-create-workout',template:/*ion-inline-start:"/Users/darranblackweir/Documents/workspace/Ionic_workspace/myfitnesshelper/client/src/pages/create-workout/create-workout.html"*/'<!--\n  Generated template for the CreateWorkoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="secondary">\n        <ion-buttons left >\n            <button ion-button icon-only  menuToggle>\n                  <ion-icon name="menu"></ion-icon>\n                </button>\n           </ion-buttons>\n      <ion-title >{{workout.title}}</ion-title>\n    </ion-navbar>\n    \n  </ion-header>\n\n  \n  <ion-content>\n    <!-- <ion-card-header class="db">\n        Title\n    </ion-card-header>  -->\n    <ion-list>\n    \n    <ion-item class="db">\n        <ion-label type="text" color="white" floating>Title</ion-label>\n        <ion-input [(ngModel)]="workout.title" name="title"></ion-input>\n    </ion-item>\n    </ion-list>\n    \n  \n\n  \n    <ion-card-header class="db">\n      Muscle Groups\n    </ion-card-header> \n     <ion-list>\n      \n        <ion-item>\n\n          <ion-label class= "custom_popup">Muscles: </ion-label>\n                <ion-select class= "custom_popup" [(ngModel)]="muscle_groups2" (ionChange)="onChange()" multiple="true">\n                  <ion-option>Chest</ion-option>\n                  <ion-option>Back</ion-option>\n                  <ion-option>Legs</ion-option>\n                  <ion-option>Shoulders</ion-option>\n                  <ion-option>Abs</ion-option>\n                  <ion-option>Arms</ion-option>\n                </ion-select>\n          </ion-item>\n      \n     </ion-list>\n\n     <ion-card-header class="db">\n      Exercises\n    </ion-card-header> \n       \n    <ion-list>\n        <ion-item>\n      \n      <ion-label class= "custom_popup">Select Exercises:</ion-label>\n        <ion-select class= "custom_popup" [(ngModel)]="selected_exercises"   multiple="true">\n\n          <ion-option *ngFor="let e of exercises" value={{e._id}} >{{e.title}}</ion-option>\n  \n        </ion-select>\n      </ion-item>\n     </ion-list>\n     <button color="secondary" width="100%" ion-button icon-only  (click)="addToWorkout()" color="secondary" >Save Workout<ion-icon name="add"></ion-icon></button>\n     \n   </ion-content>'/*ion-inline-end:"/Users/darranblackweir/Documents/workspace/Ionic_workspace/myfitnesshelper/client/src/pages/create-workout/create-workout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_workout_manager_workout_manager__["a" /* WorkoutManagerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], CreateWorkoutPage);

//# sourceMappingURL=create-workout.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map