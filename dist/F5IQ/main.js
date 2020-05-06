(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(titleService) {
        this.titleService = titleService;
        this.title = 'Big-IP Data-Group management';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setTitle("F5 DG Manager");
    };
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/product-edit/product-edit.component.ts");
/* harmony import */ var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-add/product-add.component */ "./src/app/product-add/product-add.component.ts");
/* harmony import */ var _records_records_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./records/records.component */ "./src/app/records/records.component.ts");
/* harmony import */ var _record_details_record_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./record-details/record-details.component */ "./src/app/record-details/record-details.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _devices_devices_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./devices/devices.component */ "./src/app/devices/devices.component.ts");
/* harmony import */ var _getgrpby_url_getgrpby_url_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./getgrpby-url/getgrpby-url.component */ "./src/app/getgrpby-url/getgrpby-url.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var appRoutes = [
    {
        path: 'products/:id1/:id2',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"],
        data: { title: 'Product List' }
    },
    {
        path: 'product-details/:id',
        component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailComponent"],
        data: { title: 'Group Details' }
    },
    {
        path: 'product-add/:id',
        component: _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_9__["ProductAddComponent"],
        data: { title: 'Group Add' }
    },
    {
        path: 'records/:id',
        component: _records_records_component__WEBPACK_IMPORTED_MODULE_10__["RecordsComponent"],
        data: { title: 'Group Records' }
    },
    {
        path: 'product-edit/:id',
        component: _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_8__["ProductEditComponent"],
        data: { title: 'Group Edit' }
    },
    {
        path: 'record-details/:id1/:id2/:id3/:id4',
        component: _record_details_record_details_component__WEBPACK_IMPORTED_MODULE_11__["RecordDetailsComponent"],
        data: { title: 'Record Add/Edit' }
    },
    {
        path: 'devices',
        component: _devices_devices_component__WEBPACK_IMPORTED_MODULE_16__["DevicesComponent"],
        data: { title: 'Device List' }
    },
    {
        path: '',
        redirectTo: '/devices',
        pathMatch: 'full'
    },
    {
        path: 'getgrpbyurl',
        component: _getgrpby_url_getgrpby_url_component__WEBPACK_IMPORTED_MODULE_17__["GetgrpbyURLComponent"],
        data: { title: 'Download Group Data by URL' }
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailComponent"],
                _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_8__["ProductEditComponent"],
                _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_9__["ProductAddComponent"],
                _records_records_component__WEBPACK_IMPORTED_MODULE_10__["RecordsComponent"],
                _record_details_record_details_component__WEBPACK_IMPORTED_MODULE_11__["RecordDetailsComponent"],
                _devices_devices_component__WEBPACK_IMPORTED_MODULE_16__["DevicesComponent"],
                _getgrpby_url_getgrpby_url_component__WEBPACK_IMPORTED_MODULE_17__["GetgrpbyURLComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('No Changes');
        this.currentMessage = this.messageSource.asObservable();
        this.saveState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('Not Saved');
        this.save_results = this.messageSource.asObservable();
        /* Current data group edited */
        this.groupData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.grpSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('BigIP');
        /* List of devices for presenting choices*/
        this.devList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.currentDeviceList = this.devList.asObservable();
        /* map of all device name to hostname */
        this.devHostnames = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.allDeviceHostnames = this.devHostnames.asObservable();
        /* Results of the records save operation */
        this.grp_results = this.groupData.asObservable();
        this.grp_source = this.grpSource.asObservable();
        this.devAuth = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.curDevAuth = this.devAuth.asObservable();
        /* address of BigIP currently getting records from */
        this.destAddress = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.devAddress = this.destAddress.asObservable();
    }
    DataService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    DataService.prototype.setSaveResults = function (message) {
        this.saveState.next(message);
    };
    DataService.prototype.setGrpData = function (grp) {
        this.groupData.next(grp);
    };
    /* address of BigIP currently getting records from */
    DataService.prototype.setDestAddress = function (dest) {
        this.destAddress.next(dest);
    };
    DataService.prototype.setGrpSource = function (src) {
        this.grpSource.next(src);
    };
    /* List of devices for presenting choice, can be variabl*/
    DataService.prototype.deviceList = function (dev) {
        this.devList.next(dev);
    };
    /* hostnameList is the map of hostname to device name */
    DataService.prototype.setHostnameList = function (list) {
        this.devHostnames.next(list);
    };
    DataService.prototype.setAuth = function (s1) {
        this.devAuth.next(s1);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/devices/devices.component.css":
/*!***********************************************!*\
  !*** ./src/app/devices/devices.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Products Component's private CSS styles */\n.products {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 20em;\n}\n.products li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n   width: 40em;\n}\n.products li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.products a {\n\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px;\n   width: 25em;\n}\n.products a:hover {\n  color:#607D8B;\n}\n.products ab {\n  \n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: inline-block;\n  width: 50px;\n   width: 25em;\n}\n.products .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n.products .type {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607DBB;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: left;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton.delete {\n  position: relative;\n  left: 650px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/devices/devices.component.html":
/*!************************************************!*\
  !*** ./src/app/devices/devices.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Import Data Groups</h2>\n\n<div>\n  <button mat-raised-button routerLink=\"/getgrpbyurl/\">\n    Download Data group by URL\n  </button>&nbsp;&nbsp;&nbsp;&nbsp;\n\n  <button mat-raised-button (click)=\"importFromFile=true;\">\n    Import from local file\n  </button>&nbsp;&nbsp;&nbsp;&nbsp;\n\n  <button mat-raised-button (click)=\"addGroup=true;\" >\n    Create New Group\n  </button>&nbsp;&nbsp;&nbsp;&nbsp;\n\n  <button *ngIf=\"(groupname!='')\" mat-raised-button (click)=\"editCurrent()\" >\n    Edit Current Group\n  </button>&nbsp;&nbsp;&nbsp;&nbsp;\n\n  <button mat-raised-button (click)=\"openDevicesPanel()\" >\n    List Devices\n  </button>\n  <p>\n\n  <div *ngIf=\"(importFromFile)\">\n    <label>File:\n        <input type=\"file\" (change)=\"onChange($event.target.files)\">\n    </label><br>\n\n  <p>\n  </div>\n\n\n  <div *ngIf=\"(addGroup)\">\n    <label>Create new group on this client:</label><br>\n    <label>Name:\n    <input [(ngModel)]=\"groupData.name\" placeholder=\"Data-Group Name\"/>\n    </label><br>\n    <label>Type (string, number, IP address):\n    <input [(ngModel)]=\"groupData.type\" placeholder=\"Data-Group Type\"/>\n    </label><br>\n      <button (click)=\"addNewGroup()\">Create</button>\n  </div>\n\n\n<div *ngIf=\"openDevPanel\">\n<h2>{{title}}</h2>\n\n<ul class=\"products\">\n  <li *ngFor=\"let device of device_list; let i=index;\">\n    <div routerLink=\"/products/{{device.name}}/{{device.address}}/\">\n      <span class=\"badge\">{{i+1}}</span> <span style=\"  display: inline-block; width:220px\">{{device.name}}</span>&nbsp;\n       <span class=\"type\">{{device.type}}</span><span style=\"  display: inline-block; width:270px\">{{device.address}}</span>\n    </div>\n    <div>   \n    <button class=\"delete\" title=\"Get Data-Groups\"\n      (click)=\"get_dgs(device.name, device.address)\">Get DGs</button>\n      &nbsp;\n\n        <button class=\"delete\" title=\"Upload Scripts\" (click)=\"upload_scripts(i, device.address)\">Upload DG Scripts</button>\n      &nbsp;<button class=\"delete\" *ngIf=\"(device_list[i].scriptUploadStatus!=undefined)\">{{device_list[i].scriptUploadStatus}}</button>\n\n    </div>\n  </li>\n</ul>\n      <button class=\"delete\" title=\"Push to all\"\n      (click)=\"upload_scripts(device.address)\">Push script to all</button>\n      &nbsp;\n\n      <button class=\"delete\" title=\"Clear Panel\"\n      (click)=\"openDevPanel=false\">Clear Panel</button>\n      &nbsp;\n</div>\n\n\n<div>\n<h2>{{gptitle}}</h2>\n\n<ul class=\"products\">\n  <li *ngFor=\"let grp of dataGroups; let i=index;\">\n    <div (click)=\"records(i)\">\n      <span class=\"badge\">{{i+1}}</span> <span style=\"  display: inline-block; width:220px\">{{grp.name}}</span> &nbsp;\n      <span class=\"type\"> Master </span><span style=\"  display: inline-block; width:270px\">{{grp.master}}</span>\n    </div>\n          &nbsp;\n        <button class=\"delete\" title=\"Compute MD5 hash of master\"\n      (click)=\"masterMD5Hash(i)\">Compare groups to Master</button>\n          &nbsp;\n    <button *ngIf=\"(group_missing_on_master[i])\" class=\"delete\" title=\"Add Group to master\"\n      (click)=\"addGrpToMaster(i)\">Click to add starter group to master</button>\n      &nbsp;\n\n\n\n    </li>\n</ul>\n\n\n</div>"

/***/ }),

/***/ "./src/app/devices/devices.component.ts":
/*!**********************************************!*\
  !*** ./src/app/devices/devices.component.ts ***!
  \**********************************************/
/*! exports provided: DevicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesComponent", function() { return DevicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_dg_script_ready_for_POST_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/dg_script_ready_for_POST.json */ "./src/assets/dg_script_ready_for_POST.json");
var _assets_dg_script_ready_for_POST_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/Object.assign({}, _assets_dg_script_ready_for_POST_json__WEBPACK_IMPORTED_MODULE_1__, {"default": _assets_dg_script_ready_for_POST_json__WEBPACK_IMPORTED_MODULE_1__});
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crypto-js/md5 */ "./node_modules/crypto-js/md5.js");
/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crypto_js_md5__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import devices from '../../assets/devices.json';
//import groups from '../../datagroups.json';





//import * as CryptoJS from 'crypto-js';
var DevicesComponent = /** @class */ (function () {
    function DevicesComponent(route, router, data, rest) {
        this.route = route;
        this.router = router;
        this.data = data;
        this.rest = rest;
        this.grpData = { filename: '' };
        this.groupData = {
            name: '',
            type: '',
            source: 'Direct Input',
            partition: 'Common',
            desc: 'User direct input',
            records: []
        };
        this.openDevPanel = false;
        this.results = {};
        // device_list is for presentiong choices.  It can be only the related devices or all the devices, depending on operation.
        this.device_list = [];
        // device_hostnames is all the devices.
        this.device_hostnames = [];
        this.dataGroups = [];
        this.groups = [];
        this.fileContent = '';
        this.groupname = '';
        this.addGroup = false;
        this.group_missing_on_master = [];
        this.relatedDevices = [];
        this.groupMaster = '';
        this.s1 = '';
        this.title = 'Device List from local JSON file';
        this.gptitle = 'Data Group List';
        this.importFromFile = false;
    }
    DevicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.downloadDGList("datagroups.json");
        this.downloadDevicesList("devices.json");
        this.data.setHostnameList(this.device_hostnames);
        //this.downloadAuth("dgapp1.json");
        this.data.setAuth(this.s1);
        //this.data.deviceList(devices);
        this.data.grp_results.subscribe(function (results) {
            _this.results = results;
        });
        if (typeof this.results.name != 'undefined') {
            this.groupname = this.results.name;
        }
    };
    DevicesComponent.prototype.get_dgs = function (name, addr) {
        this.router.navigate(['/products/', name, addr]);
    };
    DevicesComponent.prototype.get_pools = function () {
        console.log('Get pools');
    };
    DevicesComponent.prototype.upload_scripts = function (i, dest) {
        var _this = this;
        console.log('Upload scripts started');
        // Remove the script first to allow for updates.  
        // POST over existing script does not work.
        this.rest.deleteScript(dest, this.s1).subscribe(function (results) {
            console.log('Script Deleted.');
            _this.device_list[i].scriptUploadStatus = "Script Delete Successful.";
            _this.rest.uploadScript(dest, _this.s1, _assets_dg_script_ready_for_POST_json__WEBPACK_IMPORTED_MODULE_1__).subscribe(function (results) {
                console.log('Script uploaded.');
                _this.device_list[i].scriptUploadStatus = "Script upload Successful.";
            }, function (err) {
                _this.device_list[i].scriptUploadStatus = "Script upload failed.";
                console.log(err.message.message);
            });
        }, function (err) {
            _this.device_list[i].scriptUploadStatus = "Script delete failed.";
            console.log('Script delete fail:', err.message.message);
            _this.rest.uploadScript(dest, _this.s1, _assets_dg_script_ready_for_POST_json__WEBPACK_IMPORTED_MODULE_1__).subscribe(function (results) {
                console.log('Script uploaded.');
                _this.device_list[i].scriptUploadStatus = "Script upload Successful.";
            }, function (err) {
                _this.device_list[i].scriptUploadStatus = "Script upload failed.";
                console.log(err.message.message);
            });
        });
    };
    DevicesComponent.prototype.editCurrent = function () {
        this.router.navigate(['/records/', this.groupname]);
    };
    DevicesComponent.prototype.addNewGroup = function () {
        this.data.setGrpData(this.groupData);
        this.data.setGrpSource('Direct Input');
        this.data.setSaveResults('Not Saved');
        this.router.navigate(['/records/' + this.groupData.name]);
    };
    DevicesComponent.prototype.openDevicesPanel = function () {
        this.openDevPanel = !this.openDevPanel;
        //this.downloadDevicesList('devices.json');
    };
    DevicesComponent.prototype.openRecordsPanel = function (i, grp, dest) {
        var _this = this;
        this.rest.getProduct(grp, dest, this.s1).subscribe(function (group) {
            //recs=data; From master
            //console.log('Received data-group from master: ' , group);
            //group.master=this.groupMaster;
            //group.devices=this.relatedDevices;
            //group.source='BigIP';
            _this.data.setGrpData(group);
            _this.data.setGrpSource('BigIP');
            _this.data.deviceList(_this.dataGroups[i].devices);
            _this.group_missing_on_master[i] = true;
            _this.dataGroups[i].exists = 'yes';
            _this.router.navigate(['/records/' + _this.dataGroups[i].name]);
            //console.log('***',this.group);
        }, function (err) {
            _this.group_missing_on_master[i] = true;
            console.log('Open panel Get Records: ', err.error.message);
        });
    };
    DevicesComponent.prototype.records = function (i) {
        this.data.setDestAddress(this.dataGroups[i].master);
        this.groupMaster = this.dataGroups[i].master;
        this.relatedDevices = this.dataGroups[i].devices;
        this.data.deviceList(this.dataGroups[i].devices);
        this.data.setGrpSource('BigIP');
        this.openRecordsPanel(i, this.dataGroups[i].name, this.dataGroups[i].master);
    };
    DevicesComponent.prototype.addGrpToMaster = function (i) {
        var _this = this;
        this.rest.addDataGroup(this.dataGroups[i], this.dataGroups[i].master, this.s1).subscribe(function (result) {
            _this.group_missing_on_master[i] = false;
        }, function (err) {
            console.log(err);
        });
    };
    DevicesComponent.prototype.onChange = function (fileList) {
        var _this = this;
        var file = fileList[0];
        var fileReader = new FileReader();
        var self = this;
        fileReader.onloadend = function (x) {
            self.fileContent = fileReader.result;
            var res = JSON.parse(self.fileContent);
            res.source = file.name;
            _this.data.setGrpData(res);
            _this.data.setGrpSource(file.name);
            _this.router.navigate(['/records/' + res.name]);
        };
        fileReader.readAsText(file);
    };
    DevicesComponent.prototype.downloadAuth = function (url) {
        var _this = this;
        this.rest.getgrpFromURL('/' + url, url)
            .subscribe(function (res) {
            _this.s1 = res[0].text;
            _this.data.setAuth(_this.s1);
        }, function (err) {
            console.log('Unable to get auth information. ', err);
            _this.s1 = '';
        });
    };
    DevicesComponent.prototype.downloadDGList = function (url) {
        var _this = this;
        this.rest.getgrpFromURL('/' + url, url)
            .subscribe(function (res) {
            _this.groups = res;
            _this.dataGroups = _this.groups;
            //console.log('dldDG: ' , this.dataGroups);
        }, function (err) {
            console.log(err);
            _this.groups = [];
        });
    };
    DevicesComponent.prototype.downloadDevicesList = function (url) {
        var _this = this;
        this.rest.getgrpFromURL('/' + url, url)
            .subscribe(function (res) {
            _this.device_list = res;
            for (var x in _this.device_list) {
                _this.device_list[x].type = 'BigIP',
                    _this.device_list[x].address = _this.device_list[x].connections[0];
                _this.device_hostnames[_this.device_list[x].name] = _this.device_list[x].address;
                //console.log('dev array:', x, this.device_list[x].name ,this.device_hostnames[this.device_list[x].name]);
            }
        }, function (err) {
            console.log(err);
        });
    };
    DevicesComponent.prototype.masterMD5Hash = function (i) {
        var _this = this;
        var dest = this.device_hostnames[this.dataGroups[i].master];
        this.rest.getProduct(this.dataGroups[i].name, dest, this.s1).subscribe(function (group) {
            var hash = crypto_js_md5__WEBPACK_IMPORTED_MODULE_5___default()(group.records.toString()).toString();
            var masterHash = hash;
            console.log('Master records MD5:', masterHash, _this.dataGroups[i].master);
            var _loop_1 = function () {
                dest = _this.device_hostnames[_this.dataGroups[i].devices[x]];
                if (dest != undefined) {
                    var y_1 = x;
                    var dest1_1 = dest;
                    _this.rest.getProduct(_this.dataGroups[i].name, dest1_1, _this.s1).subscribe(function (group) {
                        hash = crypto_js_md5__WEBPACK_IMPORTED_MODULE_5___default()(group.records.toString()).toString();
                        var match = (hash === masterHash) ? 'Match with Master' : 'Does **NOT** match Master';
                        console.info('Records MD5:', hash, _this.dataGroups[i].devices[y_1], dest1_1, match);
                    }, function (err) {
                        console.log('Error while retrieving Subordinate group records:', _this.dataGroups[i].name, dest1_1, err);
                        _this.data.changeMessage(err);
                    });
                }
                else {
                    console.error('Hostname not found for:', _this.dataGroups[i].devices[x]);
                }
            };
            for (var x in _this.dataGroups[i].devices) {
                _loop_1();
            }
        }, function (err) {
            console.log('Error Getting Master Rrecods for MD5:', dest, '-', _this.dataGroups[i].name, err.error.message);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DevicesComponent.prototype, "grpData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DevicesComponent.prototype, "groupData", void 0);
    DevicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-devices',
            template: __webpack_require__(/*! ./devices.component.html */ "./src/app/devices/devices.component.html"),
            styles: [__webpack_require__(/*! ./devices.component.css */ "./src/app/devices/devices.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
    ], DevicesComponent);
    return DevicesComponent;
}());



/***/ }),

/***/ "./src/app/getgrpby-url/getgrpby-url.component.css":
/*!*********************************************************!*\
  !*** ./src/app/getgrpby-url/getgrpby-url.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/getgrpby-url/getgrpby-url.component.html":
/*!**********************************************************!*\
  !*** ./src/app/getgrpby-url/getgrpby-url.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Download Data-Group from URL</h2>\n  <div>\n    <label>URL:\n      <input [(ngModel)]=\"grpData.URL\" placeholder=\"URL\"\n      />\n    </label><br>\n\n\n  </div>\n  <button (click)=\"downloadDG()\">Download</button>&nbsp;&nbsp;&nbsp;&nbsp;\n    <button routerLink=\"/devices/\">\n    Back to Data-Group Import page\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/getgrpby-url/getgrpby-url.component.ts":
/*!********************************************************!*\
  !*** ./src/app/getgrpby-url/getgrpby-url.component.ts ***!
  \********************************************************/
/*! exports provided: GetgrpbyURLComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetgrpbyURLComponent", function() { return GetgrpbyURLComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetgrpbyURLComponent = /** @class */ (function () {
    function GetgrpbyURLComponent(rest, route, router, data) {
        this.rest = rest;
        this.route = route;
        this.router = router;
        this.data = data;
        this.grpData = { URL: '' };
        this.results = {};
    }
    GetgrpbyURLComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.grp_results.subscribe(function (results) { return _this.results = results; });
    };
    GetgrpbyURLComponent.prototype.downloadDG = function () {
        var _this = this;
        var URL = this.parseURL(this.grpData.URL);
        this.rest.getgrpFromURL('/ext/', this.grpData.URL)
            .subscribe(function (res) {
            res.source = 'URL';
            _this.data.setGrpData(res);
            _this.data.setGrpSource('URL');
            _this.router.navigate(['/records/' + res.name]);
        }, function (err) {
            console.log(err);
            _this.data.changeMessage(err);
        });
    };
    GetgrpbyURLComponent.prototype.parseURL = function (url) {
        var parser = document.createElement('a'), searchObject = {}, queries, split, i;
        // Let the browser do the work
        parser.href = url;
        // Convert query string to object
        queries = parser.search.replace(/^\?/, '').split('&');
        for (i = 0; i < queries.length; i++) {
            split = queries[i].split('=');
            searchObject[split[0]] = split[1];
        }
        return {
            protocol: parser.protocol,
            host: parser.host,
            hostname: parser.hostname,
            port: parser.port,
            pathname: parser.pathname,
            search: parser.search,
            searchObject: searchObject,
            hash: parser.hash
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GetgrpbyURLComponent.prototype, "grpData", void 0);
    GetgrpbyURLComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-getgrpby-url',
            template: __webpack_require__(/*! ./getgrpby-url.component.html */ "./src/app/getgrpby-url/getgrpby-url.component.html"),
            styles: [__webpack_require__(/*! ./getgrpby-url.component.css */ "./src/app/getgrpby-url/getgrpby-url.component.css")]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], GetgrpbyURLComponent);
    return GetgrpbyURLComponent;
}());



/***/ }),

/***/ "./src/app/product-add/product-add.component.css":
/*!*******************************************************!*\
  !*** ./src/app/product-add/product-add.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Products Component's private CSS styles */\n.products {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.products li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.products li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.products a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px;\n}\n.products a:hover {\n  color:#607D8B;\n}\n.products .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton.delete {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/product-add/product-add.component.html":
/*!********************************************************!*\
  !*** ./src/app/product-add/product-add.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Add Data-Group</h2>\n  <div>\n    <label>Group Name:\n      <input [(ngModel)]=\"groupData.name\" placeholder=\"Data-Group Name\"/>\n    </label><br>\n    <label>Group type (string, integer, IP ):\n      <input [(ngModel)]=\"groupData.type\" placeholder=\"Data-Group type\"/>\n    </label><br>\n    <label>Group Partition (default=Common):\n      <input [(ngModel)]=\"groupData.partition\" placeholder=\"Data-Group Partition\"/>\n    </label><br>\n    <label>Group Description (Optional):\n      <input [(ngModel)]=\"groupData.desc\" placeholder=\"Data-Group Description\"/>\n    </label><br>\n\n  </div>\n  <button (click)=\"addGroup()\">Save</button>\n</div>\n"

/***/ }),

/***/ "./src/app/product-add/product-add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/product-add/product-add.component.ts ***!
  \******************************************************/
/*! exports provided: ProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function() { return ProductAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductAddComponent = /** @class */ (function () {
    function ProductAddComponent(rest, route, router, data) {
        this.rest = rest;
        this.route = route;
        this.router = router;
        this.data = data;
        this.s1 = '';
        this.groupData = { name: '', type: '', desc: '', partition: '' };
    }
    ProductAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.curDevAuth.subscribe(function (s1) { return _this.s1 = s1; });
    };
    ProductAddComponent.prototype.addGroup = function () {
        var _this = this;
        this.rest.addDataGroup(this.groupData, this.route.snapshot.params['id'], this.s1).subscribe(function (result) {
            _this.router.navigate(['/products']);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductAddComponent.prototype, "groupData", void 0);
    ProductAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-add',
            template: __webpack_require__(/*! ./product-add.component.html */ "./src/app/product-add/product-add.component.html"),
            styles: [__webpack_require__(/*! ./product-add.component.css */ "./src/app/product-add/product-add.component.css")]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], ProductAddComponent);
    return ProductAddComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Products Component's private CSS styles */\n.products {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.products li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.products li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.products a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px;\n}\n.products a:hover {\n  color:#607D8B;\n}\n.products .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton.delete {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"group\" class=\"products\">\n  <h2>{{group.name | uppercase}} Data-group Details</h2>\n  <!-- <div><span>Description: </span>{{group.desc}}</div> !-->\n  <div><span>Type:        </span>{{group.type}}</div>\n  <!--<div><span>Update Date: </span>{{product.updated_at | date}}</div> !-->\n  <div>\n    <button routerLink=\"/product-edit/{{group.name}}\">\n      Edit\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(rest, route, router) {
        this.rest = rest;
        this.route = route;
        this.router = router;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rest.getProduct(this.route.snapshot.params['id'], '', '').subscribe(function (data) {
            console.log(data);
            _this.group = data;
        });
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product-edit/product-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Big-IP Data-Group Edit</h2>\n  <div>\n    <label>Group Name:\n      <input [(ngModel)]=\"productData.prod_name\" placeholder=\"Group Name\"/>\n    </label><br>\n    <label>Group Type:\n      <input [(ngModel)]=\"productData.prod_desc\" placeholder=\"Group Type\"/>\n    </label><br>\n \n  </div>\n  <button (click)=\"updateProduct()\">Update</button>\n</div>\n"

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.ts ***!
  \********************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(rest, route, router) {
        this.rest = rest;
        this.route = route;
        this.router = router;
        this.productData = { prod_name: '', prod_desc: '', prod_price: 0 };
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rest.getProduct(this.route.snapshot.params['id'], '', '').subscribe(function (data) {
            console.log(data);
            _this.productData = data;
        });
    };
    ProductEditComponent.prototype.updateProduct = function () {
        var _this = this;
        this.rest.updateProduct(this.route.snapshot.params['id'], this.productData).subscribe(function (result) {
            _this.router.navigate(['/product-details/' + result._id]);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductEditComponent.prototype, "productData", void 0);
    ProductEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__(/*! ./product-edit.component.html */ "./src/app/product-edit/product-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-edit.component.css */ "./src/app/product-edit/product-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Products Component's private CSS styles */\n.products {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 20em;\n}\n.products li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n   width: 20em;\n}\n.products li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.products a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px;\n   width: 25em;\n}\n.products a:hover {\n  color:#607D8B;\n}\n.products .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton.delete {\n  position: relative;\n  left: 330px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Big-IP Internal Data-Group List</h2>\n\n<div>\n  <button mat-raised-button routerLink=\"/devices/\">\n    Back\n  </button>&nbsp;&nbsp;&nbsp;&nbsp;\n  \n  <button mat-raised-button (click)=\"add()\">\n    Create New Internal Data-Group\n  </button>&nbsp;&nbsp;&nbsp;&nbsp;\n\n  <button mat-raised-button routerLink=\"/getgrpbyurl/\">\n    Download by URL\n  </button>\n\n</div>\n\n<ul class=\"products\">\n  <li *ngFor=\"let p of groups; let i=index;\">\n    <a (click)=\"records(p.name)\">\n      <span class=\"badge\">{{i+1}}</span> {{p.name}}\n    </a>\n    <button class=\"delete\" title=\"delete Group\"\n      (click)=\"delete(p.name)\">x</button>\n      &nbsp;\n        <button class=\"delete\" title=\"Edit Group Records\"\n      (click)=\"records(p.name)\">Records</button>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = /** @class */ (function () {
    function ProductComponent(rest, route, router, data) {
        this.rest = rest;
        this.route = route;
        this.router = router;
        this.data = data;
        this.products = [];
        this.groups = [];
        this.name = "";
        this.address = "";
        this.s1 = "";
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.name = this.route.snapshot.params['id1'];
        this.address = this.route.snapshot.params['id2'];
        this.data.setDestAddress(this.address);
        this.data.curDevAuth.subscribe(function (s1) { return _this.s1 = s1; });
        this.getProducts();
    };
    ProductComponent.prototype.getProducts = function () {
        var _this = this;
        this.groups = [];
        var elmnt = 'ltm/data-group/internal';
        //this.products = [];
        this.rest.getProducts(elmnt, this.address, this.s1).subscribe(function (data) {
            //console.log(data.items);
            // todo:  data.service should be imported and grpSrc should be set to 'BigIP' here.
            _this.products = data;
            _this.groups = data.items;
        });
    };
    ProductComponent.prototype.getGrpfromGithug = function () {
        this.router.navigate(['/getgrpfromGithub']);
    };
    ProductComponent.prototype.add = function () {
        this.router.navigate(['/product-add/' + this.address]);
    };
    ProductComponent.prototype.records = function (groupname) {
        this.data.setGrpSource('BigIP');
        this.data.setGrpData({});
        this.router.navigate(['/records/' + groupname]);
    };
    ProductComponent.prototype.delete = function (name) {
        var _this = this;
        this.rest.deleteDataGroup(name, this.address, this.s1)
            .subscribe(function (res) {
            _this.getProducts();
        }, function (err) {
            console.log(err);
        });
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/record-details/record-details.component.css":
/*!*************************************************************!*\
  !*** ./src/app/record-details/record-details.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/record-details/record-details.component.html":
/*!**************************************************************!*\
  !*** ./src/app/record-details/record-details.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Big-IP Data-Group Record Add/Edit</h2>\n  <div>\n    \n      <div *ngIf=\"(this.operation=='UPDATE')\"><label>Record Name/Key:&nbsp;<input  [(ngModel)]=\"recordData.name\" placeholder=\"Record Name\" readonly=\"true\" /> </label></div>\n      <div *ngIf=\"(this.operation!='UPDATE')\"><label>Record Name/Key:&nbsp;<input  [(ngModel)]=\"recordData.name\" placeholder=\"Record Name\" /></label></div>\n    <br>\n    <label>Record Data:\n      <input [(ngModel)]=\"recordData.data\" placeholder=\"Record Data\"/>\n    </label><br>\n \n  </div>\n  <p>\n  <button (click)=\"update()\">{{this.operation}}</button>\n  &nbsp;\n  <button *ngIf=\"(this.operation=='UPDATE')\"    (click)=\"delete(group,recordData.name)\">Delete</button>\n  &nbsp;\n  <button *ngIf=\"(this.operation=='ADD')\"    (click)=\"update('repeat')\">Save and add another</button>\n  &nbsp;\n  <button (click)=\"cancel()\">Cancel</button>\n</div>\n\n<div *ngIf=\"(op_result!='')\">\n<p><p>\n  {{op_result}}\n<p>\n  {{save_results}}\n\n</div>\n"

/***/ }),

/***/ "./src/app/record-details/record-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/record-details/record-details.component.ts ***!
  \************************************************************/
/*! exports provided: RecordDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordDetailsComponent", function() { return RecordDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecordDetailsComponent = /** @class */ (function () {
    function RecordDetailsComponent(rest, route, router, data) {
        this.rest = rest;
        this.route = route;
        this.router = router;
        this.data = data;
        this.operation = '';
        this.group = '';
        this.save_results = '';
        this.op_result = '';
        this.s1 = '';
        this.recordData = { name: '', data: '' };
    }
    RecordDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.operation = this.route.snapshot.params['id1'];
        this.group = this.route.snapshot.params['id2'];
        this.recordData.name = this.route.snapshot.params['id3'];
        this.recordData.data = this.route.snapshot.params['id4'];
        this.data.currentMessage.subscribe(function (save_results) { return _this.save_results = save_results; });
    };
    RecordDetailsComponent.prototype.delete = function (group, name) {
        var _this = this;
        this.rest.deleteRecord(group, name, ' ', this.s1)
            .subscribe(function (res) {
            _this.data.changeMessage("Updated running config only.");
            _this.router.navigate(['/records/' + _this.group]);
        }, function (err) {
            console.log(err);
            _this.data.changeMessage(err);
        });
    };
    RecordDetailsComponent.prototype.cancel = function () {
        this.router.navigate(['/records/' + this.group]);
    };
    RecordDetailsComponent.prototype.update = function (op) {
        var _this = this;
        this.rest.recordOps(this.operation, this.group, this.recordData).subscribe(function (result) {
            _this.op_result = _this.operation + ' OK';
            _this.data.changeMessage("Updated running config only.");
            if (op == "repeat") {
                _this.recordData.name = "";
                _this.router.navigate(['/record-details/', 'ADD', _this.group, '', '']);
            }
            else {
                _this.router.navigate(['/records/' + _this.group]);
            }
        }, function (err) {
            console.log(err);
            _this.data.changeMessage(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecordDetailsComponent.prototype, "recordData", void 0);
    RecordDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-record-details',
            template: __webpack_require__(/*! ./record-details.component.html */ "./src/app/record-details/record-details.component.html"),
            styles: [__webpack_require__(/*! ./record-details.component.css */ "./src/app/record-details/record-details.component.css")]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], RecordDetailsComponent);
    return RecordDetailsComponent;
}());



/***/ }),

/***/ "./src/app/records/records.component.css":
/*!***********************************************!*\
  !*** ./src/app/records/records.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Products Component's private CSS styles */\n.products {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 800em;\n}\n.products li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n   width: 20em;\n}\n.products li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.products a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px;\n   width: 25em;\n}\n.products a:hover {\n  color:#607D8B;\n}\n.products .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: 10px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 25px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton.delete {\n  position: relative;\n  left: 330px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}\ntable {\n  width: 80%;\n}\n.mat-form-field {\n  font-size: 15px;\n  width: 100%;\n}\n.mat-select-content{\n    width:450px;\n    background-color: lightgrey;\n    font-size: 13px;\n}\ntd, th {\n  width: 25%;\n}\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #00FF7F;\n}\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n.example-element-row td {\n  border-bottom-width: 0;\n}\n/* =========================================*/\n.dgPushStatus-container {\n  display: inline;\n  height: 400px;\n  width: 550px;\n  overflow: auto;\n  width: 50%;\n}\ntable {\n  width: 800px;\n}\ntd.mat-column-star {\n  width: 20px;\n  padding-right: 8px;\n}\nth.mat-column-position, td.mat-column-position {\n  padding-left: 8px;\n}\n.mat-table-sticky:first-child {\n  border-right: 1px solid #e0e0e0;\n}\n.mat-table-sticky:last-child {\n  border-left: 1px solid #e0e0e0;\n}\n"

/***/ }),

/***/ "./src/app/records/records.component.html":
/*!************************************************!*\
  !*** ./src/app/records/records.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"group\" >\n<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <div class=\"button-row\">\n      <button mat-raised-button (click)=\"recOps(0,group.name, '', '', 'ADD')\"> Add Record </button>&nbsp;&nbsp;\n      <span *ngIf=\"(grpSrc=='BigIP')\"><button mat-raised-button (click)=\"inMemRecOps(0 ,'','','','save')\"> SAVE </button>&nbsp;&nbsp;</span>\n      <button mat-raised-button (click)=\"gotoDGList()\"> Back to DG List</button>&nbsp;&nbsp;\n      <button mat-raised-button (click)=\"pushToOtherBigIPs()\"> Push to Other Devices </button>&nbsp;&nbsp;\n      <span style=\"color: yellow\">{{ save_results }}</span>&nbsp;&nbsp;\n      <span>Source: </span>&nbsp;<span style=\"color: orange\">{{ grpSrc }}</span>&nbsp;&nbsp;\n\n    </div>\n    <span class=\"spacer\"></span>\n  </mat-toolbar-row>\n</mat-toolbar>\n</div>\n\n<!-- \n<div *ngIf=\"group\" class=\"products\"> \n\n \n   <div>\n     <button (click)=\"add(group.name)\">\n       Add New Record\n     </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n     <button routerLink=\"/devices\">\n       Back to Data-Group Import\n     </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n     <button *ngIf=\"(grpSrc=='BigIP')\" (click)=\"save()\">\n       SAVE\n     </button>&nbsp;\n     {{ save_results }}&nbsp;&nbsp;&nbsp;&nbsp;\n     <button (click)=\"pushToOtherBigIPs()\">\n       Push to other Devicess\n     </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n     Source: {{ grpSrc }}\n   </div>\n </div>\n-->\n\n\n   <div *ngIf=\"(deviceSlct)\">\n   <p>\n    <mat-form-field style=\"width:400px;\">\n     <mat-label>Devices to receive Data-Group</mat-label>\n     <mat-select #mySelect multiple (selectionChange)=\"getSelectedDevices($event)\">\n       <mat-option *ngFor=\"let dev of deviceSelect\" [value]=\"dev\">{{dev}}</mat-option>\n       </mat-select>      \n\n      </mat-form-field>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <button style=\"display: inline;\" mat-raised-button *ngIf=\"(selectionMade)\" (click)=\"startPush(selected)\">   GO   </button>\n      <button style=\"display: inline;\" mat-raised-button (click)=\"deviceSlct=false\">   Clear   </button>\n   </div>\n \n\n\n\n<div style=\"width: 50%\" *ngIf=\"(dgPushStatus.length!=0)\" class=\"dgPusStatus-container mat-elevation-z8\">\n  <table style=\"width: 100%\" mat-table [dataSource]=\"pushStatusDataSource\">\n\n    <!-- Name Column \n    <ng-container matColumnDef=\"label\" sticky>\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.label}} </td>\n    </ng-container>-->\n\n    <!-- Device Name Column -->\n    <ng-container matColumnDef=\"dest\">\n      <th mat-header-cell *matHeaderCellDef> Device Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.dest}} </td>\n    </ng-container>\n\n    <!-- Results Column -->\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef> Status </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"statusDisplayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: statusDisplayedColumns;\"></tr>\n  </table>\n        <button style=\"display: inline;\" mat-raised-button (click)=\"dgPushStatus=[]\">   Clear   </button>\n</div>\n\n\n\n<div *ngIf=\"recOperation!=''\">\n  <h2>Big-IP Data-Group Record Add/Edit</h2>\n  <div>\n\n<div *ngIf=\"(this.recOperation=='UPDATE')\"><label>Record Name/Key:&nbsp;<input  [(ngModel)]=\"recordData.name\" placeholder=\"Record Name\" readonly=\"true\" /> </label></div>\n      <div *ngIf=\"(this.recOperation!='UPDATE')\"><label>Record Name/Key:&nbsp;<input  [(ngModel)]=\"recordData.name\" placeholder=\"Record Name\" /></label></div>\n<!--\n    <label>Record Name/Key:\n      <input [(ngModel)]=\"recordData.name\" placeholder=\"Record Name/Key\" readonly=\"(recOperation=='UPDATE')\" />\n    </label>\n-->\n\n    <br>\n    <label>Record Data:&nbsp;\n      <input [(ngModel)]=\"recordData.data\" placeholder=\"Record Data\"/>\n    </label><br>\n   </div>\n  <p>\n  <button (click)=\"inMemRecOps(recordData.index, group.name , recordData.name, recordData.data, recOperation)\">Save</button>\n  &nbsp;\n  <button *ngIf=\"(recOperation=='UPDATE')\"    (click)=\"inMemRecOps(recordData.index, group.name, recordData.name, recordData.data , 'DELETE')\">Delete</button>\n  &nbsp;\n  <button *ngIf=\"(recOperation=='ADD')\"    (click)=\"inMemRecOps(recordData.index, group.name , recordData.name, recordData.data ,'REPEAT')\">Save and add another</button>\n  &nbsp;\n  <button (click)=\"this.recOperation='';\">Cancel</button>\n\n\n<div *ngIf=\"(op_result!='')\">\n  <p><p>\n    {{op_result}}\n  <p>\n    {{save_results}}\n</div>\n\n</div>\n\n\n\n\n<h2>{{group.name | uppercase}} Data-group Records</h2>\n<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\" style=\"width: 80%\">\n  <table style=\"width: 100%\" mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let row\"> \n\t    <button (Click)=\"delete(group.name,row.name)\">\n    \t\t  Delete\n    \t</button>\n\n      </td>\n    </ng-container>\n\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n      <td mat-footer-cell *matFooterCellDef> Add </td>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"data\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Data </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.data}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n     <tr mat-row *matRowDef=\"let i=index;let row; columns: displayedColumns; \"(click)=\"recOps(i,group.name,row.name,row.data,'UPDATE')\"\n    class=\"example-element-row\">\n    </tr>   \n<!--    <tr mat-row *matRowDef=\"let row; columns: displayedColumns; \"(click)=\"onRowClicked(group.name,row.name,row.data)\"\n    class=\"example-element-row\">\n    </tr> -->\n\n  </table>\n \n  <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/records/records.component.ts":
/*!**********************************************!*\
  !*** ./src/app/records/records.component.ts ***!
  \**********************************************/
/*! exports provided: RecordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsComponent", function() { return RecordsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RecordsComponent = /** @class */ (function () {
    function RecordsComponent(http, rest, route, router, data) {
        this.http = http;
        this.rest = rest;
        this.route = route;
        this.router = router;
        this.data = data;
        this.recordData = { index: 0, name: '', data: '' };
        this.group = [];
        this.save_results = "Not Saved";
        this.displayedColumns = ['name', 'data'];
        this.statusDisplayedColumns = ['dest', 'status'];
        this.dgPushStatus = [];
        this.results = {};
        this.deviceList = {};
        this.grpSrc = "";
        this.deviceSlct = false;
        this.destAddress = '';
        this.relatedDevices = [];
        this.masterAddress = '';
        this.selectionMade = false;
        this.deviceSelect = [];
        this.selected = [];
        this.deviceMap = {};
        this.recOperation = "";
        this.recordKey = "";
        this.recordValue = "";
        // device_hostnames is all the devices.
        this.device_hostnames = [];
        this.s1 = '';
    }
    RecordsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //load the list of devices to manage, this can be per data-group or all bigips.
        // If per group, then it is set by "devices" component from data-group record on file.
        // If all bigips then it is from devices file on record.
        this.data.currentDeviceList.subscribe(function (deviceList) { return _this.deviceList = deviceList; });
        this.relatedDevices = this.deviceList;
        this.data.allDeviceHostnames.subscribe(function (device_hostnames) { return _this.device_hostnames = device_hostnames; });
        //this.downloadAuth("dgapp1.json");    
        this.data.curDevAuth.subscribe(function (s1) { return _this.s1 = s1; });
        //load the group records to display on page
        this.data.grp_results.subscribe(function (results) {
            _this.results = results;
        });
        // load the source of the group data URL/BigIP/File etc..
        this.data.grp_source.subscribe(function (grpSrc) { return _this.grpSrc = grpSrc; });
        // load IP address of BigIP currently getting records from, this is the "master"
        this.data.devAddress.subscribe(function (destAddress) { return _this.destAddress = destAddress; });
        this.masterAddress = this.destAddress;
        if (Object.getOwnPropertyNames(this.results).length === 0) {
            //|| this.grpSrc == 'BigIP'
            var recs = { "records": [] };
            this.getRecords();
            this.grpSrc = 'BigIP';
            this.data.setGrpSource(this.grpSrc);
        }
        else {
            this.data.setGrpSource(this.grpSrc);
            this.group = this.results;
            //this.group.devices=this.relatedDevices;
            this.data.setGrpData(this.results);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.results.records);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
        this.data.currentMessage.subscribe(function (save_results) { return _this.save_results = save_results; });
    };
    RecordsComponent.prototype.downloadAuth = function (url) {
        var _this = this;
        this.rest.getgrpFromURL('/' + url, url)
            .subscribe(function (res) {
            _this.s1 = res[0].text;
        }, function (err) {
            console.log('Unable to get auth information. ', err);
            _this.s1 = '';
        });
    };
    RecordsComponent.prototype.getRecords = function () {
        var _this = this;
        this.rest.getProduct(this.route.snapshot.params['id'], this.destAddress, this.s1).subscribe(function (data) {
            //recs=data;
            console.log('Get Records: ');
            _this.group = data;
            //this.group.source = 'BigIP';
            //this.group.devices= this.relatedDevices;
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](data.records);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            //console.log('***',this.group);
        }, function (err) {
            _this.save_results = err.error.message;
            console.log('Get Records: ', err.error.message);
        });
    };
    RecordsComponent.prototype.recOps = function (index, groupname, key, value, op) {
        // Called from table record selection.
        this.recordData.name = key;
        this.recordData.data = value;
        this.recordData.index = index;
        // enables record edit panel
        this.recOperation = op;
    };
    RecordsComponent.prototype.inMemRecOps = function (index, groupname, key, value, op) {
        var _this = this;
        console.log('>>> ', index, groupname, key, value, op, this.relatedDevices);
        if (this.grpSrc == 'BigIP') {
            /*   if (op=='ADD') {
                  this.add(groupname);
                } else if (op=='UPDATE') {
                  this.onRowClicked(groupname, key, value);
                } else if (op== 'DELETE') {
                   this.delete(groupname, key)
                } */
            //console.log('master hostname: ' , master, this.device_hostnames[this.masterAddress]);
            if (this.device_hostnames[this.masterAddress] != undefined) {
                var dest_1 = this.device_hostnames[this.masterAddress];
                if (op != 'save') {
                    this.recordOps(op, groupname, this.recordData, dest_1).subscribe(function (result) {
                        _this.data.changeMessage("Updated running config only.");
                        _this.getRecords();
                        console.log('Master Device update:', _this.masterAddress, dest_1, 'Other devices: ', _this.relatedDevices);
                        if (op == "REPEAT") {
                            _this.recordData.name = "";
                            _this.recOperation = 'ADD';
                            //this.router.navigate(['/record-details/', 'ADD', this.group , '', '']);
                        }
                        else {
                            //this.router.navigate(['/records/'+this.group]);
                            _this.recOperation = "";
                        }
                    }, function (err) {
                        _this.dgPushStatus.push({ dest: dest_1, label: _this.masterAddress, group: groupname, status: err, operation: op });
                        console.log(err);
                        _this.data.changeMessage(err);
                    });
                }
                else {
                    this.recordOps('save', groupname, this.recordData, dest_1).subscribe(function (result) {
                        _this.data.changeMessage("Saved to Permanent Config");
                        console.log('Master Device update:', _this.masterAddress, dest_1);
                    }, function (err) {
                        console.log(err);
                        _this.dgPushStatus.push({ dest: dest_1, label: _this.masterAddress, group: "", status: err, operation: op });
                        _this.data.changeMessage(err);
                    });
                }
                var _loop_1 = function () {
                    var dest_2 = this_1.device_hostnames[this_1.relatedDevices[x]];
                    console.log('Related device:', dest_2);
                    if (dest_2 != undefined) {
                        this_1.recordOps(op, groupname, this_1.recordData, dest_2).subscribe(function (result) {
                            console.log('Related Device updated:', dest_2);
                        }, function (err) {
                            console.log(err);
                            _this.dgPushStatus.push({ dest: dest_2, label: _this.relatedDevices[x], group: groupname, status: err, operation: op });
                            _this.data.changeMessage(err);
                        });
                    }
                };
                var this_1 = this;
                for (var x in this.relatedDevices) {
                    _loop_1();
                }
            }
            else {
                this.dgPushStatus.push({ dest: this.masterAddress, label: this.masterAddress, group: "", status: "Could not find destination hostname", operation: op });
                this.data.changeMessage('No hostname for ' + this.masterAddress);
            }
        }
        else {
            if (op == 'ADD' || op == 'REPEAT') {
                this.group.records.push({ "name": key, "data": value });
                console.log(this.group);
                if (op == 'REPEAT') {
                    this.recordData.name = '';
                    this.recordData.data = '';
                    this.recOperation = op;
                }
            }
            else if (op == 'UPDATE') {
                this.group.records[index].data = value;
                console.log('Added record:', this.group[index]);
            }
            else if (op == 'DELETE') {
                this.group.records.splice(index, index);
                console.log('Deleted Record:', this.group[index]);
            }
        }
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.group.records);
    };
    /*
    recordUpdate(index ,groupname, key, value, op, dest ) {
  
      this.recordOps(op, groupname, this.recordData, this.masterAddress).subscribe((result) => {
        //this.op_result = this.operation + ' OK';
        this.data.changeMessage("Updated running config only.");
        this.getRecords();
  
        if (op=="REPEAT") {
          this.recordData.name =  "";
          this.recOperation='ADD';
          //this.router.navigate(['/record-details/', 'ADD', this.group , '', '']);
        } else {
          //this.router.navigate(['/records/'+this.group]);
          this.recOperation="";
        }
  
      }, (err) => {
        console.log(err);
        this.data.changeMessage(err);
      });
  
    }
    */
    RecordsComponent.prototype.recordOps = function (operation, groupname, record, dest) {
        var oper = '';
        if (operation == 'ADD' || operation == 'REPEAT') {
            oper = 'add';
        }
        else if (operation == 'UPDATE') {
            oper = 'edit';
        }
        else {
            oper = operation.toLowerCase();
        }
        var rec = {};
        if (operation == 'save' || operation == 'SAVE') {
            rec = { "command": "run", "name": "/Common/add-rec", "utilCmdArgs": "save" };
        }
        else {
            record.data = record.data.replace(/'/g, "`");
            //console.log('data:', record.data);
            var record_data = (oper == 'delete' || record.data == '') ? "\}\"" : "{ data \'" + record.data + "\'\}\}\"";
            rec = { "command": "run", "name": "/Common/add-rec", "utilCmdArgs": oper + "-record " + groupname + " \"\{ " + record.name + record_data };
        }
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Content-Type': 'application/json',
                //    'Authorization': 'Basic '+this.s1,
                'target': dest
            })
        };
        var endpoint = "/mgmt/tm/cli/script";
        return this.http.post(endpoint, JSON.stringify(rec), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (_) {
            //console.log(operation+" record id=${record.name}");
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(this.handleError('Failed: ' + rec, groupname, dest)));
    };
    RecordsComponent.prototype.add = function (groupname) {
        //this.router.navigate(['/record-details/', 'ADD', groupname , '', '']);
        //this.Operation='ADD'
    };
    RecordsComponent.prototype.onRowClicked = function (groupname, recname, recvalue) {
        this.router.navigate(['/record-details/', 'UPDATE', groupname, recname, recvalue]);
    };
    RecordsComponent.prototype.delete = function (group, name) {
        var _this = this;
        this.rest.deleteRecord(group, name, ' ', this.s1)
            .subscribe(function (res) {
            _this.getRecords();
            _this.save_results = "Written to running config only.";
        }, function (err) {
            console.log(err);
        });
    };
    RecordsComponent.prototype.gotoDGList = function () {
        if (this.grpSrc == 'BigIP' && this.save_results != 'Saved to Permanent Config') {
            this.inMemRecOps(0, '', '', '', 'save');
        }
        this.router.navigate(['/devices']);
    };
    /*
       pushToOtherBigIPs , prepares the selection list.
         - when editing an existing dat-grou, the selection list is only the subordinates.
         - when importing a new data-group, the selection list is all Big-IPs.
       getSelectedDevices, toggles GO button
       startPush, intiates the transfer.
   
     */
    RecordsComponent.prototype.pushToOtherBigIPs = function () {
        console.log('lists:', this.deviceList, this.device_hostnames);
        var dev = {};
        this.deviceSelect = [];
        this.deviceMap = {};
        this.deviceSlct = true;
        if (this.grpSrc == 'BigIP' && this.save_results != 'Saved to Permanent Config') {
            this.inMemRecOps(0, '', '', '', 'save');
            this.deviceSelect = this.deviceList;
        }
        else {
            this.deviceList = this.device_hostnames;
            for (var x in Object.keys(this.deviceList)) {
                dev = Object.keys(this.deviceList)[x];
                //console.log('==', dev, x , Object.keys(this.deviceList)[x]);
                //if (dev.type=='bigip') {
                this.deviceSelect.push(dev);
                //this.deviceMap[dev.address] = dev.name;
                //}
            }
        }
    };
    RecordsComponent.prototype.getSelectedDevices = function (event) {
        this.selected = event.value;
        console.log('Selected value -> ', this.selected);
        if (event.value.length == 0) {
            this.selectionMade = false;
        }
        else {
            this.selectionMade = true;
        }
    };
    RecordsComponent.prototype.startPush = function () {
        this.dgPushStatus = [];
        for (var dev in this.selected) {
            //this.rest.addGroup(this.group);
            var dest = this.device_hostnames[this.selected[dev]];
            //console.log('Start Push', this.selected[dev], dest);
            if (dest != undefined) {
                this.addGroup(this.group, dest).subscribe(function (result) {
                    console.log('returned Group .');
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                this.dgPushStatus.push({ dest: this.selected[dev], label: this.selected[dev], group: '', status: 'Hostname not found', operation: 'add group' });
            }
        }
    };
    RecordsComponent.prototype.addGroup = function (group, dest) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.s1,
                'target': dest,
            })
        };
        var grp = {};
        grp.name = group.name;
        grp.type = group.type;
        grp.partition = group.partition;
        //grp.description=group.description;
        grp.records = group.records;
        var datagroup = JSON.stringify(grp);
        //console.log('** Grp:', dest, datagroup);
        //datagroup = {"name": group.name, "partition": "Common", "type": group.type };
        return this.http.post('/mgmt/tm/ltm/data-group/internal/', datagroup, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (group) {
            _this.dgPushStatus.push({ dest: dest, label: _this.deviceMap[dest], group: group, status: 'OK', operation: 'Push to Big-IPs' });
            _this.pushStatusDataSource = _this.dgPushStatus.slice();
            console.log("added group w/ id=", group.name, 'to:', dest, 'Array length:', _this.pushStatusDataSource.length, _this.pushStatusDataSource[_this.pushStatusDataSource.length - 1]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(this.handleError('Push to Big-IPs', group.name, dest)));
    };
    RecordsComponent.prototype.handleError = function (operation, group, dest, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            //console.error(error.error.message); // log to console instead
            console.error(error);
            // TODO: better job of transforming error for user consumption
            //console.log(dest, `${operation} failed: ${error.message}`);
            _this.dgPushStatus.push({ dest: dest, label: _this.deviceMap[dest], group: group, status: error.error.message, operation: operation });
            _this.pushStatusDataSource = _this.dgPushStatus.slice();
            console.log('Push Status:', _this.pushStatusDataSource);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(result);
        };
    };
    /*  */
    RecordsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecordsComponent.prototype, "recordData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], RecordsComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], RecordsComponent.prototype, "paginator", void 0);
    RecordsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-records',
            template: __webpack_require__(/*! ./records.component.html */ "./src/app/records/records.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./records.component.css */ "./src/app/records/records.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]])
    ], RecordsComponent);
    return RecordsComponent;
}());



/***/ }),

/***/ "./src/app/rest.service.ts":
/*!*********************************!*\
  !*** ./src/app/rest.service.ts ***!
  \*********************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var endpoint = '/mgmt/tm/';
var partition = '~Common~';
var elmnt = 'ltm/data-group/internal/';
var cliscript = 'cli/script';
var s1 = "YWRtaW46YWRtaW4=";
//  bigip1  'Authorization': 'Basic YWRtaW46Ym13MjAwMSE=',
//     YWRtaW46YWRtaW4=',
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + s1,
        'target': ''
    })
};
var RestService = /** @class */ (function () {
    function RestService(http) {
        this.http = http;
    }
    RestService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    RestService.prototype.getProducts = function (elmnt, dest, s1) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                //'Authorization': 'Basic '+s1,
                'target': dest
            })
        };
        return this.http.get(endpoint + elmnt, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    RestService.prototype.getgrpFromURL = function (loc, url) {
        var URLOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'target': url
            })
        };
        return this.http.get(loc, URLOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    RestService.prototype.getProduct = function (id, dest, s1) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                //  'Authorization': 'Basic '+s1,
                'target': dest
            })
        };
        console.log('http:', httpOptions.headers);
        return this.http.get(endpoint + elmnt + partition + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    RestService.prototype.addDataGroup = function (group, dest, s1) {
        var datagroup = { "name": group.name, "partition": "Common", "type": group.type, "description": group.desc };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                //'Authorization': 'Basic '+s1,
                'target': dest
            })
        };
        console.log(endpoint + 'ltm/data-group/' + 'internal/', JSON.stringify(datagroup), httpOptions);
        return this.http.post(endpoint + 'ltm/data-group/' + 'internal/', JSON.stringify(datagroup), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (group) { return console.log("added group w/ id=" + JSON.stringify(group.name)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addProduct')));
    };
    RestService.prototype.addGroup = function (group, dest, s1) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                //'Authorization': 'Basic '+s1,
                'target': dest
            })
        };
        console.log('** Grp:', group);
        var datagroup = { "name": group.name, "partition": "Common", "type": group.type };
        console.log(endpoint + 'data-group/' + 'internal/', JSON.stringify(datagroup), httpOptions);
        return this.http.post(endpoint + 'data-group/' + 'internal/', JSON.stringify(datagroup), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (group) { return console.log("added group w/ id=" + JSON.stringify(group.name)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addProduct')));
    };
    RestService.prototype.updateProduct = function (id, product) {
        return this.http.put(endpoint + 'products/' + id, JSON.stringify(product), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("updated product id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateProduct')));
    };
    RestService.prototype.deleteRecord = function (groupname, recname, dest, s1) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                //'Authorization': 'Basic '+s1,
                'target': dest
            })
        };
        var record = { "command": "run", "name": "/Common/add-rec", "utilCmdArgs": "delete-record " + groupname + " \'\{ " + recname + " \}\'" };
        return this.http.post(endpoint + cliscript, JSON.stringify(record), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("deleted record id=" + recname); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteProduct')));
    };
    RestService.prototype.recordOps = function (operation, groupname, record) {
        var oper = (operation == 'ADD') ? "add" : "edit";
        var rec = { "command": "run", "name": "/Common/add-rec", "utilCmdArgs": oper + "-record " + groupname + " \'\{" + record.name + "{ data " + record.data + "\}\}\'" };
        return this.http.post(endpoint + cliscript, JSON.stringify(rec), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            console.log(" Added record id=${record.name}");
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteProduct')));
    };
    RestService.prototype.saveConfig = function () {
        var rec = { "command": "run", "name": "/Common/add-rec", "utilCmdArgs": "save" };
        return this.http.post(endpoint + cliscript, JSON.stringify(rec), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("Config Saved."); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveConfig')));
    };
    RestService.prototype.deleteDataGroup = function (name, dest, s1) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                //'Authorization': 'Basic '+s1,
                'target': dest
            })
        };
        return this.http.delete(endpoint + elmnt + partition + name, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("deleted record id=" + name); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteProduct')));
    };
    RestService.prototype.uploadScript = function (dest, s1, script) {
        console.log('Upload scripts from rest mod to ', dest);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                //'Authorization': 'Basic '+s1,
                'target': dest
            })
        };
        return this.http.post('/mgmt/tm/cli/script/', JSON.stringify(script), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (group) { return console.log('Script uploaded to', dest); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    RestService.prototype.deleteScript = function (dest, s1) {
        console.log('Delete scripts from rest mod to ', dest);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                //'Authorization': 'Basic '+s1,
                'target': dest
            })
        };
        return this.http.delete('/mgmt/tm/cli/script/~Common~add-rec', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (group) { return console.log('Script deleted from ', dest); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    RestService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            //console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    RestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ "./src/assets/dg_script_ready_for_POST.json":
/*!**************************************************!*\
  !*** ./src/assets/dg_script_ready_for_POST.json ***!
  \**************************************************/
/*! exports provided: name, partition, apiAnonymous, ignoreVerification, default */
/***/ (function(module) {

module.exports = {"name":"add-rec","partition":"Common","apiAnonymous":"proc script::init {} {\n}\n\n\nproc script::run {} {\n\n\n# argv 1  command, argv 2 data-group name ,  argv 3 JSON blob of records.\n\nset record_data [lindex $tmsh::argv 3]\n\nswitch [lindex $tmsh::argv 1] {\n\n         \"add-record\" {\n            tmsh::modify ltm data-group internal [lindex $tmsh::argv 2] records add $record_data\n            puts \"Record [lindex $tmsh::argv 3]  added.\"\n        }\n        \"edit-record\" {\n           tmsh::modify ltm data-group internal [lindex $tmsh::argv 2] records modify $record_data\n           puts \"Record changed [lindex $tmsh::argv 3].\"\n        }\n        \"delete-record\" {\n            tmsh::modify ltm data-group internal [lindex $tmsh::argv 2] records delete $record_data\n            puts \"Record [lindex $tmsh::argv 3]  deleted.\"\n        }\n        \"save\" {\n                tmsh::save sys config\n                puts \"Config saved.\"\n        }\n\n}\n\n}\n\nproc script::help {} {\n}\n\nproc script::tabc {} {\n}\n","ignoreVerification":"false"};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alam/dg-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map