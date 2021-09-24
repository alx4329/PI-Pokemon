import { GET_POKES, SEARCH_POKE } from "../actions"; 

export const initialState = {
    allPokes:[],
    pokes:[],
    types:[]
}

export function rootReducer(state=initialState,action){
    if (action.type === GET_POKES){
        return {
            ...state,
            allPokes:action.payload,
            pokes:action.payload            
        }
    }
    
    if (action.type === SEARCH_POKE){
        return {
            ...state,
            allPokes:action.payload,
            pokes:action.payload            
        }
    }
    return state;
}

export default rootReducer;