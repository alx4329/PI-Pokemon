import React from 'react'; 
import { Link } from 'react-router-dom';
import './PokeCard.css'
import defImg from '../../img/Ash.png'

export function PokeCard(Properties){
    return (
        <div className ='card'>
            <Link className= "card-title" to = {`/videogame/${Properties.Poke.id}`}>
                <p >{Properties.Poke.name}</p>
            </Link>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img className='image' src={Properties.Poke.img?Properties.Poke.img:defImg} alt="No image"/>
            <div className="rating">{Properties.Poke.rating}</div> 
            <p>{stringyfyTypes(Properties.Poke.types)}</p>
        </div>
    )
}

function stringyfyTypes(array){
    // console.log(array)
    let typeString = array.map((item)=> item.type.name)
    return typeString.join(', ')
}

export default (PokeCard);