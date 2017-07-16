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
            return [...state, action.payload];
        case transformers.UPDATE_TRANSFORMER:
            return state.map(item => {
                return item.id === action.payload.id ? Object.assign({}, item, action.payload) : item;
            });
        case transformers.REMOVE_TRANSFORMER:
            return state.filter(transformer => transformer.id !== action.payload.id);
        default:
            return state;
    }
}

export const selectedTransformer = (state: {}, { type, payload }) => {
    switch (type) {
        case transformers.SELECT_TRANSFORMER:
            return payload;
        default:
            return state;
    }
};

export const getTransformers = (state) => state.transformers;
