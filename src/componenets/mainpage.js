import React, { useState } from 'react';
import '../App.css';

const Mainpage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className='mainpage'>
      <div
        className={`mainbox1 ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick}
      >
        QBH ERP SOLUTION
      </div>
      <div className='mainbox'>Nos. of total items</div>
      <div className='mainbox'>Nos. of Total items</div>
      <div className='mainbox'>Nos. of Discontinuous items</div>
      <div className='mainbox'>Nos. of Total Stock</div>
      <div className='mainbox'>Item Received/Items Sold</div>
    </div>
  );
};

export default Mainpage;
