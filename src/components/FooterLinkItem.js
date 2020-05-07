import React from 'react';

const footerLinkItem = props => {

  return (
    <div>
        <a className="text-secondary" href="#">
          {props.text}
        </a>
    </div>
  );
}

export default footerLinkItem;