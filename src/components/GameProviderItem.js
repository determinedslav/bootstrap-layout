import React from 'react';

const GameProviderItem = props => {

  return (
    <div>
      <a href="#">
        <img className="img-fluid border-0 rounded-lg" src= {"images/" +props.image+ ".png"} alt={props.image}/>                   
      </a>
    </div>
  );
}

export default GameProviderItem;