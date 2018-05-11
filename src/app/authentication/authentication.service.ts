import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthenticationService {
	private clave = '1234';
	private logeado = false;

	constructor(private localStorageService: LocalStorageService) {}

	validateUser(pass): boolean {
		if (this.clave === pass) {
			// this.localStorageService.set('logeado', true);
			this.logeado = true;
		} else {
			// this.localStorageService.set('logeado', false);
			this.logeado = false;
		}
		return this.logeado;
	}

	getLogeado(): boolean {
		return this.logeado;
	}
}
