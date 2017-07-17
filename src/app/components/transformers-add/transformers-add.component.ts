import { Component, OnInit, Input } from '@angular/core';
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
	@Input() edit;
	@Input() id;
	@Input() transformer;

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
			id: [''],
			name: ['', Validators.required],
			vehicleGroup: ['', Validators.required],
			vehicleType: ['', Validators.required],
			vehicleModel: ['', Validators.required],
			gear: [''],
			status: ['', Validators.required]
		})

		if (this.edit) {
			setTimeout(() => {
				console.log("in", this.transformer)
				const transformer = {
					id: this.id,
					name: this.transformer.name,
					vehicleGroup: this.transformer.vehicleGroup,
					vehicleType: this.transformer.vehicleType,
					vehicleModel: this.transformer.vehicleModel,
					gear: this.transformer.gear,
					status: this.transformer.status
				}
				this.form.setValue(transformer, { onlySelf: true })
			}, 2000);
		}
	}

	onGroupChange() {
		this.typesFormated = this.groupsFormated[this.form.controls['vehicleGroup'].value];
		this.form.controls['vehicleType'].setValue('');
		this.form.controls['vehicleModel'].setValue('');
		this.modelFormated = []
	}

	onTypeChange() {
		this.modelFormated = this.typesFormated[this.form.controls['vehicleType'].value];
		this.form.controls['vehicleModel'].setValue('');
	}

	add() {
		console.log(this.form.value)
		this.toasterService.pop('success', 'Transformer added');
		this.transformerService.addTransformer(this.form.value);
		this.router.navigate(['/']);
	}

	save() {
		this.form.controls['id'].setValue(this.id);
		console.log(this.form.value)
		// this.toasterService.pop('success', 'Transformer saved');
		this.transformerService.updateTransformer(this.form.value);
		this.router.navigate(['/']);
	}

}
