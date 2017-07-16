import { createSelector } from 'reselect';
import { Transformer } from '../models/transformer';
import { ActionReducer, Action } from '@ngrx/store';
import * as transformers from "../actions/transformers";

export interface State {
    transformers: Transformer[]
}

export function reducer(state = [], action: Action) {
    switch (action.type) {
        case transformers.GET_TRANSFORMERS:
            return action.payload;
        case transformers.ADD_TRANSFORMER:
            return [
                ...state,
                action.payload
            ];
        case transformers.EDIT_TRANSFORMER:
            return state;
        case transformers.REMOVE_TRANSFORMER:
            return state.filter(transformer => transformer.id !== action.payload);;
        default:
            return state;
    }
}

export const getTransformers = (state) => state.transformers;
