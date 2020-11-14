import React, { useState, } from "react";
import { Link } from 'react-router-dom';
import BattleCards from "./BattleCards.js";

// importing material ui grid components

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const Battle = (props) => {



  const link =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/";

  props.pokemon.image = `${link}${props.pokemon.id}.png`;
  props.opponent.image = `${link}${props.opponent.id}.png`;

  // Cleaning up the poke objects:

  const [playerPokemon, setPlayerPokemon] = useState({
    id:     props.pokemon.id,
    name:   props.pokemon.name.english,
    image:  props.pokemon.image,
    hp:     props.pokemon.base.HP,
    attack: props.pokemon.base.Attack,
    defense:props.pokemon.base.Defense
  });
  const [enemyPokemon, setEnemyPokemon] = useState({
    id:     props.opponent.id,
    name:   props.opponent.name.english,
    image:  props.opponent.image,
    hp:     props.opponent.base.HP,
    attack: props.opponent.base.Attack,
    defense:props.opponent.base.Defense
  });

/*   const [playerPokemon, setPlayerPokemon] = useState(props.pokemon);
  const [enemyPokemon, setEnemyPokemon] = useState(props.opponent); */

  /*   setPlayerPokemon(prevState => ({...prevState, image: `${link}${props.pokemon.id}.png`}));
  setEnemyPokemon(prevState => ({...prevState, image: `${link}${enemyPokemon.id}.png`})); */

  // Determine the starter pokemon

  let starter;
  let waiter;

  const determineStarter = () => {

    const value = Math.random();

    if (value > 0.5) {
      starter = playerPokemon;
      waiter = enemyPokemon;
    } else {
      starter = enemyPokemon;
      waiter = playerPokemon;
    }
  }
  determineStarter();

  // Define basic fight per round

  const fightRound = (attacked, attacker) => {
    let currentHp = attacked.hp - attacker.attack * 0.2 - attacked.defense * 0.05;
/*   setPlayerPokemon((prevState) => {
      return {
              ...prevState,
              hp: currentHp,
            };
    }); */
    attacked.hp = Math.floor(currentHp);
    console.log('Attacker = ', attacker.name)
  };



  // Define the fullFight by looping over the fight rounds untill the hp of one pokemon is at 0.
  
  const fullFight = (pokemonOne, pokemonTwo) => {
    while (pokemonOne.hp > 0 && pokemonTwo.hp > 0) {
      fightRound(pokemonOne, pokemonTwo);
      console.log(pokemonOne.name + ' : ' + pokemonOne.hp + '\n' + pokemonTwo.name + ' : ' + pokemonTwo.hp)
      pokemonOne = [pokemonTwo, pokemonTwo = pokemonOne][0];
      console.log('switched attck order')
      console.log('Another round will start NOW.')
    }
    if (pokemonOne.hp <= 0) {
      console.log(pokemonOne.name + ' looses...')
      console.log(pokemonTwo.name + ' WINS!')
    } else if (pokemonTwo.hp <= 0) {
      console.log(pokemonTwo.name + ' looses...')
      console.log(pokemonOne.name + ' WINS!')
    } else {
      console.log('That is simply impossible')
    }
  }

  return (
    <div>
      <Grid container 
        spacing={3}
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        
        <Grid item lg={12}>
          <Typography variant="h2" gutterBottom>You entered the arena</Typography>
        </Grid>
        <Grid item lg={12}>
        <Typography variant="h4" gutterBottom>{starter.name} begins!</Typography>
        </Grid>
        <Grid item lg={6} justify="center" alignItems="flex-start" direction="row">
          <BattleCards pokemon={playerPokemon} />
        </Grid>
        <Grid item lg={6} justify="center" alignItems="flex-start" direction="row">
          <BattleCards pokemon={enemyPokemon} />
        </Grid>
        <Grid item lg={6}>
          <Link to="/">
            <Button variant="contained"> Duck Out </Button>
          </Link>
        </Grid>
        <Grid item lg={6}>
          <Button variant="contained" color="secondary" onClick={() => fullFight(waiter, starter)}> Fight! </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Battle;
