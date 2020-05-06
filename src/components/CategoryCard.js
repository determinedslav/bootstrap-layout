import React from 'react';
import Button from './Button';
//import '../assets/css/categoryCardComponent.css'

const CategoryCard = props => {

  return (
    <div className ="bg-dark rounded-lg p-4" style={
    {backgroundImage: "url(images/card-sports3.png)",  
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat'}}>
        <div className ="">
            <div className="text-white text-uppercase font-weight-bold" style={{fontSize:"1.5em"}}>Sports</div>
            <div className="text-muted">Price Boost every day in all sports</div>
            <Button text="Go to Sport" style="btn-success btn-sm font-weight-bold"></Button>
        </div>
    </div>
  );
}

export default CategoryCard;