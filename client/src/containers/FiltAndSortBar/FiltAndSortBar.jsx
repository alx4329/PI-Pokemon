import React from "react";
import './FiltAndSortBar.css';
import Search from '../../components/Search/Search'
import FiltByOrigin from '../../components/FiltByOrigin/FiltByOrigin'
import { FiltByType } from "../../components/FiltByType/FiltByTipe";
import Sort from "../../components/Sort/Sort";

export function FiltAndSortBar(){
    return (
        <div className = "bar2">
            <div className="options-container">
                <FiltByOrigin/>
                <Sort/>
                <FiltByType/>
            </div>
            <div className='search'>
                <Search/>
            </div>
        </div>
    )
}

export default FiltAndSortBar