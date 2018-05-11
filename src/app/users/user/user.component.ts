import {
	UserInterface,
	AddressInterface,
	CompanyInterface,
	GeoInterface
} from './../interfaces/users.interface';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: [ './user.component.scss' ]
})
export class UserComponent implements OnInit {
	userId;
	private geo: GeoInterface;
	private address: AddressInterface = {
		city: '',
		geo: this.geo,
		street: '',
		suite: '',
		zipcode: ''
	};
	private company: CompanyInterface;
	data: UserInterface = {
		id: 0,
		address: this.address,
		company: this.company,
		email: '',
		name: '',
		phone: '',
		username: '',
		website: ''
	};

	constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
		console.log('UserComponent');
		activatedRoute.paramMap.pipe(pluck('params', 'id')).subscribe((value) => {
			this.userId = value;
			userService.getUser(this.userId).subscribe((item) => {
				this.data = item;
			});
		});
	}

	ngOnInit() {}
}
