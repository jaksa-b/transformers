import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Transformer } from './../models/transformer';
import { VehicleTypes } from './../models/vehicleTypes';
import { State } from './../reducers/transformers';
import { BASE_URL } from './../../environments/environment';
import {
	GET_TRANSFORMERS,
	ADD_TRANSFORMER,
	UPDATE_TRANSFORMER,
	REMOVE_TRANSFORMER,
	GET_VEHICLE_TYPES
} from "../actions/transformers";


@Injectable()
export class TransformerService {


	transformers: Observable<Array<Transformer>>;
	vehicleTypes: Observable<Array<VehicleTypes>>;

	constructor(private http: Http, private store: Store<State>) {
		this.transformers = store.select('transformers');
		this.vehicleTypes = store.select('vehicleTypes');
	}

	private headerOptions = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

	getTransformers() {
		return this.http.get(`${BASE_URL}/transformers`)
			.map(res => res.json())
			.map(payload => ({ type: GET_TRANSFORMERS, payload }))
			.subscribe(action => this.store.dispatch(action));
	}

	getTransformer(id) {
		return this.http.get(`${BASE_URL}/transformers/${id}`)
			.map(res => (<Response>res).json())
			.catch((err: Response) => {
				return Observable.throw(err.json());
			});
	}

	getVehicleTypes() {
		return this.http.get(`${BASE_URL}/vehicleTypes`)
			.map(res => res.json())
			.map(payload => ({ type: GET_VEHICLE_TYPES, payload }))
			.subscribe(action => this.store.dispatch(action));
	}

	addTransformer(transformer: Transformer) {
		this.http.post(`${BASE_URL}/transformers`, JSON.stringify(transformer), this.headerOptions)
			.map(res => res.json())
			.map(payload => ({ type: ADD_TRANSFORMER, payload }))
			.subscribe(action => this.store.dispatch(action));
	}

	updateTransformer(transformer: Transformer) {
		this.http.put(`${BASE_URL}/transformers/${transformer.id}`, JSON.stringify(transformer))
			.map(res => res.json())
			.map(payload => ({ type: UPDATE_TRANSFORMER, payload }))
			.subscribe(action => this.store.dispatch(action));
	}

	deleteTransformer(transformer: Transformer) {
		this.http.delete(`${BASE_URL}/transformers/${transformer.id}`)
			.subscribe(action => this.store.dispatch({ type: REMOVE_TRANSFORMER, payload: transformer }));
	}

}
