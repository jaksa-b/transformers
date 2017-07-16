import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import { MdDialog } from '@angular/material';
import { Transformer } from "./../../models/transformer";
import { TransformerService } from "./../../services";
import { State } from './../../reducers/transformers';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-transformers-view',
	templateUrl: './transformers-view.component.html',
	styleUrls: ['./transformers-view.component.scss']
})
export class TransformersViewComponent implements OnInit, OnDestroy {

	id: number;
	sub: any;
	selectedTransformer: {};

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private store: Store<State>,
		private transformerService: TransformerService,
		public dialog: MdDialog
	) {
		store.select('selectedTransformer').subscribe(transformer =>
			this.selectedTransformer = transformer
		);
	}

	ngOnInit() { }

	ngOnDestroy() { }

	edit(transformer: Transformer) {

	}

	remove(transformer) {
		/* this.dialog.open(ConfirmDialogComponent, {
			height: '300px',
			width: '300px',
		}); */
		this.transformerService.deleteTransformer(transformer);
		this.router.navigate(['/']);
	}

}
