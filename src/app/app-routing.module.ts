import { UserGuardService } from './authentication/guards/user-guard';
import { LoginComponent } from './authentication/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{
		path: 'users',
		canLoad: [ UserGuardService ],
		loadChildren: './users/users.module#UsersModule'
	},
	{ path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
