import { UserGuardService } from './guards/user-guard';
import { AuthenticationService } from './authentication.service';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [ CommonModule, HttpClientModule ],
	declarations: [ LoginComponent ],
	exports: [ LoginComponent ],
	providers: [ AuthenticationService, UserGuardService ]
})
export class AuthenticationModule {}
