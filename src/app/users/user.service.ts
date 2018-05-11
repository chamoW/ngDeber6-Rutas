import { UserInterface } from './interfaces/users.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

@Injectable()
export class UserService {
	constructor(private httpClient: HttpClient) {}
	url = 'https://jsonplaceholder.typicode.com/users';

	getUserList(): Observable<UserInterface[]> {
		return this.httpClient.get<UserInterface[]>(this.url);
	}

	getUser(id): Observable<UserInterface> {
		return this.httpClient.get<UserInterface>(this.url + '/' + id);
	}
}
