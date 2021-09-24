import React /* { useEffect } */ from "react"; 
// import {useDispatch} from "react-redux";
import { Link } from 'react-router-dom';
import './LandingPage.css';
// import { getPokes } from "../../actions";

export function LandingPage(){
    return (
        <div className ='backLP'>
        <div className='inline'>
            <div id='welcome' >Welcome to PokeApi</div>
                <Link to= '/pokemons' >
                        <button id ="start" >Go</button>
                </Link>
    
            </div>
            
        
            </div>
        );
    
    }

export default (LandingPage);