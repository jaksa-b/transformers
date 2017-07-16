import { createSelector } from 'reselect';
import { Transformer } from '../models/transformer';
import { ActionReducer, Action } from '@ngrx/store';
import * as transformers from "../actions/transformers";

export interface State {
    transformers: Transformer[]
}

export function reducer(state = [], { type, payload }) {
    switch (type) {
        case transformers.GET_TRANSFORMERS:
            return payload;
        case transformers.ADD_TRANSFORMER:
            return [...state, payload];
        case transformers.UPDATE_TRANSFORMER:
            return state.map(item => {
                return item.id === payload.id ? Object.assign({}, item, payload) : item;
            });
        case transformers.REMOVE_TRANSFORMER:
            return state.filter(transformer => transformer.id !== payload.id);
        default:
            return state;
    }
}

export function selectedTransformer (state: {}, { type, payload }) {
    switch (type) {
        case transformers.SELECT_TRANSFORMER:
            return payload;
        default:
            return state;
    }
};

export function vehicleTypes (state: {}, { type, payload }) {
    switch (type) {
        case transformers.GET_VEHICLE_TYPES:
            return payload;
        default:
            return state;
    }
};

export const getTransformers = (state) => state.transformers;
