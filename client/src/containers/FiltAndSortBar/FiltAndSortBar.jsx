import React from "react";
import './FiltAndSortBar.css';
import Search from '../../components/Search/Search'
import Sort from '../../components/Sort/Sort'
// import Types from '../../components/Types/Types'

export function FiltAndSortBar(){
    return (
        <div>
            <Search/>
            {/* <Sort/>
            <Types/> */}
        </div>
    )
}

export default FiltAndSortBar