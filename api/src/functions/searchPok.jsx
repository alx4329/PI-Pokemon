const fetch = require('node-fetch')
const { Pokemon,Type } = require('../db');

async function searchPok(name){
    let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    let pokemonToSend =[];
    if(pokemon.status === 200){
        pokemon = await pokemon.json()
        const poke = {
            name:pokemon.name,
            id:pokemon.id,
            img:pokemon.sprites.other.dream_world.front_default|| pokemon.sprites.other.dream_world.front_default ||pokemon.sprites.front_default,
            types: pokemon.types,
            strength: pokemon.stats[1].base_stat,
        }
        pokemonToSend.push(poke)
        return pokemonToSend;
    } else{
        let dbPok = await Pokemon.findAll({
            where: {
                name: name
            },
            include:{model: Type, attributes:{exclude:["createdAt","updatedAt"]}, through: {attributes: []} }
        })
        if (dbPok.length===0) {
            return {error:'not found'}}
            else {
                pokemonToSend.push(dbPok)
                return pokemonToSend;}
    }
    // console.log(pokemon)
}

module.exports = searchPok