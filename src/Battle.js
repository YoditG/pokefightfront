import React from "react";

const Battle = (props) => {
  console.log("battle");
  console.log(props);
  return (
    <div>
      <h1>huhu</h1>
      {props.pokemon.name.english}
    </div>
  );
};

export default Battle;
