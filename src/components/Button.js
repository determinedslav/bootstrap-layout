import React from 'react';

const Button = props => {

  return (
    <button className= {"btn rounded-pill "+ props.style} ><div className={"m-1 ml-4 mr-4 " +props.textStyle}>{props.text}</div></button>
  );
}

export default Button;