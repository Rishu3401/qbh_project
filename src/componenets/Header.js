import React, { useState } from 'react';
import '../App.css';
import Ghar from './image/Ghar.png';

const Header = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleClick = (index) => {
    setSelectedBox(index);
  };

  return (
    <div className="container">
      <div className="box11">
        <img src={Ghar} alt="rk" className="photo" />
      </div>
      <div className="box22">
        <div className="row1">
          <div
            style={{ height: 'row1', width: '3.97cm' }}
            className="photo-container"
          >
            <img
              src={require('./image/qbhlogo.png')}
              alt="Your Phot"
              className="photo"
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        </div>
        <div className="row2">
          <div
            className={` row21 ${selectedBox === 0 ? 'selected' : ''}`}
            onClick={() => handleClick(0)}
          >
            INVENTORY
          </div>
          <div
            className={` row21 ${selectedBox === 1 ? 'selected' : ''}`}
            onClick={() => handleClick(1)}
          >
            PROCUREMENT
          </div>
          <div
            className={` row21 ${selectedBox === 2 ? 'selected' : ''}`}
            onClick={() => handleClick(2)}
          >
            CRM
          </div>
          <div
            className={` row21 ${selectedBox === 3 ? 'selected' : ''}`}
            onClick={() => handleClick(3)}
          >
            HRM
          </div>
          <div
            className={` row21 ${selectedBox === 4 ? 'selected' : ''}`}
            onClick={() => handleClick(4)}
          >
            FINANCE
          </div>
          <div
            className={` row21 ${selectedBox === 5 ? 'selected' : ''}`}
            onClick={() => handleClick(5)}
          >
            WORKSHOP MGMT.
          </div>
          <div
            className={` row21 ${selectedBox === 6 ? 'selected' : ''}`}
            onClick={() => handleClick(6)}
          >
            PROJECT CTRL.
          </div>
          <div
            className={` row21 ${selectedBox === 7 ? 'selected' : ''}`}
            onClick={() => handleClick(7)}
          >
            PRODUCTION
          </div>
          <div
            className={` row21 ${selectedBox === 8 ? 'selected' : ''}`}
            onClick={() => handleClick(8)}
          >
            ADMINISTRATOR
          </div>
          <div
            className={` row21 ${selectedBox === 9 ? 'selected' : ''}`}
            onClick={() => handleClick(9)}
          >
            SUPPORT
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;


