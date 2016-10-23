"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home/home.component');
var perfil_component_1 = require('./components/perfil/perfil.component');
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'perfil',
        component: perfil_component_1.PerfilComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map