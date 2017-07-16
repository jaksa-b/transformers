import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Transformer } from './../models/transformer';
import { State } from './../reducers/transformers';
import { BASE_URL } from './../../environments/environment';
import {
	GET_TRANSFORMERS,
	ADD_TRANSFORMER,
	EDIT_TRANSFORMER,
	REMOVE_TRANSFORMER
} from "../actions/transformers";


const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class TransformerService {

	transformers: Observable<Array<Transformer>>;

	constructor(private http: Http, private store: Store<State>) {
		this.transformers = store.select('transformers');
	}

	getTransformers() {
		return this.http.get(`${BASE_URL}/transformers`)
			.map(res => res.json())
			.map(payload => ({ type: GET_TRANSFORMERS, payload }))
			.subscribe(action => this.store.dispatch(action));
	}

	addTransformer(transformer: Transformer) {
		this.http.post(`${BASE_URL}/transformers`, JSON.stringify(transformer))
			.map(res => res.json())
			.map(payload => ({ type: ADD_TRANSFORMER, payload }))
			.subscribe(action => this.store.dispatch(action));
	}

}
