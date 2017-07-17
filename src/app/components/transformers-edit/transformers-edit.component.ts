import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TransformerService } from '../../services';

@Component({
	selector: 'app-transformers-edit',
	templateUrl: './transformers-edit.component.html',
	styleUrls: ['./transformers-edit.component.scss']
})
export class TransformersEditComponent implements OnInit, OnDestroy {

	sub: any;
	id: number;
	data = {};

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private transformerService: TransformerService,
	) { }

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.id = params['id'];
		});

		this.getTransformer();
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	getTransformer() {
		this.transformerService.getTransformer(this.id).subscribe(
			response => {
				console.log(response);
				this.data = response;
			},
			error => {
				console.log(error);
			},
		);
	}

}
