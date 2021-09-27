import React from "react";
import './FiltAndSortBar.css';
import Search from '../../components/Search/Search'
import FiltByOrigin from '../../components/FiltByOrigin/FiltByOrigin'
import { FiltByType } from "../../components/FiltByType/FiltByTipe";
import Sort from "../../components/Sort/Sort";

export function FiltAndSortBar(){
    return (
        <div className = "bar2">
            <FiltByOrigin/>
            <Sort/>
            <FiltByType/>
            <Search/>
        </div>
    )
}

export default FiltAndSortBar