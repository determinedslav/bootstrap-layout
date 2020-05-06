import React, { useState } from 'react';
import FooterLinkItem from './FooterLinkItem'
import FooterSocialItem from './FooterSocialItem'

const Footer = () => {

  return (
    <div className="container border-top border-secondary">
        <div className="row mt-3">
            <div className="col-2">
                <div className="mb-4">
                    <img src= "images/logofoot.png" alt="logo"/>
                </div>
                <div className="small text-secondary">
                Sportsbet.io is owned and operated by mBet Solutions NV (Kaya Richard J. Beaujon Z/N Landhuis Joonchi II Curaçao). It is licensed and regulated by the Government of Curaçao under the gaming license 1668/JAZ. The site is powered by the Coingaming.io Bitcoin Sports and Casino Gaming platform, and allows players to play with EUR and Bitcoins. The site is not an exchange and funds can not be converted from euros to bitcoins.
                </div>
            </div>
            <div className="col-2">
                <div className="mb-4">
                    <a className="text-white font-weight-bold" href="#">
                        Sports
                    </a>
                </div>
                <FooterLinkItem text="Promotions"></FooterLinkItem>
                <FooterLinkItem text="In play"></FooterLinkItem>
                <FooterLinkItem text="Upcoming"></FooterLinkItem>
            </div>
            <div className="col-2">
                <div className="mb-4">
                    <a className="text-white font-weight-bold" href="#">
                        Casino
                    </a>
                </div>
                <FooterLinkItem text="Live Casino"></FooterLinkItem>
            </div>
            <div className="col-2">
                <div className="mb-4">
                    <a className="text-white font-weight-bold" href="#">
                        Support
                    </a>
                </div>
                <FooterLinkItem text="Payment Options"></FooterLinkItem>
                <FooterLinkItem text="Responcible Gambling"></FooterLinkItem>
                <FooterLinkItem text="FAQ"></FooterLinkItem>
            </div>
            <div className="col-2">
                <div className="mb-4">
                    <a className="text-white font-weight-bold" href="#">
                        About
                    </a>    
                </div>
                <FooterLinkItem text="Privacy Policy"></FooterLinkItem>
                <FooterLinkItem text="About Us"></FooterLinkItem>
                <FooterLinkItem text="Terms and Conditions"></FooterLinkItem>
            </div>
            <div className="col-2">
                <div className="text-white">
                    Follow us
                </div>
                <FooterSocialItem></FooterSocialItem>
            </div>
        </div>
    </div>
  );
}

export default Footer;