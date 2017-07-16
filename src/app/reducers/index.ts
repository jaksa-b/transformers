import { createSelector } from 'reselect';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromTransformers from './transformers';
import * as fromLayout from './layout';

export interface State {
	transformers: fromTransformers.State;
	layout: fromLayout.State;
}

const reducers = {
	transformers: fromTransformers.reducer,
	selectedTransformer: fromTransformers.selectedTransformer,
	layout: fromLayout.reducer,
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
	if (environment.production) {
		return productionReducer(state, action);
	} else {
		return developmentReducer(state, action);
	}
}

/**
 * Transformers Reducer
 */
export const getTransformersState = (state: State) => state.transformers;
export const getTransformers = createSelector(getTransformersState, fromTransformers.getTransformers);

/**
 * Layout Reducer
 */
export const getLayoutState = (state: State) => state.layout;
export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);
