const fetch = require('node-fetch')
const { Pokemon,Type } = require('../db');


//Gets all the pokemons at the beginning, as it's asked in the job. 
//Must change this later. 
getPoks = async function(amount,of){
    console.time('loop')
    let pokemonlist =[];
    let limit;
    let offset; 
    // let pedidp = await fetch(' https://pokeapi.co/api/v2/pokemon')
    // .then((res)=>res.json())
    // .then((json)=> count=json.count)
    amount? limit=amount : limit =40;
    of ? offset = of : offset=0;
    
    let list = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    .then((res)=>res.json())
    .then((json)=> json)
    let pokemons=[];
    
    let requests = list.results.map((poke)=>{
        
        return fetch(`${poke.url}`)
        .then((res)=>res.json())
        .then((json)=>{                
            
            const poke = {
                name:json.name,
                id:json.id,
                img:json.sprites.other.dream_world.front_default|| json.sprites.other.dream_world.front_default ||json.sprites.front_default,
                types: json.types
            }
            pokemons.push(poke)
        })
    })
    await Promise.all(requests)
    
    let dbPokes = await Pokemon.findAll({
        include:{model: Type, attributes:{exclude:["createdAt","updatedAt"]}, through: {attributes: []} }
    });
    let pokemonsToSend = pokemons.concat(dbPokes)
    console.timeEnd('loop')
    return pokemonsToSend
    
}

module.exports = getPoks