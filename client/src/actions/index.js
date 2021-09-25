import fetch from 'node-fetch'
export const GET_POKES = 'GET_POKES'
export const SEARCH_POKE = 'SEARCH_POKE'
export const BRING_POKES = 'BRING_POKES'
export const FILT_BY_TYPE= 'FILT_BY_TYPE'
export const GET_TYPES= 'GET_TYPES'



export function getPokes(pokemon){
    if(pokemon){
        return async function(dispatch){
            return fetch(`http://localhost:3001/pokemons?name=${pokemon}`)
            .then(response => response.json())
                    .then(json => {                        
                        dispatch({ type: SEARCH_POKE,
                        payload: json  });
                        });
        }
    } else {
        return async function(dispatch){
            return fetch("http://localhost:3001/pokemons")
                .then(response => response.json())
                .then(json => {
                    // console.log(json)
                    dispatch({ type: GET_POKES,
                    payload: json  });
                    });
        }
    }
}

export function bringPokes(option){
    return function(dispatch){        
                dispatch({ type: BRING_POKES,
                payload: option });} 
            }; 

export function filtByType(value){
    return function(dispatch){
        dispatch({ type: FILT_BY_TYPE,
            payload: value
        })
    }
};

export function getTypes(){
    return function(dispatch){
        return fetch('http://localhost:3001/types')
            .then( res => res.json())
            .then(json=> {
                dispatch({
                    type: GET_TYPES,
                    payload:json
                })
            })
    }
}