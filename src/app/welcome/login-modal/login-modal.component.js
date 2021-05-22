"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginModalComponent = void 0;
var core_1 = require("@angular/core");
var LoginModalComponent = /** @class */ (function () {
    function LoginModalComponent() {
        this.email = "";
        this.password = "";
    }
    LoginModalComponent.prototype.ngOnInit = function () {
    };
    LoginModalComponent = __decorate([
        core_1.Component({
            selector: 'app-login-modal',
            templateUrl: './login-modal.component.html',
            styleUrls: ['./login-modal.component.css']
        })
    ], LoginModalComponent);
    return LoginModalComponent;
}());
exports.LoginModalComponent = LoginModalComponent;
