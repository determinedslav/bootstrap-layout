import React from 'react';

const GameProviderItem = props => {

  return (
    <a href="#">
        <div className="">
            <img className="img-fluid border-0 rounded-lg" src= {"images/" +props.image+ ".png"} alt={props.image}/>                   
        </div>
    </a>
  );
}

export default GameProviderItem;