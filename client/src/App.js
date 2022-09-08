import './App.css';
import { Route } from "react-router-dom";
import React from 'react';
import {LandingPage} from './containers/LandingPage/LandingPage.jsx';
import {Home} from './containers/Home/Home.jsx'
import {NavBar} from './components/Navbar/NavBar.jsx'
import { Create } from './components/Create/Create';
import {PokeDetail} from './components/PokeDetail/PokeDetail';

function App() {
  return (
    <React.Fragment>
      <Route path ={["/pokemons",'/create','/pokemon',"/pokemon/:id"]} component={NavBar}/>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/pokemons" component={Home}/>
      <Route exact path="/create" component={Create}/>
      <Route exact path="/pokemon/:id" component={PokeDetail}/>
    </React.Fragment>
  );
}

export default App;
