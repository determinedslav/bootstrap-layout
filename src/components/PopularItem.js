import React from 'react';

const PopularItem = props => {

  return (
    <a className="text-white" href="#">
        <div className="">
            <img className="img-fluid border-0 rounded-lg" src= {"images/" +props.image+ ".png"} alt={props.image}/>
            <span className="ml-lg-2 mt-1 text-center d-lg-inline d-block">{props.text}</span>                   
        </div>
    </a>
  );
}

export default PopularItem;