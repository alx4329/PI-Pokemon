const { Router } = require('express');
const Pokemon = require('./pokemons')
const Types = require('./types')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use(Pokemon)
router.use(Types)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
