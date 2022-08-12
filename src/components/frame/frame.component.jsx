import React from 'react';
import './frame.styles.scss';

const Frame = () => {
  return (
    <div>
      <p>
        <a
          href='https://www.youtube.com/watch?v=biGcDeB2PbQ'
          target='_blank'
          rel='noreferrer'
        >
          Unable to view video ? Click here
        </a>
      </p>
      <div className='frame-card'>
        <iframe
          video-url='currentVdo'
          player='bestPlayer'
          class='ng-isolate-scope'
          id='unique-youtube-embed-id-1'
          frameborder='0'
          allowfullscreen='1'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          title='LetzRent for Pepcorns | Making renting simple, affordable and rewarding.'
          width='640'
          height='390'
          src='https://www.youtube.com/embed/biGcDeB2PbQ?start=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fapp.pepcorns.com&amp;widgetid=1'
        ></iframe>
        <div className='frame-content'>
          <a href='/#'>
            <i class='fa-solid fa-location-dot'></i> Mumbai,Maharashtra
          </a>
          <a href='/#'>
            {' '}
            <i class='fa-brands fa-chrome'></i> https://letzrent.com
          </a>
          <div className='frame-link'>
            <a href='/#'>
              <i class='fa-brands fa-instagram'></i>
            </a>
            <a href='/#'>
              <i class='fa-brands fa-facebook'></i>
            </a>
            <a href='/#'>
              <i class='fa-brands fa-youtube'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
