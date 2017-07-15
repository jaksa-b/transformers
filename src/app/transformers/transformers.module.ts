import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransformersComponent } from './transformers.component';
import { TransformersListComponent } from './components/transformers-list';
import { TransformersViewComponent } from './components/transformers-view';
import { TransformersAddComponent } from './components/transformers-add';
import { TransformersEditComponent } from './components/transformers-edit';

import { routing } from "./transformers.routing";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [TransformersComponent, TransformersListComponent, TransformersViewComponent, TransformersAddComponent, TransformersEditComponent]
})
export class TransformersModule { }
