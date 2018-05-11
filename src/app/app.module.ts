import { AuthenticationModule } from './authentication/authentication.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocalStorageModule } from 'angular-2-local-storage';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AuthenticationModule,
		LocalStorageModule.withConfig({
			prefix: 'my-app',
			storageType: 'localStorage'
		})
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
