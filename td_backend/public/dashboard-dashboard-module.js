(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/layout/dashboard/components/chat/chat.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-panel card card-default\">\r\n    <div class=\"card-header\">\r\n        <i class=\"fa fa-comments fa-fw\"></i>\r\n        Chat\r\n        <div class=\" pull-right\" ngbDropdown>\r\n            <button class=\"btn btn-secondary btn-sm\" ngbDropdownToggle>\r\n                <span class=\"caret\"></span>\r\n            </button>\r\n            <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\r\n                    <i class=\"fa fa-refresh fa-fw\"></i> Refresh</a>\r\n                </li>\r\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\r\n                    <i class=\"fa fa-check-circle fa-fw\"></i> Available</a>\r\n                </li>\r\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\r\n                    <i class=\"fa fa-times fa-fw\"></i> Busy</a>\r\n                </li>\r\n                <li class=\"divider dropdown-divider\"></li>\r\n                <li role=\"menuitem\">\r\n                    <a href=\"#\" class=\"dropdown-item\">\r\n                        <i class=\"fa fa-times fa-fw\"></i> Busy\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\" class=\"dropdown-item\">\r\n                        <i class=\"fa fa-clock-o fa-fw\"></i> Away\r\n                    </a>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li>\r\n                  <a href=\"#\" class=\"dropdown-item\">\r\n                    <i class=\"fa fa-sign-out fa-fw\"></i> Sign Out\r\n                  </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <!-- /.panel-heading -->\r\n    <div class=\"card-body\">\r\n        <ul class=\"chat\">\r\n            <li class=\"left clearfix\">\r\n                <span class=\"chat-img pull-left\">\r\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                        <small class=\"pull-right text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 12 mins ago\r\n                        </small>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"right clearfix\">\r\n                <span class=\"chat-img pull-right\">\r\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <small class=\" text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 13 mins ago\r\n                        </small>\r\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"left clearfix\">\r\n                <span class=\"chat-img pull-left\">\r\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                        <small class=\"pull-right text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago\r\n                        </small>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"right clearfix\">\r\n                <span class=\"chat-img pull-right\">\r\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <small class=\" text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago\r\n                        </small>\r\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <!-- /.card-body -->\r\n    <div class=\"card-footer\">\r\n        <div class=\"input-group\">\r\n            <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\">\r\n            <span class=\"input-group-btn\">\r\n                <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\r\n                    Send\r\n                </button>\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <!-- /.card-footer -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/chat/chat.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-panel .chat-dropdown {\n  margin-top: -3px; }\n\n.chat-panel .chat {\n  height: 350px;\n  overflow-y: scroll;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.chat-panel .chat .left img {\n    margin-right: 15px; }\n\n.chat-panel .chat .right img {\n    margin-left: 15px; }\n\n.chat-panel .chat li {\n    margin-bottom: 10px;\n    margin-right: 15px;\n    padding-bottom: 5px;\n    border-bottom: 1px dotted #999; }\n\n.chat-panel .card-footer input {\n  padding: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL2NoYXQvRDpcXHRlc3RpbmdfZm9sZGVyXFx0aGlydVxcZnJvbnRlbmRcXHRkX0Zyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcY2hhdFxcY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGdCQUFnQixFQUFBOztBQUZ4QjtFQWVRLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFuQnhCO0lBT2dCLGtCQUFrQixFQUFBOztBQVBsQztJQVlnQixpQkFBaUIsRUFBQTs7QUFaakM7SUFxQlksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsOEJBQThCLEVBQUE7O0FBeEIxQztFQTZCWSxZQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZGFzaGJvYXJkL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtcGFuZWx7XHJcbiAgICAuY2hhdC1kcm9wZG93bntcclxuICAgICAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG4gICAgfVxyXG4gICAgLmNoYXR7XHJcbiAgICAgICAgLmxlZnR7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHR7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjOTk5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkLWZvb3RlcntcclxuICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgcGFkZGluZyA6IDNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/chat/chat.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.ts ***!
  \********************************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
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

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () { };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/layout/dashboard/components/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/layout/dashboard/components/chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/index.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/components/index.ts ***!
  \******************************************************/
/*! exports provided: TimelineComponent, NotificationComponent, ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/layout/dashboard/components/timeline/timeline.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__["TimelineComponent"]; });

/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/layout/dashboard/components/notification/notification.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__["NotificationComponent"]; });

/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/layout/dashboard/components/chat/chat.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]; });






/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/notification.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\r\n    <div class=\"list-group\">\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-comment fa-fw\"></i> New Comment\r\n            <span class=\"float-right text-muted small\"><em>4 minutes ago</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\r\n            <span class=\"float-right text-muted small\"><em>12 minutes ago</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\r\n            <span class=\"float-right text-muted small\"><em>27 minutes ago</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-tasks fa-fw\"></i> New Task\r\n            <span class=\"float-right text-muted small\"><em>43 minutes ago</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\r\n            <span class=\"float-right text-muted small\"><em>11:32 AM</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-bolt fa-fw\"></i> Server Crashed!\r\n            <span class=\"float-right text-muted small\"><em>11:13 AM</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-warning fa-fw\"></i> Server Not Responding\r\n            <span class=\"float-right text-muted small\"><em>10:57 AM</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\r\n            <span class=\"float-right text-muted small\"><em>9:49 AM</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-money fa-fw\"></i> Payment Received\r\n            <span class=\"float-right text-muted small\"><em>Yesterday</em></span>\r\n        </a>\r\n    </div>\r\n    <!-- /.list-group -->\r\n    <a href=\"#\" class=\"btn btn-default btn-block\">View All Alerts</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/notification.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/notification.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.ts ***!
  \************************************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
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

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.ngOnInit = function () { };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/layout/dashboard/components/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/layout/dashboard/components/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/site-truck-position/site-truck-position.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/site-truck-position/site-truck-position.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <form [formGroup]=\"siteForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <h4 class=\"pull-left\"><i class=\"fa fa-truck\"></i> Site Truck Position</h4>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <a routerLink=\"/dashboard\" class=\"btn btn-primary pull-right\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Back</a>\r\n          </div>\r\n          <hr>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Start Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp\"\r\n                  formControlName=\"start_date\"\r\n                  ngbDatepicker\r\n                  #d=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <span class=\"text-danger\" *ngIf=\"(siteForm.controls['start_date'].dirty || submitted) && siteForm.controls['start_date'].hasError('required')\">Start date is required</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>End Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp2\"\r\n                  formControlName=\"end_date\"\r\n                  ngbDatepicker\r\n                  #d1=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <span class=\"text-danger\" *ngIf=\"(siteForm.controls['end_date'].dirty || submitted) && siteForm.controls['end_date'].hasError('required')\">End date is required</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <button class=\"btn btn-warning mg-top-26\" (click)=\"getPositions()\"> <i class=\"fa fa-get-pocket\"></i> Fetch</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <hr>\r\n      <div class=\"showbox\" *ngIf=\"loading\">\r\n        <div class=\"loader\">\r\n          <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n          </svg>\r\n        </div>\r\n      </div>\r\n      <!-- <ngb-pagination\r\n          [(page)]=\"pagination.currenPage\"\r\n          [pageSize]=\"pagination.pageSize\"\r\n          [collectionSize]=\"pagination.total\"\r\n          [maxSize]=\"pagination.maxSize\"\r\n          (pageChange)=\"fetchReport()\"\r\n        ></ngb-pagination>\r\n        <p><strong>Total:</strong> {{ pagination.total }}<br /><strong>Records per page:</strong> {{ pagination.pageSize }}</p> -->\r\n      <table *ngFor=\"let sp of sitePositions\" class=\"table table-hover table-striped table-bordered table-condensed tableFixHead mytable\">\r\n        <thead>\r\n          <tr>\r\n            <th><strong>Plant Name</strong></th>\r\n            <th>{{sp.plantName}}</th>\r\n          </tr>\r\n          <tr>\r\n            <th>Date</th>\r\n            <th>Sr No.</th>\r\n            <th>Truck No.</th>\r\n            <th>CC</th>\r\n            <th>Destination</th>\r\n            <th>Time In</th>\r\n            <th>Placed Time</th>\r\n            <th>Lr No.</th>\r\n            <th>Time</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let data of sp.siteResult\">\r\n            <td>{{data.date ? data.date : '--'}}</td>\r\n            <td>{{data.srno ? data.srno : '--'}}</td>\r\n            <td>{{data.truckno ? data.truckno : '--'}}</td>\r\n            <td>{{data.cc ? data.cc : '--'}}</td>\r\n            <td>{{data.destination ? data.destination : '--'}}</td>\r\n            <td>{{data.timein ? data.timein : '--'}}</td>\r\n            <td>{{data.placedtime ? data.placedtime : '--'}}</td>\r\n            <td>{{data.lrno ? data.lrno : '--'}}</td>\r\n            <td>{{data.billtytime ? data.billtytime : '--'}}</td>\r\n          </tr>\r\n          <tr *ngIf=\"loaded && sitePositions.length === 0\">\r\n            <td align=\"center\" colspan=\"10\">No data available</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <!-- <ngb-pagination\r\n          [(page)]=\"pagination.currenPage\"\r\n          [pageSize]=\"pagination.pageSize\"\r\n          [collectionSize]=\"pagination.total\"\r\n          [maxSize]=\"pagination.maxSize\"\r\n          (pageChange)=\"fetchReport()\"\r\n        ></ngb-pagination> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/site-truck-position/site-truck-position.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/site-truck-position/site-truck-position.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mg-top-26 {\n  margin-top: 26px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL3NpdGUtdHJ1Y2stcG9zaXRpb24vRDpcXHRlc3RpbmdfZm9sZGVyXFx0aGlydVxcZnJvbnRlbmRcXHRkX0Zyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcc2l0ZS10cnVjay1wb3NpdGlvblxcc2l0ZS10cnVjay1wb3NpdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL3NpdGUtdHJ1Y2stcG9zaXRpb24vc2l0ZS10cnVjay1wb3NpdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZy10b3AtMjYge1xyXG4gICAgbWFyZ2luLXRvcDogMjZweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/site-truck-position/site-truck-position.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/site-truck-position/site-truck-position.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: SiteTruckPositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteTruckPositionComponent", function() { return SiteTruckPositionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SiteTruckPositionComponent = /** @class */ (function () {
    function SiteTruckPositionComponent(fb, dashboardService, toastr) {
        this.fb = fb;
        this.dashboardService = dashboardService;
        this.toastr = toastr;
        this.filters = {
            'start_date': '',
            'end_date': ''
        };
        this.submitted = false;
        this.sitePositions = [];
        this.loading = false;
        this.loaded = true;
    }
    SiteTruckPositionComponent.prototype.ngOnInit = function () {
        this.siteForm = this.fb.group({
            start_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            end_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.getPositions();
    };
    SiteTruckPositionComponent.prototype.getPositions = function () {
        var _this = this;
        this.submitted = true;
        if (this.siteForm.controls['start_date'].valid) {
            var sDate = this.siteForm.value.start_date;
            var eDate = this.siteForm.value.end_date;
            sDate = sDate.year + '-' + sDate.month + '-' + sDate.day;
            eDate = eDate.year + '-' + eDate.month + '-' + eDate.day;
            var stDate = moment(sDate, 'YYYY-MM-DD');
            var edDate = moment(eDate, 'YYYY-MM-DD');
            if (stDate <= edDate) {
                if (this.siteForm.value.start_date) {
                    this.filters.start_date = sDate;
                }
                else {
                    this.filters.start_date = '';
                }
                if (this.siteForm.value.end_date) {
                    this.filters.end_date = eDate;
                }
                else {
                    this.filters.end_date = '';
                }
                this.loading = true;
                this.loaded = false;
                this.sitePositions = [];
                this.dashboardService.getSiteTruckPostion(this.filters).subscribe(function (res) {
                    _this.loading = false;
                    _this.loaded = true;
                    res.result.forEach(function (element) {
                        element.siteResult.forEach(function (e) {
                            e.date = moment_timezone__WEBPACK_IMPORTED_MODULE_4__(e.date).tz('Asia/Calcutta').format('DD/MM/YYYY HH:mm:ss');
                        });
                    });
                    _this.sitePositions = res.result;
                }, function (err) {
                    _this.loading = false;
                    _this.loaded = true;
                    console.log('err>>>>>>>>>', err);
                });
            }
            else {
                this.toastr.error('Start date cannot be greater then end date.');
            }
        }
        else {
            // Fetch data without date filter
            this.submitted = false;
            this.loading = true;
            this.loaded = false;
            this.sitePositions = [];
            this.dashboardService.getSiteTruckPostion(this.filters).subscribe(function (res) {
                _this.loading = false;
                _this.loaded = true;
                res.result.forEach(function (element) {
                    element.siteResult.forEach(function (e) {
                        e.date = e.date ? moment_timezone__WEBPACK_IMPORTED_MODULE_4__(e.date).tz('Asia/Calcutta').format('DD/MM/YYYY HH:mm:ss') : '--';
                        e.billtytime = e.billtytime ? moment_timezone__WEBPACK_IMPORTED_MODULE_4__(e.billtytime).tz('Asia/Calcutta').format('DD/MM/YYYY HH:mm:ss') : '--';
                        e.placedtime = e.placedtime ? moment_timezone__WEBPACK_IMPORTED_MODULE_4__(e.placedtime).tz('Asia/Calcutta').format('DD/MM/YYYY HH:mm:ss') : '--';
                        e.timein = e.timein ? moment_timezone__WEBPACK_IMPORTED_MODULE_4__(e.timein).tz('Asia/Calcutta').format('DD/MM/YYYY HH:mm:ss') : '--';
                    });
                });
                _this.sitePositions = res.result;
            }, function (err) {
                _this.loading = false;
                _this.loaded = true;
                console.log('err>>>>>>>>>', err);
            });
        }
    };
    SiteTruckPositionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-truck-position',
            template: __webpack_require__(/*! ./site-truck-position.component.html */ "./src/app/layout/dashboard/components/site-truck-position/site-truck-position.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./site-truck-position.component.scss */ "./src/app/layout/dashboard/components/site-truck-position/site-truck-position.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], SiteTruckPositionComponent);
    return SiteTruckPositionComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/timeline/timeline.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\r\n    <ul class=\"timeline\">\r\n        <li>\r\n            <div class=\"timeline-badge\"><i class=\"fa fa-check\"></i>\r\n            </div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                    <p><small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 11 hours ago via Twitter</small>\r\n                    </p>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li class=\"timeline-inverted\">\r\n            <div class=\"timeline-badge warning\"><i class=\"fa fa-credit-card\"></i>\r\n            </div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia repellendus.</p>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li>\r\n            <div class=\"timeline-badge danger\"><i class=\"fa fa-bomb\"></i>\r\n            </div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li class=\"timeline-inverted\">\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li>\r\n            <div class=\"timeline-badge info\"><i class=\"fa fa-save\"></i>\r\n            </div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.</p>\r\n                    <hr>\r\n                    <div class=\"btn-group\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\r\n                            <i class=\"fa fa-gear\"></i>  <span class=\"caret\"></span>\r\n                        </button>\r\n                        <ul class=\"dropdown-menu\" role=\"menu\">\r\n                            <li><a href=\"#\">Action</a>\r\n                            </li>\r\n                            <li><a href=\"#\">Another action</a>\r\n                            </li>\r\n                            <li><a href=\"#\">Something else here</a>\r\n                            </li>\r\n                            <li class=\"divider\"></li>\r\n                            <li><a href=\"#\">Separated link</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur nostrum sequi. Consequuntur, commodi.</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li class=\"timeline-inverted\">\r\n            <div class=\"timeline-badge success\"><i class=\"fa fa-graduation-cap\"></i>\r\n            </div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim incidunt quisquam maxime neque eaque.</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/timeline/timeline.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timeline {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none; }\n\n.timeline:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #eeeeee; }\n\n.timeline > li {\n  position: relative;\n  margin-bottom: 20px; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li > .timeline-panel {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175); }\n\n.timeline > li > .timeline-panel:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  border-top: 15px solid transparent;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #ccc; }\n\n.timeline > li > .timeline-panel:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  border-top: 14px solid transparent;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  border-left: 14px solid #fff; }\n\n.timeline > li > .timeline-badge {\n  z-index: 100;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  background-color: #999999; }\n\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right; }\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0; }\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0; }\n\n.timeline-badge.primary {\n  background-color: #2e6da4 !important; }\n\n.timeline-badge.success {\n  background-color: #3f903f !important; }\n\n.timeline-badge.warning {\n  background-color: #f0ad4e !important; }\n\n.timeline-badge.danger {\n  background-color: #d9534f !important; }\n\n.timeline-badge.info {\n  background-color: #5bc0de !important; }\n\n.timeline-title {\n  margin-top: 0;\n  color: inherit; }\n\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0; }\n\n.timeline-body > p + p {\n  margin-top: 5px; }\n\n@media (max-width: 767px) {\n  ul.timeline:before {\n    left: 40px; }\n  ul.timeline > li > .timeline-panel {\n    width: calc(100% - 90px);\n    width: -webkit-calc(100% - 90px); }\n  ul.timeline > li > .timeline-badge {\n    top: 16px;\n    left: 15px;\n    margin-left: 0; }\n  ul.timeline > li > .timeline-panel {\n    float: right; }\n  ul.timeline > li > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0; }\n  ul.timeline > li > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL3RpbWVsaW5lL0Q6XFx0ZXN0aW5nX2ZvbGRlclxcdGhpcnVcXGZyb250ZW5kXFx0ZF9Gcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxkYXNoYm9hcmRcXGNvbXBvbmVudHNcXHRpbWVsaW5lXFx0aW1lbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHdkI7O0VBRUksWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7O0VBRUksWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUVsQiwwQ0FBdUMsRUFBQTs7QUFHM0M7RUFDSSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIscUNBQXFDO0VBQ3JDLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQixxQ0FBcUM7RUFDckMsNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLG9DQUFvQyxFQUFBOztBQUd4QztFQUNJLG9DQUFvQyxFQUFBOztBQUd4QztFQUNJLG9DQUFvQyxFQUFBOztBQUd4QztFQUNJLG9DQUFvQyxFQUFBOztBQUd4QztFQUNJLG9DQUFvQyxFQUFBOztBQUd4QztFQUNJLGFBQWE7RUFDYixjQUFjLEVBQUE7O0FBR2xCOztFQUVJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSTtJQUNJLFVBQVUsRUFBQTtFQUdkO0lBQ0ksd0JBQXdCO0lBRXhCLGdDQUFnQyxFQUFBO0VBR3BDO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixjQUFjLEVBQUE7RUFHbEI7SUFDSSxZQUFZLEVBQUE7RUFHaEI7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixvQkFBb0IsRUFBQTtFQUd4QjtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLG9CQUFvQixFQUFBLEVBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbWVsaW5lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnRpbWVsaW5lOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEuNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxufVxyXG5cclxuLnRpbWVsaW5lID4gbGkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnRpbWVsaW5lID4gbGk6YmVmb3JlLFxyXG4udGltZWxpbmUgPiBsaTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4udGltZWxpbmUgPiBsaTphZnRlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLnRpbWVsaW5lID4gbGk6YmVmb3JlLFxyXG4udGltZWxpbmUgPiBsaTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4udGltZWxpbmUgPiBsaTphZnRlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWwge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNDYlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2JhKDAsMCwwLDAuMTc1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2JhKDAsMCwwLDAuMTc1KTtcclxufVxyXG5cclxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNnB4O1xyXG4gICAgcmlnaHQ6IC0xNXB4O1xyXG4gICAgYm9yZGVyLXRvcDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogMCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyN3B4O1xyXG4gICAgcmlnaHQ6IC0xNHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMTRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogMCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiAxNHB4IHNvbGlkICNmZmY7XHJcbn1cclxuXHJcbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWJhZGdlIHtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTZweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSA1MCUgNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xyXG59XHJcblxyXG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIGxlZnQ6IC0xNXB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNXB4O1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbn1cclxuXHJcbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgbGVmdDogLTE0cHg7XHJcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE0cHg7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWJhZGdlLnByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlNmRhNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGltZWxpbmUtYmFkZ2Uuc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y5MDNmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aW1lbGluZS1iYWRnZS53YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWJhZGdlLmRhbmdlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aW1lbGluZS1iYWRnZS5pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpbWVsaW5lLXRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWJvZHkgPiBwLFxyXG4udGltZWxpbmUtYm9keSA+IHVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi50aW1lbGluZS1ib2R5ID4gcCArIHAge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICB1bC50aW1lbGluZTpiZWZvcmUge1xyXG4gICAgICAgIGxlZnQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbCB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpO1xyXG4gICAgICAgIHdpZHRoOiAtbW96LWNhbGMoMTAwJSAtIDkwcHgpO1xyXG4gICAgICAgIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwJSAtIDkwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVsLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtYmFkZ2Uge1xyXG4gICAgICAgIHRvcDogMTZweDtcclxuICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVsLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWwge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICB1bC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XHJcbiAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbGVmdDogLTE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVsLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YWZ0ZXIge1xyXG4gICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGxlZnQ6IC0xNHB4O1xyXG4gICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMTRweDtcclxuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/timeline/timeline.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.ts ***!
  \****************************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
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

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/layout/dashboard/components/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/layout/dashboard/components/timeline/timeline.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var _components_site_truck_position_site_truck_position_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/site-truck-position/site-truck-position.component */ "./src/app/layout/dashboard/components/site-truck-position/site-truck-position.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    },
    {
        path: 'site-truck-position', component: _components_site_truck_position_site_truck_position_component__WEBPACK_IMPORTED_MODULE_3__["SiteTruckPositionComponent"]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n\r\n  <button class=\"pull-right btn btn-primary btn-sm\" (click)=\"refreshPage()\"><i class=\"fa fa-refresh\"\r\n      aria-hidden=\"true\"></i> Refresh</button>\r\n  <div class=\"clearfix\"></div>\r\n  <hr>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-3 col-lg-6\">\r\n      <app-stat [bgClass]=\"'primary'\" [icon]=\"'fa-truck'\" [count]=\"dispatchCount\" [label]=\"'Dispatch'\"></app-stat>\r\n    </div>\r\n    <!-- <div class=\"col-xl-3 col-lg-6\">\r\n      <app-stat [bgClass]=\"'warning'\" [icon]=\"'fa-tasks'\" [count]=\"advanceCount\" [label]=\"'Advance'\"></app-stat>\r\n    </div> -->\r\n    <div class=\"col-xl-3 col-lg-6\">\r\n      <app-stat [bgClass]=\"'danger'\" [icon]=\"'fa-list-ol'\" [count]=\"billingCount\" [label]=\"'Billing'\"></app-stat>\r\n    </div>\r\n    <div class=\"col-xl-3 col-lg-6\">\r\n      <app-stat [bgClass]=\"'primary'\" [icon]=\"'fa-bars'\" [count]=\"unBilledCount\" [label]=\"'Unbilled'\"></app-stat>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n  <div class=\"row\">\r\n    <!-- <div class=\"col-xl-3 col-lg-6 mg-top-10\">\r\n      <app-stat [bgClass]=\"'success'\" [icon]=\"'fa-inr'\" [count]=\"bankBalanceCount\" [label]=\"'Bank Balance'\"></app-stat>\r\n    </div> -->\r\n    <!-- <div class=\"col-xl-3 col-lg-6 mg-top-10\">\r\n      <app-stat [bgClass]=\"'pink'\" [icon]=\"'fa-money'\" [count]=\"cashBalanceCount\" [label]=\"'Cash Balance'\"></app-stat>\r\n    </div> -->\r\n    <div class=\"col-xl-3 col-lg-6 mg-top-10\">\r\n      <app-stat [bgClass]=\"'purple'\" [icon]=\"'fa-product-hunt'\" [count]=\"podCount\" [label]=\"'POD'\"></app-stat>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-sm-6\">\r\n        <div class=\"card mb-3\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title pull-left\">DISPATCH</h4>\r\n            <div class=\"btn-group btn-group-toggle pull-right\" (change)=\"onDispatchChange(form.value['dispatched'])\"\r\n              ngbRadioGroup name=\"radioBasic\" formControlName=\"dispatched\">\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"today\"> Today\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"month\"> Month\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"year\"> Year\r\n              </label>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n            <canvas *ngIf=\"flags.pieDataLoaded\" baseChart height=\"150px\" [options]=\"barChartOptions\"\r\n              [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\"\r\n              (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\">\r\n            </canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col col-sm-6\">\r\n        <div class=\"card mb-3\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title pull-left\">BILLING</h4>\r\n            <div class=\"btn-group btn-group-toggle pull-right\" (change)=\"onBillingChange(form.value['billed'])\"\r\n              ngbRadioGroup name=\"radioBasic\" formControlName=\"billed\">\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"today\"> Today\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"month\"> Month\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"year\"> Year\r\n              </label>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n            <canvas *ngIf=\"flags.billingPieDataLoaded\" baseChart height=\"150px\" [options]=\"barChartOptions\"\r\n              [data]=\"billingPieChartData\" [labels]=\"billingPieChartLabels\" [chartType]=\"pieChartType\"\r\n              (chartHover)=\"advanceChartHovered($event)\" (chartClick)=\"advanceChartClicked($event)\">\r\n            </canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <!-- <div class=\"col col-sm-6\">\r\n        <div class=\"card mb-3\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title pull-left\">ADVANCE</h4>\r\n            <div class=\"btn-group btn-group-toggle pull-right\" (change)=\"onAdvanceChange(form.value['advanced'])\"\r\n              ngbRadioGroup name=\"radioBasic\" formControlName=\"advanced\">\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"today\"> Today\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"month\"> Month\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"year\"> Year\r\n              </label>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n            <canvas *ngIf=\"flags.advancePieDataLoaded\" baseChart height=\"150px\" [options]=\"barChartOptions\"\r\n              [data]=\"advancePieChartData\" [labels]=\"advancePieChartLabels\" [chartType]=\"pieChartType\"\r\n              (chartHover)=\"advanceChartHovered($event)\" (chartClick)=\"advanceChartClicked($event)\">\r\n            </canvas>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n    <div class=\"row\">\r\n      <!-- <div class=\"col col-sm-6\">\r\n        <div class=\"card mb-3\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title pull-left\">BANK BALANCE</h4>\r\n            <div class=\"btn-group btn-group-toggle pull-right\" (change)=\"onBankBalanceChange(form.value['balanced'])\"\r\n              ngbRadioGroup name=\"radioBasic\" formControlName=\"balanced\">\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"today\"> Today\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"month\"> Month\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"year\"> Year\r\n              </label>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n            <canvas *ngIf=\"flags.bankBalancePieDataLoaded\" baseChart height=\"150px\" [options]=\"barChartOptions\"\r\n              [data]=\"bankBalancePieChartData\" [labels]=\"bankBalancePieChartLabels\" [chartType]=\"pieChartType\"\r\n              (chartHover)=\"advanceChartHovered($event)\" (chartClick)=\"advanceChartClicked($event)\">\r\n            </canvas>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col col-sm-6\">\r\n        <div class=\"card mb-3\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title pull-left\">UNBILLED</h4>\r\n            <div class=\"btn-group btn-group-toggle pull-right\" (change)=\"onUnbilledChange(form.value['unbilled'])\"\r\n              ngbRadioGroup name=\"radioBasic\" formControlName=\"unbilled\">\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"today\"> Today\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"month\"> Month\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"year\"> Year\r\n              </label>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n            <canvas *ngIf=\"flags.unBilledPieDataLoaded\" baseChart height=\"150px\" [options]=\"barChartOptions\"\r\n              [data]=\"unBilledPieChartData\" [labels]=\"unBilledPieChartLabels\" [chartType]=\"pieChartType\"\r\n              (chartHover)=\"advanceChartHovered($event)\" (chartClick)=\"advanceChartClicked($event)\">\r\n            </canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"col col-sm-6\">\r\n        <div class=\"card mb-3\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-text-center pull-left\">CASH BALANCE</h4>\r\n            <div class=\"btn-group btn-group-toggle pull-right\" (change)=\"onCashBalanceChange(form.value['unbilled'])\"\r\n              ngbRadioGroup name=\"radioBasic\" formControlName=\"unbilled\">\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"today\"> Today\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"month\"> Month\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"year\"> Year\r\n              </label>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n            <canvas *ngIf=\"flags.cashBalancePieDataLoaded\" baseChart height=\"150px\" [options]=\"barChartOptions\"\r\n              [data]=\"cashBalancePieChartData\" [labels]=\"cashBalancePieChartLabels\" [chartType]=\"pieChartType\"\r\n              (chartHover)=\"advanceChartHovered($event)\" (chartClick)=\"advanceChartClicked($event)\">\r\n            </canvas>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title pull-left\">\r\n              <span class=\"row\">\r\n                <span class=\"col-md-12 col-xs-12 col-sm-12\">\r\n                  <a routerLink=\"/reports/dispatch_summary\" [routerLinkActive]=\"['router-link-active']\">\r\n                    <i class=\"fa fa-truck\"></i>&nbsp;Dispatch Summary\r\n                  </a>&nbsp;&nbsp;\r\n                  <br class=\"mobile-break\">\r\n                  <a routerLink=\"/site-truck-position\" [routerLinkActive]=\"['router-link-active']\">\r\n                    <i class=\"fa fa-map-marker\"></i>&nbsp;On Site Truck Position\r\n                  </a>\r\n                </span>\r\n                <br>\r\n                <span class=\"col-md-6 col-xs-12 col-sm-12\">\r\n\r\n                </span>\r\n              </span>\r\n            </h4>\r\n            <!-- <div class=\"btn-group btn-group-toggle pull-right\"\r\n              (change)=\"onDispatchParameterChange(form.value['dispatch'])\" ngbRadioGroup name=\"radioBasic\"\r\n              formControlName=\"dispatch\">\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"site\"> Site Wise\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"agent\"> Trafic Aggent Wise\r\n              </label>\r\n            </div> -->\r\n            <div class=\"clearfix\"></div>\r\n            <!-- <form [formGroup]=\"filterForm\"> -->\r\n            <div class=\" row\">\r\n\r\n\r\n            </div>\r\n            <!-- </form> -->\r\n\r\n            <div class=\"zui-scroller\">\r\n              <table class=\"table mytable zui-table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th class=\"zui-sticky-col\">Site</th>\r\n                    <th class=\"cell-align\">Truck at site</th>\r\n                    <th class=\"cell-align\">CC</th>\r\n                    <th class=\"cell-align\">Placed</th>\r\n                    <th class=\"cell-align\">Dispatch</th>\r\n                    <th class=\"cell-align\">Tons</th>\r\n                    <th class=\"cell-align\">O. Trips</th>\r\n                    <th class=\"cell-align\">A. Trips</th>\r\n                    <th class=\"cell-align\">O. Tons</th>\r\n                    <th class=\"cell-align\">A. Ton</th>\r\n                    <th class=\"cell-align\">O.Ratio</th>\r\n                    <th class=\"cell-align\">A.Ratio</th>\r\n                    <th class=\"cell-align\">O.Comm</th>\r\n                    <th class=\"cell-align\">A.Comm</th>\r\n                    <th class=\"cell-align\">Net Profit</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"loading\">\r\n                    <td colspan=\"10\">\r\n                      <div class=\"showbox\">\r\n                        <div class=\"loader\">\r\n                          <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                          </svg>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let summary of dispatch_summary_data?.result\">\r\n                    <td class=\"zui-sticky-col\"><i class=\"fa fa-industry\" aria-hidden=\"true\"></i> {{ summary._id }}</td>\r\n                    <td class=\"cell-align\">{{ summary.truck_at_site ? summary.truck_at_site : 0}}</td>\r\n                    <td class=\"cell-align\">{{ summary.cc ? summary.cc : 0}}</td>\r\n                    <td class=\"cell-align\">{{ summary.placed ? summary.placed : 0}}</td>\r\n                    <td class=\"cell-align\">{{ summary.trip ? summary.trip : 0}}</td>\r\n                    <td class=\"cell-align\">{{ (summary.ton ? summary.ton : 0) | number : '1.2-2'}}</td>\r\n                    <td class=\"cell-align\">{{ summary.Co_Trips ? summary.Co_Trips : 0}}</td>\r\n                    <td class=\"cell-align\">{{ summary.A_Trips ? summary.A_Trips : 0}}</td>\r\n                    <td class=\"cell-align\">{{ (summary.Co_Tons ? summary.Co_Tons : 0) | number : '1.2-2'}}</td>\r\n                    <td class=\"cell-align\">{{ (summary.A_Tons ? summary.A_Tons : 0) | number : '1.2-2'}}</td>\r\n                    <td class=\"cell-align\">{{ (summary.o_ratio ? summary.o_ratio : 0) | number : '1.2-2' }}%</td>\r\n                    <td class=\"cell-align\">{{ (summary.A_ratio ? summary.A_ratio : 0) | number : '1.2-2' }}%</td>\r\n                    <td class=\"cell-align\">{{ (summary.Co_profit ? summary.Co_profit : 0) | number : '1.2-2'}}</td>\r\n                    <td class=\"cell-align\">{{ (summary.A_profit ? summary.A_profit : 0) | number : '1.2-2' }}</td>\r\n                    <td class=\"cell-align\">{{ (summary.net_profit ? summary.net_profit : 0) | number : '1.2-2' }}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <!-- <canvas *ngIf=\"flags.unBilledPieDataLoaded\" baseChart height=\"150px\" [options]=\"barChartOptions\" [data]=\"unBilledPieChartData\" [labels]=\"unBilledPieChartLabels\"  [chartType]=\"pieChartType\" (chartHover)=\"advanceChartHovered($event)\" (chartClick)=\"advanceChartClicked($event)\">\r\n                    </canvas> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title pull-left\">\r\n              <!-- <a routerLink=\"/reports/own_fleet_performance_admin\" [routerLinkActive]=\"['router-link-active']\"> -->\r\n                <i class=\"fa fa-truck\"></i>&nbsp;Own Fleet Performance\r\n              <!-- </a> -->\r\n\r\n            </h4>\r\n            <!-- <div class=\"btn-group btn-group-toggle pull-right\"\r\n              (change)=\"onFleetPerformanceParameterChange(form.value['fleet_performance'])\" ngbRadioGroup\r\n              name=\"radioBasic\" formControlName=\"fleet_performance\">\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"site\"> Site Wise\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"agent\"> Trafic Aggent Wise\r\n              </label>\r\n            </div> -->\r\n            <div class=\"clearfix\"></div>\r\n            <div class=\"zui-scroller\">\r\n              <table class=\"table zui-table mytable\">\r\n                <thead>\r\n                  <tr>\r\n                    <th class=\"zui-sticky-col\">Site</th>\r\n                    <!-- <th class=\"cell-align\">Date</th> -->\r\n                    <th class=\"cell-align\">Trips</th>\r\n                    <th class=\"cell-align\">Tons</th>\r\n                    <th class=\"cell-align\">JSTC</th>\r\n                    <th class=\"cell-align\">Other</th>\r\n                    <th class=\"cell-align\">Party</th>\r\n                    <th class=\"cell-align\">Dqty</th>\r\n                    <th class=\"cell-align\">Damt</th>\r\n                    <th class=\"cell-align\">Comm</th>\r\n  \r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"loading\">\r\n                    <td colspan=\"10\">\r\n                      <div class=\"showbox\">\r\n                        <div class=\"loader\">\r\n                          <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                          </svg>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let report of report_data\">\r\n                    <td (click)=\"onSiteSelect(report)\" class=\"site-selection zui-sticky-col\"><i class=\"fa fa-industry\" aria-hidden=\"true\"></i> {{ report._id }}</td>\r\n                    <!-- <td class=\"cell-align\">{{ report._id.date | date: 'dd/MM/yyyy' }}</td> -->\r\n                    <td class=\"cell-align\">{{ (report.trips ? report.trips : 0) | number: '1.2-2' }}</td>\r\n                    <td class=\"cell-align\">{{ (report.tons ? report.tons : 0) | number: '1.2-2' }}</td>\r\n                    <td class=\"cell-align\">{{ (report.jstc ? report.jstc : 0) | number: '1.2-2' }}</td>\r\n                    <td class=\"cell-align\">{{ (report.other ? report.other : 0) | number: '1.2-2' }}</td>\r\n                    <td class=\"cell-align\">{{ (report.party ? report.party : 0) | number: '1.2-2' }}</td>\r\n                    <td class=\"cell-align\">{{ (report.dqty ? report.dqty : 0) | number: '1.2-2' }}</td>\r\n                    <td class=\"cell-align\">{{ (report.damt ? report.damt : 0) | number: '1.2-2' }}</td>\r\n                    <td class=\"cell-align\">{{ report.profit ? report.profit : '--' }}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <!-- <canvas *ngIf=\"flags.unBilledPieDataLoaded\" baseChart height=\"150px\" [options]=\"barChartOptions\" [data]=\"unBilledPieChartData\" [labels]=\"unBilledPieChartLabels\"  [chartType]=\"pieChartType\" (chartHover)=\"advanceChartHovered($event)\" (chartClick)=\"advanceChartClicked($event)\">\r\n                      </canvas> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <app-documents-dashboard></app-documents-dashboard>\r\n  </form>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pie-chart {\n  color: #fff;\n  font-weight: 900; }\n\n.card-text-center {\n  text-align: center;\n  font-weight: 900; }\n\n.mg-top-10 {\n  margin-top: 10px; }\n\n.card-title {\n  font-weight: 900; }\n\n.site-selection {\n  cursor: pointer;\n  text-decoration: underline; }\n\n@media screen and (min-width: 600px) {\n  .mobile-break {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9EOlxcdGVzdGluZ19mb2xkZXJcXHRoaXJ1XFxmcm9udGVuZFxcdGRfRnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBWSxXQUFXO0VBQUUsZ0JBQWdCLEVBQUE7O0FBRXpDO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUFhLGdCQUFnQixFQUFBOztBQUU3QjtFQUNFLGVBQWU7RUFDZiwwQkFBMEIsRUFBQTs7QUFFNUI7RUFDRTtJQUFnQixhQUFhLEVBQUEsRUFBSSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpZS1jaGFydCB7Y29sb3I6ICNmZmY7IGZvbnQtd2VpZ2h0OiA5MDB9XHJcblxyXG4uY2FyZC10ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4ubWctdG9wLTEwIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtmb250LXdlaWdodDogOTAwfVxyXG5cclxuLnNpdGUtc2VsZWN0aW9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpICB7XHJcbiAgLm1vYmlsZS1icmVhayB7IGRpc3BsYXk6IG5vbmU7IH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(api, formBuilder, myRouter) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.myRouter = myRouter;
        this.dispatch_summary_data = { result: [] };
        this.report_data = [];
        this.flags = {
            pieDataLoaded: false,
            advancePieDataLoaded: false,
            unBilledPieDataLoaded: false,
            bankBalancePieDataLoaded: false,
            cashBalancePieDataLoaded: false,
            billingPieDataLoaded: false
        };
        // Pie
        this.barChartOptions = {
            legend: {
                display: true,
                position: 'right',
            },
            responsive: true
        };
        // Dispatched variables
        this.pieChartLabels = [];
        this.pieChartData = [];
        // Advance chart variables
        this.advancePieChartLabels = [];
        this.advancePieChartData = [];
        // unBilled chart variables
        this.unBilledPieChartLabels = [];
        this.unBilledPieChartData = [];
        // bank balance chart variables
        this.bankBalancePieChartLabels = [];
        this.bankBalancePieChartData = [];
        // billing chart variables
        this.billingPieChartLabels = [];
        this.billingPieChartData = [];
        // cash balance chart variables
        this.cashBalancePieChartLabels = [];
        this.today = '';
        this.cashBalancePieChartData = [];
        this.loading = false;
        this.pieChartType = 'pie';
        Chart.defaults.global.defaultFontFamily = 'Nunito Sans'; // default chart fonts
        this.dispatched();
        this.advanced();
        this.balanced();
        this.billed();
        this.unBilled();
        this.pod();
        this.cashBalance();
        this.siteWiseDispatchChart('today');
        this.advanceChart('today');
        this.unbilledChart('today');
        this.bankBalancChart('today');
        this.billingChart('today');
        this.cashBalanceChart('today');
        this.dispatchReport('site');
        this.fleetPerformanceReport('site');
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            'dispatched': ['today'],
            'advanced': ['today'],
            'unbilled': ['today'],
            'balanced': ['today'],
            'billed': ['today'],
            'dispatch': ['site'],
            'fleet_performance': ['site'],
            'start_date': [''],
            'end_date': ['']
        });
    };
    DashboardComponent.prototype.onSiteSelect = function (val) {
        // console.log('on site select >>>>', val);
        var startDt = this.getTodaysDate();
        var endDt = this.getTodaysDate();
        this.myRouter.navigate(['/reports/own_fleet_performance_admin', { site: val._id.site, start_date: startDt, end_date: endDt }]);
    };
    // events
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    // events
    DashboardComponent.prototype.advanceChartClicked = function (e) {
        console.log(e);
    };
    // events
    DashboardComponent.prototype.unBilledChartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.advanceChartHovered = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.unBilledChartHovered = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.onDispatchChange = function (val) {
        this.siteWiseDispatchChart(val);
    };
    DashboardComponent.prototype.onAdvanceChange = function (val) {
        this.advanceChart(val);
    };
    DashboardComponent.prototype.onUnbilledChange = function (val) {
        this.unbilledChart(val);
    };
    DashboardComponent.prototype.onBankBalanceChange = function (val) {
        this.bankBalancChart(val);
    };
    DashboardComponent.prototype.onBillingChange = function (val) {
        this.billingChart(val);
    };
    DashboardComponent.prototype.onCashBalanceChange = function (val) {
        this.cashBalanceChart(val);
    };
    DashboardComponent.prototype.onDispatchParameterChange = function (val) {
        this.dispatchReport(val);
    };
    DashboardComponent.prototype.onFleetPerformanceParameterChange = function (val) {
        this.fleetPerformanceReport(val);
    };
    DashboardComponent.prototype.refreshPage = function () {
        this.dispatched();
        this.advanced();
        this.balanced();
        this.billed();
        this.unBilled();
        this.pod();
        this.cashBalance();
        this.siteWiseDispatchChart('today');
        this.advanceChart('today');
        this.unbilledChart('today');
        this.bankBalancChart('today');
        this.billingChart('today');
        this.cashBalanceChart('today');
        this.dispatchReport('site');
        this.fleetPerformanceReport('site');
    };
    DashboardComponent.prototype.dispatched = function () {
        var _this = this;
        this.api.get('dashboard/dispatch').subscribe(function (res) {
            _this.dispatchCount = res.total ? res.total : 0;
            // console.log(this.dispatchCount);
        }, function (err) {
        });
    };
    DashboardComponent.prototype.advanced = function () {
        var _this = this;
        this.api.get('dashboard/advance').subscribe(function (res) {
            _this.advanceCount = res.total ? res.total : 0;
            console.log(_this.advanceCount);
        }, function (err) {
        });
    };
    DashboardComponent.prototype.balanced = function () {
        var _this = this;
        this.api.get('bankbalance/account_info').subscribe(function (res) {
            _this.bankBalanceCount = res.total_balance ? res.total_balance : 0;
        }, function (err) {
        });
    };
    DashboardComponent.prototype.billed = function () {
        var _this = this;
        this.api.get('bankbalance/billing').subscribe(function (res) {
            _this.billingCount = res.total_balance ? res.total_balance : 0;
        }, function (err) {
        });
    };
    DashboardComponent.prototype.unBilled = function () {
        var _this = this;
        this.api.get('dashboard/unbilled').subscribe(function (res) {
            _this.unBilledCount = res.newamount ? res.newamount : 0;
        }, function (err) {
        });
    };
    // Get api for pod
    DashboardComponent.prototype.pod = function () {
        var _this = this;
        this.api.get('dashboard/unbilled').subscribe(function (res) {
            _this.podCount = 100;
        }, function (err) {
        });
    };
    // Get api for cash balance
    DashboardComponent.prototype.cashBalance = function () {
        var _this = this;
        this.api.get('bankbalance/cash_balance').subscribe(function (res) {
            _this.cashBalanceCount = res.total_balance ? res.total_balance : 0;
        }, function (err) {
        });
    };
    // Api for dispatched Chart
    DashboardComponent.prototype.siteWiseDispatchChart = function (val) {
        var _this = this;
        this.flags.pieDataLoaded = false;
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.api.get('dashboard/charts/dispatch?period=' + val).subscribe(function (res) {
            res.forEach(function (d) {
                _this.pieChartLabels.push(d._id + ': ' + d.total);
                _this.pieChartData.push(d.total);
                _this.flags.pieDataLoaded = true;
            });
            // console.log(this.pieChartLabels);
        }, function (err) {
        });
    };
    // Api for advance chart
    DashboardComponent.prototype.advanceChart = function (val) {
        var _this = this;
        this.flags.advancePieDataLoaded = false;
        this.advancePieChartLabels = [];
        this.advancePieChartData = [];
        this.api.get('dashboard/charts/advance?period=' + val).subscribe(function (res) {
            res.forEach(function (d) {
                _this.advancePieChartLabels.push(d._id + ': ' + d.total);
                _this.advancePieChartData.push(d.total);
                _this.flags.advancePieDataLoaded = true;
            });
            // console.log(this.advancePieChartLabels);
        }, function (err) {
        });
    };
    // Api for unbuild chart
    DashboardComponent.prototype.unbilledChart = function (val) {
        var _this = this;
        this.flags.unBilledPieDataLoaded = false;
        this.unBilledPieChartLabels = [];
        this.unBilledPieChartData = [];
        this.api.get('dashboard/charts/unbilled?period=' + val).subscribe(function (res) {
            res.forEach(function (d) {
                _this.unBilledPieChartLabels.push(d._id ? d._id + ': ' + d.newamount : 'N/A' + ': ' + d.newamount);
                _this.unBilledPieChartData.push(d.newamount);
                _this.flags.unBilledPieDataLoaded = true;
            });
        }, function (err) {
        });
    };
    // Api for bank balance chart
    DashboardComponent.prototype.bankBalancChart = function (val) {
        var _this = this;
        this.flags.bankBalancePieDataLoaded = false;
        this.bankBalancePieChartLabels = [];
        this.bankBalancePieChartData = [];
        this.api.get('bankbalance/chart/account_info?period=' + val).subscribe(function (res) {
            res.forEach(function (d) {
                _this.bankBalancePieChartLabels.push(d.accountname ? d.accountname + ': ' + d.balance : 'N/A' + ': ' + d.balance);
                _this.bankBalancePieChartData.push(d.balance);
                _this.flags.bankBalancePieDataLoaded = true;
            });
        }, function (err) {
        });
    };
    // api for billing chart
    DashboardComponent.prototype.billingChart = function (val) {
        var _this = this;
        this.flags.billingPieDataLoaded = false;
        this.billingPieChartLabels = [];
        this.billingPieChartData = [];
        this.api.get('bankbalance/chart/billing?period=' + val).subscribe(function (res) {
            res.forEach(function (d) {
                _this.billingPieChartLabels.push(d.accountname ? d.accountname + ': ' + d.balance : 'N/A' + ': ' + d.balance);
                _this.billingPieChartData.push(d.balance);
                _this.flags.billingPieDataLoaded = true;
            });
        }, function (err) {
        });
    };
    // api for billing chart
    DashboardComponent.prototype.cashBalanceChart = function (val) {
        var _this = this;
        this.flags.cashBalancePieDataLoaded = false;
        this.cashBalancePieChartLabels = [];
        this.cashBalancePieChartData = [];
        this.api.get('bankbalance/chart/cash_balance?period=' + val).subscribe(function (res) {
            res.forEach(function (d) {
                _this.cashBalancePieChartLabels.push(d.accountname ? d.accountname + ': ' + d.balance : 'N/A' + ': ' + d.balance);
                _this.cashBalancePieChartData.push(d.balance);
                _this.flags.cashBalancePieDataLoaded = true;
            });
        }, function (err) {
        });
    };
    DashboardComponent.prototype.getTodaysDate = function () {
        var today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    };
    DashboardComponent.prototype.getLastMonthStartDate = function () {
        var today = new Date();
        today.setDate(today.getDate() - 30);
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    };
    DashboardComponent.prototype.getThisMonthFirstDate = function () {
        var today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-01';
    };
    DashboardComponent.prototype.getAprilDate = function () {
        var today = new Date();
        today.setDate(today.getDate() - 365);
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    };
    DashboardComponent.prototype.getTommrowsDate = function () {
        var today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 1);
    };
    // api for dispatch Report
    DashboardComponent.prototype.dispatchReport = function (val) {
        var _this = this;
        var startDt = this.getTodaysDate();
        var endDt = this.getTodaysDate();
        // if (this.form.controls['start_date'].value) {
        //   startDt = this.form.controls['start_date'].value.year + '-' +
        //     this.form.controls['start_date'].value.month + '-' +
        //     this.form.controls['start_date'].value.day;
        // } else {
        //   startDt = this.getTodaysDate();
        // }
        // if (this.form.controls['end_date'].value) {
        //   endDt = this.form.controls['end_date'].value.year + '-' +
        //     this.form.controls['end_date'].value.month + '-' +
        //     (this.form.controls['end_date'].value.day + 1);
        // } else {
        //   endDt = this.getTommrowsDate();
        // }
        // tslint:disable-next-line:max-line-length
        this.loading = true;
        this.api.get('reports/dispatch_summary?start_date=' + startDt + '&end_date=' + endDt + '&page=1').subscribe(function (res) {
            console.log(res);
            _this.loading = false;
            _this.dispatch_summary_data = res;
        }, function (err) {
            _this.loading = false;
        });
    };
    DashboardComponent.prototype.fleetPerformanceReport = function (val) {
        var _this = this;
        // const startDt = this.getLastMonthStartDate();
        // const startDt = this.getAprilDate();
        var startDt = this.getThisMonthFirstDate();
        var endDt = this.getTodaysDate();
        this.loading = true;
        this.api.get('reports/sitewise_own_fleet_report?start_date=' + startDt + '&end_date=' + endDt).subscribe(function (res) {
            _this.loading = false;
            console.log('ownfleet_report');
            console.log(startDt);
            console.log(res);
            _this.report_data = res;
        }, function (err) {
            _this.loading = false;
        });
    };
    DashboardComponent.prototype.fetchReport = function () {
        console.log(this.form.controls['start_date'].value);
        console.log(this.form.controls['end_date'].value);
    };
    DashboardComponent.prototype.resetFilters = function () {
        console.log(this.form.controls['start_date'].value);
        console.log(this.form.controls['end_date'].value);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/layout/dashboard/dashboard.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/layout/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.module.ts ***!
  \******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/layout/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/app/layout/dashboard/components/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_site_truck_position_site_truck_position_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/site-truck-position/site-truck-position.component */ "./src/app/layout/dashboard/components/site-truck-position/site-truck-position.component.ts");
/* harmony import */ var _common_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/app-common/app-common.module */ "./src/app/layout/common/app-common/app-common.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"],
                _shared__WEBPACK_IMPORTED_MODULE_7__["StatModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _common_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_10__["AppCommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"]
            ],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["TimelineComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["NotificationComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"],
                _components_site_truck_position_site_truck_position_component__WEBPACK_IMPORTED_MODULE_9__["SiteTruckPositionComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map