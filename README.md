<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Pokemon

<p align="left">
  <img height="150" src="./pokemon.png" />
</p>

Henry Pokemon es una SPA realizada en el bootcamp HENRY. 

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.


La idea general es crear una aplicación en la cual se puedan ver los distintos Pokemon utilizando la api externa [pokeapi](https://pokeapi.co/) y a partir de ella poder, entre otras cosas:

  - Buscar pokemons
  - Filtrarlos / Ordenarlos
  - Crear nuevos pokemons


#### Tecnologías utilizadas:
- [✔️] React
- [✔️] Redux
- [✔️] Express
- [✔️] Sequelize - Postgres


#### Frontend

Rutas:

-LandingPage

-Ruta Principal, compusta por:
- [✔️] Input de búsqueda para encontrar pokemons por nombre (La búsqueda será exacta, es decir solo encontrará al pokemon si se coloca el nombre completo)
- [✔️] Área donde se verá el listado de pokemons. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta `GET /pokemons` y deberá mostrar su:
  - Imagen
  - Nombre
  - Tipos (Electrico, Fuego, Agua, etc)
- [✔️] Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado por nosotros
- [✔️] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons por orden alfabético y por fuerza
- [✔️] Paginado para ir buscando y mostrando los siguientes pokemons, 12 pokemons por pagina, mostrando los primeros 9 en la primer pagina.


__Ruta de detalle de Pokemon__:
- [✔️] Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
- [✔️] Número de Pokemon (id)
- [✔️] Estadísticas (vida, fuerza, defensa, velocidad)
- [✔️] Altura y peso

__Ruta de creación__:
- [✔️] Un formulario __controlado__ con los campos mencionados en el detalle del pokemon
- [✔️] Posibilidad de seleccionar/agregar más de un tipo de pokemon
- [✔️] Botón/Opción para crear un nuevo pokemon

#### Base de datos

Entidades:

- [✔️] Pokemon con las siguientes propiedades:
  - ID (Número de Pokemon) *
  - Nombre *
  - Vida
  - Fuerza
  - Defensa
  - Velocidad
  - Altura
  - Peso
- [✔️] Tipo con las siguientes propiedades:
  - ID
  - Nombre


#### Backend

Servidor desarrollado en Node/Express con los siguientes endpoints:

- [✔️] __GET /pokemons__:
 
- [✔️] __GET /pokemons/{idPokemon}__:
 
- [✔️] __GET /pokemons?name="..."__:
  
- [✔️] __POST /pokemons__:
  
- [✔️] __GET /types__:
 
