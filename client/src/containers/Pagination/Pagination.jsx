import React, {useEffect, useState} from 'react'; 
import {  useDispatch, useSelector } from "react-redux";
import './Pagination.css';
import { getPokes } from '../../actions/index';
import { PokeCard } from '../../components/PokeCard/PokeCard';
import Loading from '../../img/giphy.gif'


export function Pagination(props){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPokes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const [state, setState] = useState({
        currentPage:(1)
    });
    const pokesRedux = useSelector (state => state.pokes)
    const changes = useSelector( state => state.changes)
    console.log(pokesRedux)
    
    useEffect(()=>{
        setState({
            currentPage:1
        })
    },[pokesRedux, changes])

    const pokesPerPage = 9;

    function handleClick(event) {
        // console.log(event.target.id)
        setState({
            ...state,
            currentPage:(Number(event.target.id))
        })
        
    }


    const indexOfLastPoke = state.currentPage * pokesPerPage;
    const indexOfFirstPoke = indexOfLastPoke - pokesPerPage;
    const currentPokes = pokesRedux.slice(indexOfFirstPoke, indexOfLastPoke);
    
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pokesRedux.length / pokesPerPage); i++) {
        pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <li>
                <div
                key={number}                
                id={number}                
                onClick={handleClick}
                >
                {number}

                </div>
            </li>
        );
    });

    return (
        <div id ='bac'>
            <ul className='page-numbers'>
                {renderPageNumbers}                
            </ul>
            <div className='container'>
                <ul className="cards">
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <>{currentPokes.length === 0?<img className="Loading" src={Loading}/>: currentPokes.map((Pok)=><PokeCard Poke={Pok}/>)}</>
                </ul>
            </div>
        </div>
        
    )
}

export default (Pagination);


