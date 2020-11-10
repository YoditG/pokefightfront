import logo from './logo.svg';
import name from './name.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Switch, Link} from "react-router-dom";
//import PokeInfo from "./PokeInfo.js";
import ChoosePokemon from "./ChoosePokemon.js"
import { Grid } from '@material-ui/core';
import Battle from './Battle.js'

function App() {
  //const [start,setStart] = useState(false);
  const [allPokemon, setAllPokemon] = useState(null);
  const [allPokemon2,setAllPokemon2] = useState(null);
  const [opponent,setOpponent] = useState(null);
  const [selected, setSelected] = useState(null);
  const link = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"
  useEffect(()=>{
    fetch("/pokemon")
    .then(res=>res.json())
    .then(data=>{
      data&&console.log(data);
      setAllPokemon(data);
    })
    .then(data=>{data&&setAllPokemon2(data);console.log(data)})
    .catch(err=> console.log(err));
    
  },[])

  const handleSelection = (pokemon)=>{
    setSelected(pokemon);
  }
  const handleEnemy = (enemy)=>{
    setOpponent(enemy);
  }

 
  return (
    <div className="App">
      <header className="App-header">
      <Grid container direction="row" justify="center" alignItems="center"> 
      <img src={logo} className="App-logo" alt="logo" />
        <img src={name}  alt="name" />
      </Grid>
        
      </header>
  
      <Switch>
        <Route path="/:id/:info">
          {/* <PokeInfo /> */}
        </Route>
        <Route path="/:id">

        </Route>
        <Route path="/battle" pokemon={selected} opponent={opponent}>
          <Battle/>
        </Route>
        <Route path="/" >
          {allPokemon&&allPokemon.length&& 
          
          <ChoosePokemon allPokemon={allPokemon} handleEnemy={handleEnemy} handleSelection={handleSelection} />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
