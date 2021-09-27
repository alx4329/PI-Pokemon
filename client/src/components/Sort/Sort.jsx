import React from "react";
import { useDispatch } from "react-redux";
import { orderByAlphabet, orderByStrength } from "../../actions";
import './Sort.css'

export function Sort(){
    const dispatch = useDispatch();

    return(
        <div className="dropdown">
            <button className="dropbtn" >Sort By</button>
                <div className='dropdown-content'>
                    <button className="buttonlb" onClick={()=> dispatch(orderByAlphabet('ascending'))}>A-Z</button>
                    <button className="buttonlb" onClick={()=> dispatch(orderByAlphabet('descending'))}>Z-A</button>
                    <button className="buttonlb" onClick={()=> dispatch(orderByStrength('ascending'))}>Strength Up</button>
                    <button className="buttonlb" onClick={()=> dispatch(orderByStrength('descending'))}>Strength Down</button>
                </div>
        </div>
    )
}

export default(Sort)