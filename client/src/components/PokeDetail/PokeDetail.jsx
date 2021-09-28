import React, { useEffect, useState } from 'react';
import { bringPokeToDetail } from '../../actions';
import './PokeDetail.css';
import Loading from '../../img/giphy.gif'
import defImg from '../../img/pokebolaedit.png'
import { useDispatch, useSelector } from 'react-redux';

export function PokeDetail(props){
    const id= props.match.params.id;
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true); 

    useEffect(()=>{
        setLoading(true)
        dispatch(bringPokeToDetail(id))
        .then(()=>setLoading(false))
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    let poke = useSelector( state => state.pokeDetail); 

    if(loading) {
        return(
            <div className = "cardDetail">
                 {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img className="Loading" src={Loading}/>
            </div>
        )
    } else {
        return(
            <div className="cardDetail">                    
                <p className="pokemoName">{poke.name}</p>
                <div className="details">
                    <div className="subtitle">
                        <p>Life: {poke.life}</p>
                        <p>Strength: {poke.strength}</p>
                    </div>
                    <p >Types: {stringyfyArray(poke.types,poke.id)}</p>  
                </div>                

                <div className="imageContainer">
                    <img className="imageDetail" src={poke.img? poke.img:defImg}  alt="" />
                </div>        
            </div>
        )
    }
    


}

function stringyfyArray(array,id){
    let String =''
    if(/^[0-9]+$/.test(id)){
        String = array.map((item)=> item.type.name)
    } else String = array.map((item)=> item.name)

    return String.join(', ')
}
export default (PokeDetail)