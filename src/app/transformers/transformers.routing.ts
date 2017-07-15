import { Routes, RouterModule } from '@angular/router';

import { TransformersComponent } from './transformers.component';
import { TransformersListComponent } from './components/transformers-list/transformers-list.component';
import { TransformersViewComponent } from './components/transformers-view/transformers-view.component';
import { TransformersAddComponent } from './components/transformers-add/transformers-add.component';
import { TransformersEditComponent } from './components/transformers-edit/transformers-edit.component';

const routes: Routes = [
	{
		path: '',
		component: TransformersComponent,
		children: [
			{ path: '', component: TransformersListComponent },
			{ path: 'add', component: TransformersAddComponent },
			{ path: ':id', component: TransformersViewComponent },
			{ path: ':id/edit', component: TransformersEditComponent },
		],
	},
];

export const routing = RouterModule.forChild(routes);
