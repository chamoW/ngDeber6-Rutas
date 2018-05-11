import { Router } from '@angular/router';
import { AuthenticationService } from './../authentication.service';
import { UserGuardService } from './../guards/user-guard';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	pass = '';
	constructor(private authenticationService: AuthenticationService, private router: Router) {
		console.log('LoginComponent');
	}

	ngOnInit() {}

	validatePass(event) {
		this.pass = event.target.value;
		if ('Enter' === event.code) {
			console.log('pass: ' + this.pass, event);
			this.authenticationService.validateUser(this.pass);

			this.router.navigateByUrl('/users');
		}
	}
}
