import React from 'react'; 
import { Link } from 'react-router-dom';
import './PokeCard.css'
import defImg from '../../img/Ash.png'

export function PokeCard(props){
    console.log(props.Poke.name)
    return (
        <div className ='card'>
            <Link className= "card-title" to = {`/pokemon/${props.Poke.id}`}>
                <p >{props.Poke.name}</p>
            </Link>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img className='image' src={props.Poke.img?props.Poke.img:defImg} alt="No image"/>
            
            <p>{stringyfyArray(props.Poke.types,props.Poke.id)}</p>
            <p>{props.Poke.strength}</p>
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