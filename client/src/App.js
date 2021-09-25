import './App.css';
import { Route } from "react-router-dom";
import React from 'react';
import {LandingPage} from './containers/LandingPage/LandingPage.jsx';
import {Home} from './containers/Home/Home.jsx'
import {Navbar} from './components/Navbar/Navbar.jsx'

function App() {
  return (
    <React.Fragment>
      {/* <Route path ={["/pokemons",'/create','/pokemon',"/pokemon/:id"]} component={Navbar}/> */}
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/pokemons" component={Home}/>
    </React.Fragment>
  );
}

export default App;
