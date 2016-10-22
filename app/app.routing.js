"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var phones_component_1 = require('./phones/phones.component');
var phone_detail_component_1 = require('./phones/phone-detail.component');
var auth_guard_service_1 = require('./auth-guard.service');
var can_deactivate_guard_service_1 = require('./can-deactivate-guard.service');
var appRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'phones',
        component: phones_component_1.PhonesComponent,
        canActivate: [auth_guard_service_1.AuthGuard]
    },
    {
        path: 'phones/:id',
        component: phone_detail_component_1.PhoneDetailComponent,
        canActivate: [auth_guard_service_1.AuthGuard],
        canDeactivate: [can_deactivate_guard_service_1.CanDeactivateGuard]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
exports.appRoutingProviders = [auth_guard_service_1.AuthGuard, can_deactivate_guard_service_1.CanDeactivateGuard];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map