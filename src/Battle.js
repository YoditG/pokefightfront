import React, { useState } from "react";
import BattleCards from "./BattleCards.js";

// importing material ui grid components

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



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
      <h1>You entered the arena</h1>
      <h3>{starter.name} begins!</h3>
      <BattleCards pokemon={playerPokemon} />
      <BattleCards pokemon={enemyPokemon} />
      <button onClick={() => fullFight(waiter, starter)}> Fight! </button>
    </div>
  );
};

export default Battle;
