import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Transformer } from './../../models/transformer';
import { VehicleTypes } from './../../models/vehicleTypes';
import { TransformerService } from "./../../services";
import { State } from './../../reducers/transformers';

@Component({
	selector: 'app-transformers-add',
	templateUrl: './transformers-add.component.html',
	styleUrls: ['./transformers-add.component.scss']
})
export class TransformersAddComponent implements OnInit {
	form: FormGroup;
	vehicleTypes : Observable<Array<VehicleTypes>>;

	constructor(
		private store: Store<State>,
		private transformerService: TransformerService,
		private fb: FormBuilder,
	) {
		this.vehicleTypes = transformerService.vehicleTypes;
	}

	ngOnInit() {
		this.form = this.fb.group({
			name: ['', Validators.required],
			vehicleGroup: ['', Validators.required],
			vehicleType: ['', Validators.required],
			vehicleModel: ['', Validators.required],
			gear: ['', Validators.required],
			status: ['', Validators.required]
		})
	}

	add() {
		console.log(this.form.value)
		//this.transformerService.addTransformer(transformer);
	}

}
