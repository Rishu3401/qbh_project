import React, { useState } from 'react';

const Stock = () => {
  const [selectedStock, setSelectedStock] = useState(null);

  const handleClick = (index) => {
    setSelectedStock(index);
  };

  return (
    <div className='stock'>
      <div className={`stockbox ${selectedStock === 0 ? 'selected' : ''}`} onClick={() => handleClick(0)}>
        <img src={require('./image/dashboard.png')} alt="Dashboard Icon" height="50" width="50" />
        <span>Dashboard</span>
      </div>
      <div className={`stockbox ${selectedStock === 1 ? 'selected' : ''}`} onClick={() => handleClick(1)}>
        <img src={require('./image/stock.png')} alt="Stock Management Icon" height="50" width="50" />
        <span>Stock Management</span>
      </div>
      <div className={`stockbox ${selectedStock === 2 ? 'selected' : ''}`} onClick={() => handleClick(2)}>
        <img src={require('./image/transfer.png')} alt="Stock Component Icon" height="50" width="50" />
        <span>Stock Component</span>
      </div>
      <div className={`stockbox ${selectedStock === 3 ? 'selected' : ''}`} onClick={() => handleClick(3)}>
        <img src={require('./image/update.png')} alt="Stock Update Icon" height="50" width="50" />
        <span>Stock Update</span>
      </div>
      <div className={`stockbox ${selectedStock === 4 ? 'selected' : ''}`} onClick={() => handleClick(4)}>
        <img src={require('./image/upload.png')} alt="Stock Upload Icon" height="50" width="50" />
        <span>Stock Upload</span>
      </div>
      <div className={`stockbox ${selectedStock === 5 ? 'selected' : ''}`} onClick={() => handleClick(5)}>
        <img src={require('./image/report.png')} alt="Stock Report Icon" height="50" width="50" />
        <span>Stock Report</span>
      </div>
      <div className={`stockbox ${selectedStock === 6 ? 'selected' : ''}`} onClick={() => handleClick(6)}>
        <img src={require('./image/product.png')} alt="Product Level Icon" height="50" width="50" />
        <span>Product Level</span>
      </div>
      <div className={`stockbox ${selectedStock === 7 ? 'selected' : ''}`} onClick={() => handleClick(7)}>
        <img src={require('./image/setup.png')} alt="Inventory Setup Icon" height="50" width="50" />
        <span>Inventory Setup</span>
      </div>
    </div>
  );
};

export default Stock;

