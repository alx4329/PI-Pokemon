import { BRING_POKES, GET_POKES, SEARCH_POKE } from "../actions"; 

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

    // if(action.type === BRING_POKES){
    //     if(action.payload === 'created') {            
            
    //     let games = state.AllGames.filter((item)=> (item.createdByUser))
    //     return {
    //         ...state,
    //         Games: games,
    //         changes: !state.changes
    //             };
    //         } else { 
    //             let games = state.AllGames.filter((item)=> (!item.createdByUser))
    //             return {
    //                 ...state,
    //                 Games: games,
    //                 changes: !state.changes
    //                     };
    //     }
    // }
    return state;
}

export default rootReducer;