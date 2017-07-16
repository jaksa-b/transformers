import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import { Transformer } from './../../models/transformer';
import { State } from './../../reducers/transformers';
import {
	GET_TRANSFORMERS,
	ADD_TRANSFORMER,
	EDIT_TRANSFORMER,
	REMOVE_TRANSFORMER
} from "../../actions/transformers";

@Component({
	selector: 'app-transformers-list',
	templateUrl: './transformers-list.component.html',
	styleUrls: ['./transformers-list.component.scss']
})
export class TransformersListComponent implements OnInit {

	public transformers;
	private id = 0;

	constructor(
		private store: Store<State>
	) {
		store.select('transformers').subscribe(transformers => {
			this.transformers = transformers;
		})
	}

	ngOnInit() {}

	add() {
		this.store.dispatch({
			type: ADD_TRANSFORMER,
			payload: {
				id: ++this.id
			}
		});
	}

	remove(id) {
		this.store.dispatch({
			type: REMOVE_TRANSFORMER,
			payload: id
		});
	}
}
