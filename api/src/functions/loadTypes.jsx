const { default: fetch } = require('node-fetch')
const { conn} = require('../db')
const {Type} = require('../db')

async function loadTypes(){
    let list = await fetch('https://pokeapi.co/api/v2/type');
    let json = await list.json();

    let types =[]; 
    
    let requests = json.results.map((type)=>{
        return fetch(`${type.url}`)
        .then((res)=>res.json())
        .then((json)=>{  
            const type ={
                id: json.id,
                name: json.name
            }
            types.push(type)
        })
    })

    await Promise.all(requests)

    let newTypes = types.map((type)=>{
        Type.create({
            name:type.name,
            id:type.id
        })
    })
    return Promise.all(newTypes)
    .then(console.log('types loaded!'));
}

module.exports = loadTypes