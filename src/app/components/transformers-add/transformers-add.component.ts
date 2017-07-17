import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
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
	vehicleTypes: Observable<Array<VehicleTypes>>;
	groupsFormated = {};
	typesFormated = {};
	modelFormated = [];
	groups = {};
	statuses = ['OK', 'INJURED', 'MIA'];

	/*
	this.groupsFormated =
		{
			Air: {
				Helicopter: [],
				Plane: []
			},
			Land: {
				Car: [],
				Truck: []
			}
		}
	*/

	constructor(
		private store: Store<State>,
		private transformerService: TransformerService,
		private router: Router,
		private fb: FormBuilder,
		private toasterService: ToasterService,
	) {
		this.vehicleTypes = transformerService.vehicleTypes;
		this.vehicleTypes.subscribe(array => {
			array.map(item => {
				if (!this.groups[item.group]) {
					this.groups[item.group] = [];
				}
				this.groups[item.group].push(item);
			})
		})
		for (let key in this.groups) {
			if (!this.groupsFormated[this.groups[key]]) {
				this.groupsFormated[key] = {};
			}
			this.groups[key].map(item => {
				if (!this.groupsFormated[key][item.type]) {
					this.groupsFormated[key][item.type] = [];
				}
				this.groupsFormated[key][item.type].push(item);
			})
		}
		console.log(this.groupsFormated)
	}

	ngOnInit() {
		this.form = this.fb.group({
			name: ['', Validators.required],
			vehicleGroup: ['', Validators.required],
			vehicleType: ['', Validators.required],
			vehicleModel: ['', Validators.required],
			gear: [''],
			status: ['', Validators.required]
		})
	}

	onGroupChange() {
		this.typesFormated = this.groupsFormated[this.form.controls['vehicleGroup'].value];
	}

	onTypeChange() {
		this.modelFormated = this.typesFormated[this.form.controls['vehicleType'].value];
	}

	add() {
		console.log(this.form.value)
		this.toasterService.pop('success', 'Transformer added');
		this.transformerService.addTransformer(this.form.value);
		this.router.navigate(['/']);
	}

}
