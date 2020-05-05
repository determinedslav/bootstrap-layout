import React, { useState } from 'react';

const Header = () => {

  return (
    <div className="sticky-top bg-dark p-4">
        <div className="container">
            <img src= "images/logo.png" alt="logo"/>
            <div className = "float-right">
                <div className="dropdown">
                    <button className="btn btn-success rounded-pill dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        English
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