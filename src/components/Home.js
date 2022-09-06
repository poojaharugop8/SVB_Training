import React, { useState } from 'react';

const Home = () => {
  const [num, setNum] = useState(0);
  const incrementButton = () => {
    setNum(num + 1);
  };
  return (
    <>
      <h1>Home</h1>
      <div className='container'>
        <button className='btn btn-dark' onClick={incrementButton}>
          Increment
        </button>
        <h1>{num}</h1>
      </div>
    </>
  );
};

export default Home;
