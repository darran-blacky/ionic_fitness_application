webpackJsonp([0],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(310);
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

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_workout_manager_workout_manager__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__workout_exercises_workout_exercises__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_workout_create_workout__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_trainers_trainers__ = __webpack_require__(43);
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
    function WorkoutsPage(navCtrl, navParams, workoutService, modalCtrl, alertCtrl, authService, loadingCtrl, trainerService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.workoutService = workoutService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.trainerService = trainerService;
        this.email = authService.getUserEmail();
        this.trainerService.getCurrentCoach(this.email).then(function (data) {
            _this.trainer = data;
        }, function (err) {
            console.log("not allowed : ");
        });
    }
    WorkoutsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad WorkoutsPage');
        // this.workoutService.getExercises().then((data) => {
        //     this.exercises = data;
        //     console.log("get exercises ===  ",data);
        //     }, (err) => {
        //         console.log("not allowed");
        //     });
        this.workoutService.getWorkout(this.email).then(function (data) {
            console.log("getWorkout ===-----....", data);
            _this.names = data;
        }, function (err) {
            console.log("not allowed -----....", err);
        });
        var details = {
            email: "darran1234@gmail.com",
            client: this.email
        };
        this.workoutService.getCustomWorkouts(details).then(function (data) {
            _this.custom_workouts = data;
            console.log("get custom workouts ===  ", data);
        }, function (err) {
            console.log("not allowed");
        });
    };
    // newPage(x){
    //   console.log("SELECTED :",x);
    // }
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
    // addExercise(){    
    //        let prompt = this.alertCtrl.create({
    //          title: 'Exercises',
    //          message: 'Select exercises below:',
    //          inputs: [
    //            {
    //              label: 'text'
    //            }
    //          ],
    //          buttons: [
    //            {
    //              text: 'Cancel'
    //            },
    //            {
    //              text: 'Add',
    //            }
    //          ]
    //        });
    //        prompt.present();
    // }
    WorkoutsPage.prototype.createWorkout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__create_workout_create_workout__["a" /* CreateWorkoutPage */]);
    };
    return WorkoutsPage;
}());
WorkoutsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-workouts',template:/*ion-inline-start:"/Users/darranblackweir/Documents/workspace/Ionic_workspace/myfitnesshelper/client/src/pages/workouts/workouts.html"*/'<!--\n  Generated template for the WorkoutsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n      <ion-buttons left >\n          <button ion-button icon-only  menuToggle>\n                <ion-icon name="menu"></ion-icon>\n              </button>\n         </ion-buttons>\n    <ion-title>Workouts</ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content>\n  <ion-card>\n  <ion-card-header class="db">\n    Workouts Created by you:\n  </ion-card-header> \n  <ion-card-content>\n   <ion-list>\n  \n      <ion-item *ngFor="let name of names" (click)="display(name.title, name.exercises)">\n          <ion-avatar item-left>\n            <img  src="../../assets/img/workout_logo.png">\n        </ion-avatar>\n          <h1 class="custom-margin">{{name.title}}</h1>\n        </ion-item>\n  \n   </ion-list>\n  </ion-card-content>\n</ion-card>\n      \n<ion-card>\n        \n  <ion-card-header class="db">\n    Workouts Created by your coach:\n  </ion-card-header> \n            \n            <ion-card-content>\n        \n              <ion-list>\n                      <ion-item *ngFor="let workout of custom_workouts" (click)="viewDeals(trainer.email)">\n                        <ion-avatar item-left>\n                          <img  src="../../assets/img/workout_logo.png">\n                      </ion-avatar>\n                        <h1 class="custom-margin">{{workout.name}}</h1>\n                      </ion-item>\n              </ion-list>\n                \n            </ion-card-content>\n          </ion-card>\n \n  \n        <!-- <ion-item> \n             <button width= "100%" ion-button color="secondary" (click)="createWorkout()">Create new Workout<ion-icon name="add"></ion-icon></button>\n        </ion-item> -->\n  \n\n </ion-content>'/*ion-inline-end:"/Users/darranblackweir/Documents/workspace/Ionic_workspace/myfitnesshelper/client/src/pages/workouts/workouts.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_workout_manager_workout_manager__["a" /* WorkoutManagerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_trainers_trainers__["a" /* TrainersProvider */]])
], WorkoutsPage);

//# sourceMappingURL=workouts.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regular_user_regular_user__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workouts_workouts__ = __webpack_require__(308);
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
    DashboardPage.prototype.goto = function (page) {
        this.navCtrl.push(page);
    };
    return DashboardPage;
}());
DashboardPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-dashboard',template:/*ion-inline-start:"/Users/darranblackweir/Documents/workspace/Ionic_workspace/myfitnesshelper/client/src/pages/dashboard/dashboard.html"*/'<ion-header>\n    <ion-navbar color="secondary">\n          <ion-buttons start>\n              <button ion-button icon-only menuToggle>\n                    <ion-icon name="menu"></ion-icon>\n                  </button>\n             </ion-buttons>\n    <ion-title>Dashboard</ion-title>\n</ion-navbar>\n\n</ion-header>\n<ion-content >\n  \n<ion-content id="homeContent" scroll="false" class="padding">\n   \n   <!-- <ion-card (click)="ViewExercise(\'Back\')">\n        <ion-card-header>\n          <img src="../../assets/img/profile_logo.png">\n        </ion-card-header>\n        <ion-card-header>\n          Back\n        </ion-card-header>\n      </ion-card>\n  <div>\n      <ion-card (click)="ViewExercise(\'Arms\')">\n          <ion-card-header>\n            <img src="https://www.bodybuilding.com/fun/images/2014/how-to-build-monster-arms-facebook-960x540.jpg">\n          </ion-card-header>\n          <ion-card-header>\n            Arms\n          </ion-card-header>\n        </ion-card>\n  \n        <ion-card (click)="ViewExercise(\'Shoulders\')">\n            <ion-card-header>\n              <img src="https://s3.amazonaws.com/strengthblog/wp-content/uploads/2016/04/20162534/press_banner.jpg">\n            </ion-card-header>\n            <ion-card-header>\n              Shoulders\n            </ion-card-header>\n          </ion-card>\n        </div>\n        <div>\n        <ion-card (click)="ViewExercise(\'Legs\')">\n            <ion-card-header>\n              <img src="https://www.bodybuilding.com/fun/images/2015/best-squat-alternatives-desktop.jpg">\n            </ion-card-header>\n            <ion-card-header>\n              Legs\n            </ion-card-header>\n          </ion-card>\n  \n   -->\n<ion-card>\n  <div class="row">\n    <div class="col col-50" style="width:150px;height:150px;"><img src="../../assets/img/profile_logo.png" (click)="goto(\'ProfilePage\')"/> \n      <ion-card-header class="titles">\n            <b>Profile</b>\n           </ion-card-header>\n    </div>\n    <div class="col col-50" style="width:177px;height:177px;"><img src="../../assets/img/create_logo.png" (click)="goto(\'CreateWorkoutPage\')"/> <ion-card-header class="titles">\n            <b>Create Workout</b>\n           </ion-card-header>\n    </div>\n  </div>\n  <br>\n  <br>\n  \n    <div class="row">\n          <div class="col col-50" style="width:177px;height:177px;"><img src="../../assets/img/workout_logo.png" (click)="goto(\'ExerciseGroupsPage\')" /> \n              <ion-card-header class="titles">\n                    <b>Exercises</b>\n                    </ion-card-header>\n          </div>\n          <div class="col col-50" style="width:177px;height:177px;"><img src="../../assets/img/exercises_logo.png" (click)="goto(\'WorkoutsPage\')" />\n                  <ion-card-header class="titles">\n                          <b>Workouts</b>\n              </ion-card-header>\n         </div>\n    </div>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/darranblackweir/Documents/workspace/Ionic_workspace/myfitnesshelper/client/src/pages/dashboard/dashboard.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], DashboardPage);

//# sourceMappingURL=dashboard.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map