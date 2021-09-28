import React, { useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { filtByType, getTypes } from "../../actions";
import './FiltByType.css';
import { options } from "../Sort/Sort";

export function FiltByType(){
    const dispatch = useDispatch(); 
    const reduxOption = useSelector(state => state.option)
    useEffect(()=>{
        dispatch(getTypes())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    function handleClick(value){
        dispatch(filtByType(value))
    }

    const types = useSelector(state=> state.types);

    const renderTypes =types.map((type,index)=>{
        return(
            
                <button 
                key={index}
                onClick = {()=>handleClick(type.name)}
                className='buttonType'
                >
                {type.name}
                </button>
            
        )
    })
    return(
        <div className="sortBox">
            <div className="dropdown">
                <button className="dropbtn">Type</button>
                <div className="dropdown-content">
                {renderTypes}

                </div>
            </div>
            {!options.includes(reduxOption)?<p>{reduxOption}</p>:''}
        </div>
    )

}