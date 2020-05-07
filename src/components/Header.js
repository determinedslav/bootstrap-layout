import React, { useState } from 'react';

const Header = () => {

  return (
    <div className="bg-dark p-4">
        <div className="container">
            <img src= "images/logo.png" alt="logo"/>
            <div className = "float-right">
                <div className="dropdown">
                    <button className="btn btn-outline-secondary rounded-pill dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="m-1 ml-3 mr-3">English</span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">English</a>
                        <a className="dropdown-item" href="#">Not English</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;