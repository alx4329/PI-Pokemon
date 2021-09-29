import React from 'react'; 
import { Link } from 'react-router-dom';
import './PokeCard.css'
import defImg from '../../img/pokebola.png'

export function PokeCard(props){
    
    return (
        <div className ='card'>
            <div className="row-card">
                <div className="column-card">
                    <Link className="link" to = {`/pokemon/${props.Poke.id}`}>
                        <p className= "card-title" >{props.Poke.name}</p>
                    </Link>
                    <div className="details-card">
                        <p>{stringyfyArray(props.Poke.types,props.Poke.id)}</p>
                        <p>{props.Poke.strength}</p>
                    </div>
                </div>

                <div className="column-card">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img className='image-card' src={props.Poke.img?props.Poke.img:defImg} alt="No image"/>

                </div>
            </div>            
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