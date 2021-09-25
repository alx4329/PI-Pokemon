import React from 'react'; 
import './Home.css';
import FiltAndSortBar from '../FiltAndSortBar/FiltAndSortBar.jsx'
import Pagination from '../Pagination/Pagination';


export function Home(){
    return(
    <>    
    <div className= "HomeBack">
        <FiltAndSortBar/>        
        <Pagination/>
    </div>    
    </>
    )
}

