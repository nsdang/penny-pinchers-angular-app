"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./welcome/welcome.component");
var subscription_list_component_1 = require("./subscription-list/subscription-list.component");
var subscription_item_component_1 = require("./subscription-list/subscription-item/subscription-item.component");
var login_modal_component_1 = require("./welcome/login-modal/login-modal.component");
var sign_up_modal_component_1 = require("./welcome/sign-up-modal/sign-up-modal.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                welcome_component_1.WelcomeComponent,
                subscription_list_component_1.SubscriptionListComponent,
                subscription_item_component_1.SubscriptionItemComponent,
                login_modal_component_1.LoginModalComponent,
                sign_up_modal_component_1.SignUpModalComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
