import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {PerfilComponent} from './components/perfil/perfil.component';

const appRoutes: Routes= [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'perfil',
        component:PerfilComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);