import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TransformersListComponent } from './components/transformers-list/transformers-list.component';
import { TransformersViewComponent } from './components/transformers-view/transformers-view.component';
import { TransformersAddComponent } from './components/transformers-add/transformers-add.component';
import { TransformersEditComponent } from './components/transformers-edit/transformers-edit.component';

import { FindTransformersPageComponent } from './containers/find-transformers-page/find-transformers-page.component';

import { routing } from './app.routing';
import { transformersReducer } from './reducers';

@NgModule({
	declarations: [
		AppComponent,
		TransformersListComponent,
		TransformersViewComponent,
		TransformersAddComponent,
		TransformersEditComponent,
		FindTransformersPageComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		HttpModule,
		RouterModule,
		BrowserAnimationsModule,
		StoreModule.provideStore({ transformers: transformersReducer }),
		StoreDevtoolsModule.instrumentOnlyWithExtension(),
		MaterialModule,
		routing,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
