import { AuthenticationService } from './../authentication.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';

@Injectable()
export class UserGuardService implements CanLoad {
	constructor(
		private localStorageService: LocalStorageService,
		private authenticationService: AuthenticationService
	) {}

	canLoad(route: Route) {
		// const logeado = this.localStorageService.get('logeado');
		const logeado = this.authenticationService.getLogeado();

		console.log('EN canLoad', logeado, logeado === true);

		return logeado === true;
	}
}
