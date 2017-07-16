import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import { Transformer } from './../../models/transformer';
import { TransformerService } from "./../../services";
import { State } from './../../reducers/transformers';
import {
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

	transformers: Observable<Array<Transformer>>;
	private id = 0;

	constructor(
		private store: Store<State>,
		private transformerService: TransformerService
	) {
		this.transformers = transformerService.transformers;
	}

	ngOnInit() {}

	add() {
		const transformer = {
			id: 2,
			name: "Optimus Prime",
			vehicleGroup: "Land",
			vehicleType: "Truck",
			vehicleModel: "Western Star 5700",
			gear: [
				"sword",
				"shield"
			],
			status: "OK"
		}
		this.transformerService.addTransformer(transformer);
	}

	remove(id) {
		this.store.dispatch({
			type: REMOVE_TRANSFORMER,
			payload: id
		});
	}
}
