import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ZwiftComponent} from './zwift/zwift.component';
import {PreferencesComponent} from './preferences/preferences.component';
import { ZwiftSessionComponent} from './zwift-session/zwift-session.component';
import { WorkoutsComponent} from './workouts/workouts.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

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
    },
    {
        path: 'session/:id',
        component: ZwiftSessionComponent
    },
    {
        path: 'workouts',
        component: WorkoutsComponent
    }
];


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
