import { UserInterface } from './../interfaces/users.interface';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: [ './user-list.component.scss' ]
})
export class UserListComponent implements OnInit {
	data: UserInterface[];

	constructor(private userService: UserService) {
		console.log('UserListComponent');
		this.userService.getUserList().subscribe((data) => {
			this.data = data;
		});
	}

	ngOnInit() {}
}
