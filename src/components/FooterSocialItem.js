import React from 'react';

const footerSocialItem = props => {

  return (
    <div className="pr-2 pb-2">
        <a className="border-0 rounded-circle bg-dark text-white pt-1 pb-1 pl-2 pr-2" href="#">
          {props.icon}
        </a>
    </div>
  );
}

export default footerSocialItem;