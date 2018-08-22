import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ZwiftComponent} from './zwift/zwift.component';
import {PreferencesComponent} from './preferences/preferences.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: ZwiftComponent
    },
    {
        path: 'settings',
        component: PreferencesComponent
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
