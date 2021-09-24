import React from 'react'; 
import './Home.css';
import Search from '../../components/Search/Search';
import Pagination from '../Pagination/Pagination';


export function Home(){
    return(
    <>    
    <div className= "HomeBack">
        {/* <Search/>         */}
        <Pagination/>
    </div>    
    </>
    )
}

