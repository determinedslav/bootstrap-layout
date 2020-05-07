import React from 'react';
import Button from './Button';
//import '../assets/css/categoryCardComponent.css'

const CategoryCard = props => {

  return (
    <div className ="bg-dark rounded-lg p-5" style={
    {backgroundImage: "url("+props.imageUrl+")",  
    backgroundPosition: 'right',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
        <div className ="w-50">
            <div className="text-white text-uppercase font-weight-bold h4 mb-lg-5 mb-3">{props.title}</div>
            <div className="text-muted mb-lg-5 mb-3">{props.description}</div>
            <Button text={props.buttonText} style="btn-success btn-sm font-weight-bold"></Button>
        </div>
    </div>
  );
}

export default CategoryCard;