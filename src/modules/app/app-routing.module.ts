// Dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Assets
import { Page404Component } from './components/page404/page404.component';

// TODO: Revisar que pasa que el canLoad, por que esta chocando con el canActivate.
const routes: Routes = [{
	path: 'login',
	loadChildren: () => import('@modules/auth/auth.module').then(modules => modules.AuthModule)
}, {
	path: '',
	redirectTo: '/login',
	pathMatch: 'full'
}, {
	path: '**',
	component: Page404Component
}];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
