import {Routes,RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [
    {path: '',redirectTo: 'home',pathMatch: 'full'},
    {path: 'home',component: HomeComponent},
    {path: 'dashboard',component: DashboardComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}