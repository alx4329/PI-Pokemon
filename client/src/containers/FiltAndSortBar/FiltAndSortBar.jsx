import React from "react";
import './FiltAndSortBar.css';
import Search from '../../components/Search/Search'
import FiltByOrigin from '../../components/FiltByOrigin/FiltByOrigin'
import { FiltByType } from "../../components/FiltByType/FiltByTipe";

export function FiltAndSortBar(){
    return (
        <div>
            <Search/>
            <FiltByOrigin/>
            <FiltByType/>
        </div>
    )
}

export default FiltAndSortBar