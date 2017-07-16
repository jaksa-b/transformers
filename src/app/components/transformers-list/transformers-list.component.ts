import { Component, OnInit, EventEmitter } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { DataSource } from '@angular/cdk';
import { Store } from '@ngrx/store';
import { Transformer } from './../../models/transformer';
import { TransformerService } from "./../../services";
import { State } from './../../reducers/transformers';
import { ConfirmDialogComponent } from './../confirm-dialog/confirm-dialog.component';
import {
	ADD_TRANSFORMER,
	UPDATE_TRANSFORMER,
	REMOVE_TRANSFORMER,
	SEARCH_TRANSFORMER,
	SELECT_TRANSFORMER
} from "../../actions/transformers";

@Component({
	selector: 'app-transformers-list',
	templateUrl: './transformers-list.component.html',
	styleUrls: ['./transformers-list.component.scss']
})
export class TransformersListComponent implements OnInit {

	transformers: Observable<Array<Transformer>>;
	query = '';

	constructor(
		private store: Store<State>,
		private transformerService: TransformerService,
	) {
		this.transformers = transformerService.transformers;
	}

	ngOnInit() { }

	selectTransformer( transformer: Transformer) {
		this.store.dispatch({ type: SELECT_TRANSFORMER, payload: transformer})
	}

	search(query: string) {
		console.log(query)
	}
}
