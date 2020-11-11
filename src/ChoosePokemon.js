import React from "react";
import "./App.css";
import { Box } from "@material-ui/core";
import PokeCard from "./PokeCard.js";
import { Link } from "react-router-dom";
//import { Link } from 'react-router-dom';

const ChoosePokemon = (props) => {
  const allPokemon = props.allPokemon;
  const randomEnemy = allPokemon[Math.floor(0 + Math.random() * 808)];
  
  

  //const [pokemon,setPokemon] = useState("");
  const link =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/";

  // useEffect(
  //     fetch(`https://pokeapi.co/api/v2/pokemon/${pokePointer}`)
  //         .then(res=>res.json())
  //         .then(data=>data&&console.log(data))
  //         ,[pokePointer])

  const randomPokemon = () => {
    const fivePokemon = [];

    for (let ii = 1; ii <= 5; ii++) {
      fivePokemon.push(allPokemon[Math.floor(0 + Math.random() * 808)]);
    }

    return (
      <Box display="flex" flexDirection="row" justifyContent="space-around">
        <Box display="flex" flexDirection="row">
          {fivePokemon &&
            fivePokemon.map((poke, index) => {
              return (
                <PokeCard
                  pokemon={poke}
                  opponent={randomEnemy}
                  image={`${link}${poke.id}.png`}
                  handleSelection={props.handleSelection}
                  flag={true}
                />
              );
            })}
        </Box>
        <Box>
          <PokeCard
            pokemon={randomEnemy}
            image={`${link}${randomEnemy.id}.png`}
            flag={false}
          />
        </Box>
      </Box>
    );
  };

  return <div>{randomPokemon()}</div>;
};

export default ChoosePokemon;
