import React from 'react';

const Pagenotfound = () => {
  return (
    <>
      <div className='container'>
        <img
          style={{ width: '100%' }}
          className='image-fluid'
          src='pagenotfound.jpg'
          alt='Page not found'
        />
      </div>
      <h1 style={{ textAlign: 'center', marginTop: '15px', color: 'purple' }}>
        Page not Found
      </h1>
    </>
  );
};

export default Pagenotfound;
