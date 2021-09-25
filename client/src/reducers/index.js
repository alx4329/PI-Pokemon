import { BRING_POKES, GET_POKES, SEARCH_POKE, FILT_BY_TYPE, GET_TYPES} from "../actions"; 


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

    if(action.type === BRING_POKES){
        if(action.payload === 'created') {            
            
        let pokes = state.allPokes.filter((item)=> /^[0-9]+$/.test(item))
        return {
            ...state,
            pokes: pokes,
            // changes: !state.changes
                };
            } else { 
                let pokes = state.allPokes.filter((item)=> !/^[0-9]+$/.test(item))
                return {
                    ...state,
                    pokes: pokes,
                    // changes: !state.changes
                        };
        }
    }
    if(action.type === FILT_BY_TYPE){
        const pokes = state.allPokes;
        let filtered = [];
        // eslint-disable-next-line array-callback-return
        let filtering = pokes.map((poke)=>{
            // eslint-disable-next-line array-callback-return
            poke.types.map((type)=>{
                if(type.type.name === action.payload) filtered.push(poke)
            })
        })
        return {
            ...state, 
            pokes:filtered
        }
    }

    if(action.type === GET_TYPES){
        return {
            ...state,
            types: action.payload
        }
    }
    return state;
}

export default rootReducer;