const { Router } = require('express');
const { conn } = require('../db.js');
const { Pokemon, Type} = require('../db');
const router = require('express').Router();
const fetch = require('node-fetch')
const db = require('../db.js');
const getPoks = require('../functions/getPoks.jsx');
const searchPok = require('../functions/searchPok.jsx');



router.get('/pokemons',async function(req,res){
    try {
        // let {name, limit, offset} = req.query       
        let {name} = req.query       
        let pokemons=[];
        if(name){
            let pokemons = await searchPok(name);
            
            res.send(pokemons)

        } else {
            
            if(limit && offset) {
                pokemons = await getPoks(limit,offset);}
            else  pokemons = await getPoks();
            // console.log(games.length)
            res.send(pokemons)
        }        
    } catch (error){
        console.log(error)
    }
})
router.get('/pokemon/:idPokemon', async function(req,res){
    let idPokemon = req.params.idPokemon;
    const error ="Not Found"
    
    try{
        if(/^[0-9]+$/.test(idPokemon)){    
            let request = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
            if(request.status===200){
                let pokemon = await request.json()
                const pokemonToSend ={
                    name:pokemon.name,
                    id:pokemon.id,
                    img:pokemon.sprites.other.dream_world.front_default|| pokemon.sprites.other.dream_world.front_default ||pokemon.sprites.front_default,
                    types: pokemon.types,
                    life:pokemon.stats[0].base_stat,
                    height:pokemon.height,
                    weight:pokemon.weight,
                    strength: pokemon.stats[1].base_stat,
                    defense: pokemon.stats[2].base_stat,
                    speed: pokemon.stats[5].base_stat,
                }
                res.send(pokemonToSend)
                
            } else res.status(404).send({error: error})
        } else if(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(idPokemon)){    
            let dbPok = await Pokemon.findAll({
                where: {
                    id: idPokemon
                },
                include: [
                    {model: Type, attributes:{exclude:["createdAt","updatedAt"]}, through: {attributes: []} },
                    
                ],            })
            if (dbPok.length>0){
                res.send(dbPok[0])}
                else res.status(404).send({error: error})
        } else {
            res.send({error:"Not a valid Id"})
        }
        
    } catch(error){
        console.log(error)
    }
})
//id, name, life, strength, defense, speed, height, weight
router.post('/pokemon', async function(req,res){
    let { name, life, strength, defense, speed, height, weight, types, newTypes, maxId} = req.body;
    let typesId = [];
    if(types) typesId = types; 
    if(newTypes){
        let typs  = newTypes.map((type)=>{
            maxId++
            return Type.create({ 
                name:type,
                id: maxId
            })
        })
        console.log(typs)
        await Promise.all(typs).then((values)=> values.map((item)=> typesId.push(item.id)))
    } 

    const newPokemon = await Pokemon.create({
        name: name,
        life:life,
        strength:strength,
        defense: defense,
        speed: speed,
        height: height,
        weight: weight
    })

    await newPokemon.setTypes(typesId);
    const pokemonCreated = await Pokemon.findOne({
        where: {
            id: newPokemon.id
        },
        include: {model: Type, attributes:{exclude:["createdAt","updatedAt"]}, through: {attributes: []} },
        attributes: {exclude:["createdAt","updatedAt"]}
    })
    res.json(pokemonCreated)
})

module.exports = router;