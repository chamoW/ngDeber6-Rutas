import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

@NgModule({
	imports: [ CommonModule, UserRoutingModule, HttpClientModule ],
	declarations: [ UserListComponent, UserComponent ],
	providers: [ UserService ]
})
export class UsersModule {}
