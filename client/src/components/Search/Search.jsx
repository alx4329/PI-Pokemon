import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { getPokes } from "../../actions";


export function Search(){
    const [pokeToFind, setPokeToFind] = useState([''])
    const dispatch = useDispatch();
    
    function handleChange(event) {
        setPokeToFind(event.target.value );
    }
    function handleSubmit(event) {
        event.preventDefault();
        dispatch(getPokes(pokeToFind));
        
    }

    return(
        <div>
            <form  onSubmit={(e) =>  handleSubmit(e)}>
                <div className="form-container" >
        
            <input
                type="text"
                className="searchInput"
                autoComplete="off"
                placeholder= "Find a Game"
                value={pokeToFind}
                onChange={(e) => handleChange(e)}
            />
            <button className="searchButton" type="submit">Search</button>

                </div>
        </form>
        </div>
    )
}

export default Search
