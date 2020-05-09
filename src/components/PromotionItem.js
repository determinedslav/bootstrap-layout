import React from 'react';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PromotionItem = props => {

  return (
    <a className="text-muted" href="#">
        <div className="bg-dark rounded-lg">
            <div className="row">
                <div className ="col-7 p-5">
                    <div className="text-white mb-1 h-5">{props.title}</div>
                    <div className="text-muted small">{props.description}</div>
                </div>
                <div className="col-5" style={
                {backgroundImage: "url(images/"+props.image+".jpg)",  
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '200px'}}>
                    <div className="bg-warning text-white d-inline-flex p-1">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
            </div>
        </div>
    </a>
  );
}

export default PromotionItem;