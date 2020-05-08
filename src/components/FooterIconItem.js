import React from 'react';

const footerIconItem = props => {

  return (
    <div className="p-2">
        <a href="#">
            <img className="w-50 img-fluid border-0 rounded-lg" src= {"images/" +props.image+ ".png"} alt={props.image}/>
        </a>
    </div>
  );
}

export default footerIconItem;