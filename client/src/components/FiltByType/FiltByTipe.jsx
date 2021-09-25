import React, {useE, useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { filtByType, getTypes } from "../../actions";
import './FiltByType.css';

export function FiltByType(){
    const dispatch = useDispatch(); 
    useEffect(()=>{
        dispatch(getTypes())
    },[]);
    function handleClick(value){
        dispatch(filtByType(value))
    }

    const types = useSelector(state=> state.types);

    const renderTypes =types.map((type,index)=>{
        return(
            <ul>
                <button 
                key={index}
                onClick = {()=>handleClick(type.name)}
                className='buttonType'
                >
                {type.name}
                </button>
            </ul>
        )
    })
    return(
        <div>
            {renderTypes}
        </div>
    )

}