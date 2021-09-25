import './App.css';
import { Route } from "react-router-dom";
import React from 'react';
import {LandingPage} from './containers/LandingPage/LandingPage.jsx';
import {Home} from './containers/Home/Home.jsx'
import {Navbar} from './components/Navbar/Navbar.jsx'
import { Create } from './components/Create/Create';

function App() {
  return (
    <React.Fragment>
      <Route path ={["/pokemons",'/create','/pokemon',"/pokemon/:id"]} component={Navbar}/>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/pokemons" component={Home}/>
      <Route exact path="/create" component={Create}/>
    </React.Fragment>
  );
}

export default App;
