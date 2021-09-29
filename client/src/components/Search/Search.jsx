import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { getPokes } from "../../actions";
import './Search.css'


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
        
        <div className="search-container" >        
            <form  onSubmit={(e) =>  handleSubmit(e)}>
                <input
                    type="text"
                    className="search-input"
                    autoComplete="off"
                    placeholder= "Find your Pokemon..."
                    value={pokeToFind}
                    onChange={(e) => handleChange(e)}
                />
                <button className="searchButton" type="submit"></button>
                
            </form>

        </div>
        
    )
}

export default Search
