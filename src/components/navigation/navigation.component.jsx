import React from 'react';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <>
      <nav>
        <div className='nav-container'>
          <div className='logo'>-Dashboard</div>
          <div className='nav-link'>
            <div className='img'>
              <i class='fa-solid fa-user'></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
