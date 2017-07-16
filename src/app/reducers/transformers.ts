import { ActionReducer, Action } from '@ngrx/store';
import { 
    GET_TRANSFORMERS, 
    ADD_TRANSFORMER, 
    EDIT_TRANSFORMER, 
    REMOVE_TRANSFORMER
 } from "../actions";


export function transformersReducer ( state = [], action: Action) {
    switch (action.type) {
        case GET_TRANSFORMERS:
            return state;    
        case ADD_TRANSFORMER:
            return [
                ...state,
                action.payload
            ];    
        case EDIT_TRANSFORMER:
            return state;       
        case REMOVE_TRANSFORMER:
            return state.filter( transformer => transformer.id !== action.payload); ;       
        default:
            return state;
    }
}