import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-3 h-screen">
      <div className="loader"></div>
      <span>Loading</span>
    </div>
  );
};

export default Loader;
