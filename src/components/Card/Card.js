import React from 'react';

const Card = (props) => {
  console.log(props)
  return (
    <div className="Card">
      <h1>{props.name}</h1>
      <h3>{props.founded}</h3>
      <h3>{props.seats}</h3>
      <h3>{props.titles}</h3>
      <h3>{props.coatOfArms}</h3>
      <h3>{props.ancestralWeapons}</h3>
      <h3>{props.words}</h3>
    </div>
  );
};

export default Card; 