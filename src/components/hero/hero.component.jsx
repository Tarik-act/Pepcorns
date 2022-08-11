import React from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import './hero.styles.scss';

const Hero = () => {
  return (
    <>
      <div className='hero-container'>
        <div className='hero-button-group'>
          <Button buttonType={BUTTON_TYPE_CLASSES.outline}>Dashboard</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.secondary}>Login Now</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.secondary}>
            Back to Website
          </Button>
        </div>
        <div className='hero-card'>
          <div className='card-content'>
            <img
              src='	https://api.pepcorns.com/clientassets/icon1651230435196.png'
              alt=''
            />

            <div className='card-info'>
              <h1>Letzrent</h1>
              <p class='address'>Address : Mumbai Maharashtra</p>
              <p className='contact'>
                <span>●</span> EMAIL : | Website : https://letzrent.com |
                PAN/TAN : AAJCR3294F
              </p>
              <p class='lead'>
                Online search, compare & booking platform for self-drive cars,
                charter flights, living space & more that rewards users
              </p>
            </div>
            <div className='card-links'>
              <div className='link'>
                <a href='/#'>
                  <i class='fa-solid fa-user-plus'>Follow</i>
                </a>
              </div>
              <div className='link'>
                <a href='/#'>
                  <i class='fa-solid fa-share'>Share</i>
                </a>
              </div>
            </div>
          </div>
          <div className='card-footer'>
            <ul>
              <li className='active'>GEN Z FOUNDER</li>
              <li>MOBILITY</li>
              <li>E-COMMERCE</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
