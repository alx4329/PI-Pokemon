const { Router } = require('express');
const { conn } = require('../db.js');
const {  Type} = require('../db');
const router = require('express').Router();
const fetch = require('node-fetch')
const db = require('../db.js');
const loadTypes = require('../functions/loadTypes.jsx')

router.get('/types',async function(req,res){
    let types = await Type.findAll({
        attributes:{exclude:["createdAt","updatedAt"]},
        through:{attributes: []}
    });
    if(types.length>0) res.json(types)
    else{
        await loadTypes();
        const typs= await Type.findAll({
            attributes: {exclude:["createdAt","updatedAt"]},
            through: {attributes: []}
        })
        res.json(types)
    }
})

module.exports = router;