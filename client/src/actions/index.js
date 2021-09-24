import fetch from 'node-fetch'
export const GET_POKES = 'GET_POKES'
export const SEARCH_POKE = 'SEARCH_POKE'


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
                    console.log(json)
                    dispatch({ type: GET_POKES,
                    payload: json  });
                    });
        }
    }
}