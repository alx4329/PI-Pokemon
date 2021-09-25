import React from 'react'; 
import { Link } from 'react-router-dom';
import './PokeCard.css'
import defImg from '../../img/Ash.png'

export function PokeCard(Properties){
    return (
        <div className ='card'>
            <Link className= "card-title" to = {`/pokemon/${Properties.Poke.id}`}>
                <p >{Properties.Poke.name}</p>
            </Link>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img className='image' src={Properties.Poke.img?Properties.Poke.img:defImg} alt="No image"/>
            <div className="rating">{Properties.Poke.rating}</div> 
            <p>{stringyfyArray(Properties.Poke.types,Properties.Poke.id)}</p>
            <p>{Properties.Poke.strength}</p>
        </div>
    )
}

function stringyfyArray(array,id){
    let String =''
    if(/^[0-9]+$/.test(id)){
        String = array.map((item)=> item.type.name)
    } else String = array.map((item)=> item.name)

    return String.join(', ')
}

export default (PokeCard);