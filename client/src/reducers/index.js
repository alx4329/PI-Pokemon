/* eslint-disable array-callback-return */
import { BRING_POKES, GET_POKES, SEARCH_POKE, FILT_BY_TYPE, GET_TYPES, ORD_ALPH, ORD_ST, TO_DETAIL} from "../actions"; 


export const initialState = {
    allPokes:[],
    pokes:[],
    types:[],
    pokeDetail:[],
    changes: false,
    option:''
}

export function rootReducer(state=initialState,action){
    if (action.type === GET_POKES){
        return {
            ...state,
            allPokes:action.payload,
            pokes:action.payload,
            option:''            
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
            option:''
                };
            } else { 
                let pokes = state.allPokes.filter((item)=> !/^[0-9]+$/.test(item))
                return {
                    ...state,
                    pokes: pokes,
                    option:''
                    
                        };
        }
    }
    if(action.type === FILT_BY_TYPE){
        const pokes = state.allPokes;
        let filtered = [];
        // eslint-disable-next-line no-unused-vars
        let filtering = pokes.map((poke)=>{
            // eslint-disable-next-line array-callback-return
            poke.types.map((type)=>{
                if(type.type.name === action.payload) filtered.push(poke)
            })
        })
        return {
            ...state, 
            pokes:filtered,
            option:action.payload
        }
    }

    if(action.type === GET_TYPES){
        return {
            ...state,
            types: action.payload
        }
    }

    if( action.type === ORD_ALPH){
        let pokes = state.allPokes;     
        
        if (action.payload=== 'A-Z'){
            let ordered = orderByString(pokes,'name',1,true);
            
            
            return {
                ...state,
                pokes: ordered,
                option:'A-Z',
                changes: !state.changes
            }
        } else {
            let ordered = orderByString(pokes,'name',-1,true);
            
            return {
                ...state,
                pokes:ordered,
                option:'Z-A',
                changes: !state.changes
            }
        }
    }

    if (action.type === ORD_ST){        
        let pokes = state.allPokes;
        if (action.payload === 'SUp'){
            orderByNumber(pokes,'strength',1,true)
            return {
                ...state,
                pokes: pokes,
                option:'Strength Up',           
                changes: !state.changes
            }}
            else {            
                orderByNumber(pokes,'strength',-1,true)
                return {
                ...state,
                pokes: pokes,           
                option:'Strength Down',           
                changes: !state.changes
            }
        }
    }
    if(action.type === TO_DETAIL){
        return {
            ...state,
            pokeDetail: action.payload
        }
    }

    return state;
}

function orderByString(array,property,sortOrder,ignoreCase){
    if (sortOrder!==-1 && sortOrder!==1) sortOrder=1;
    return array.sort(function(a,b){
        var stringA=a[property],stringB=b[property];
        // Si un valor es null o undefined, se convierte a cadena vacía.
        if (stringA===null) stringA = '';
        if (stringB===null) stringB = '';
        // Si ignoreCase es true, se convierten ambas variables a minúsculas.
        if (ignoreCase===true){stringA=stringA.toLowerCase();stringB=stringB.toLowerCase()}
        var res = 0;
        if (stringA<stringB) res = -1;
        else if (stringA>stringB) res = 1;
        return res*sortOrder;
    })
}

function orderByNumber (array, property,sortOrder){
    // Primero se verifica que la propiedad sortOrder tenga un dato válido.
    if (sortOrder!==-1 && sortOrder!==1) sortOrder=1;
    array.sort(function(a,b){
        // La función de ordenamiento devuelve la comparación entre property de a y b.
        // El resultado será afectado por sortOrder.
        return (a[property]-b[property])*sortOrder;
    })
}

export default rootReducer;