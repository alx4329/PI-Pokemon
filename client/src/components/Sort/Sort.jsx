import React from "react";
import { useDispatch } from "react-redux";
import { orderByAlphabet, orderByStrength } from "../../actions";
import './Sort.css'

export function Sort(){
    const dispatch = useDispatch();

    return(
        <div className="sortBy">
            <div className="droptbtn" >Sort By</div>
            <button className="buttonlb" onClick={()=> dispatch(orderByAlphabet('ascending'))}>A-Z</button>
            <button className="buttonlb" onClick={()=> dispatch(orderByAlphabet('descending'))}>Z-A</button>
            <button className="buttonlb" onClick={()=> dispatch(orderByStrength('ascending'))}>Strength Up</button>
            <button className="buttonlb" onClick={()=> dispatch(orderByStrength('descending'))}>Strength Down</button>
        </div>
    )
}

export default(Sort)