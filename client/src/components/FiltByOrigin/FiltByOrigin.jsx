import React, {useState} from "react";
import { getPokes, bringPokes } from "../../actions";
import { useDispatch } from "react-redux";
import './FiltByOrigin.css';

export function FiltByOrigin(){
    const dispatch =useDispatch();
    const [option, setOption] =useState(['All'])

   

    return(
        <div className = 'showingOptions'>
                    <button onClick= {()=> dispatch(getPokes())}>All</button>
                    <button onClick= {()=> dispatch(bringPokes('api'))}>Api</button>
                    <button onClick= {()=> dispatch(bringPokes('created'))}>Created</button>

                </div>
        

        
    )
}
export default FiltByOrigin;