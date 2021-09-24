import './App.css';
import { Route } from "react-router-dom";
import React from 'react';
import {LandingPage} from './containers/LandingPage/LandingPage.jsx';
import {Home} from './containers/Home/Home.jsx'
function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/pokemons" component={Home}/>
    </React.Fragment>
  );
}

export default App;
