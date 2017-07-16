import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { TransformerService } from "./services";

import * as fromRoot from './reducers';
import * as layout from './actions/layout';


@Component({
	selector: 'app-root',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
    <app-layout>
      <bc-sidenav [open]="showSidenav$ | async">
        <bc-nav-item (activate)="closeSidenav()" routerLink="/" icon="list" hint="View list of transformers">
          Browse
        </bc-nav-item>
        <bc-nav-item (activate)="closeSidenav()" routerLink="/add" icon="add" hint="Add missing transformer">
          Add
        </bc-nav-item>
      </bc-sidenav>
      <bc-toolbar (openMenu)="openSidenav()">
        Transformers
      </bc-toolbar>

      <router-outlet></router-outlet>
    </app-layout>
  `
})
export class AppComponent {
	showSidenav$: Observable<boolean>;

	constructor(
		private store: Store<fromRoot.State>,
		private transformerService: TransformerService) {
		this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
		transformerService.getTransformers();
	}

	closeSidenav() {
		this.store.dispatch(new layout.CloseSidenavAction());
	}

	openSidenav() {
		this.store.dispatch(new layout.OpenSidenavAction());
	}
}
