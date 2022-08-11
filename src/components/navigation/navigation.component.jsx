import React from 'react';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <>
      <nav>
        <div className='nav-container'>
          <div className='logo'>-Dashboard</div>
          <div className='nav-link'>
            <img src='../../assets/user.png' alt='profile' />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
