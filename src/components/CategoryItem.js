import React from 'react';

const CategoryItem = props => {

  return (
    <a className="text-secondary ml-3 mb-2" href="#">
      <div className={"text-" +props.iconColor+ " h4 border-0 rounded-lg bg-dark p-3"}>
        {props.icon}                
      </div>
      <div className="small text-center text-wrap">
        {props.text}
      </div>
    </a>
  );
}

export default CategoryItem;