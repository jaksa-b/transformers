import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { TransformersModule } from './transformers/transformers.module';
import { routing } from './app.routing';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		HttpModule,
		RouterModule,
		TransformersModule,
		BrowserAnimationsModule,
		[MdButtonModule, MdCheckboxModule],
		routing,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
