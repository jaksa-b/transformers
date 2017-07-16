import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LayoutComponent } from './components/layout';
import { NavItemComponent } from './components/nav-item';
import { SidenavComponent } from './components/sidenav';
import { ToolbarComponent } from './components/toolbar';

import { FindTransformersPageComponent } from './containers/find-transformers-page/find-transformers-page.component';

import { routing } from './app.routing';
import { reducer } from './reducers';

import { TransformerService } from "./services";

@NgModule({
	declarations: [
		AppComponent,
		TransformersListComponent,
		TransformersViewComponent,
		TransformersAddComponent,
		TransformersEditComponent,
		FindTransformersPageComponent,
		LayoutComponent,
		NavItemComponent,
		SidenavComponent,
		ToolbarComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule,
		BrowserAnimationsModule,
		StoreModule.provideStore(reducer),
		StoreDevtoolsModule.instrumentOnlyWithExtension(),
		MaterialModule,
		routing,
	],
	providers: [TransformerService],
	bootstrap: [AppComponent]
})
export class AppModule { }
