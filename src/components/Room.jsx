import React, { useState } from 'react';
import './Room.css';

function Room({ room }) {

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [showProductForm, setShowProductForm] = useState(false);
  const [onOff, setOnOff] = useState(false);

  const handleShowProductForm = () => {
    setShowProductForm(true);
  };

  const addProduct = () => {
    if (!selectedProduct) {
      alert('ERROR');
      return;
    }

    if (selectedProduct === 'מערכת סטריאו' && products.includes('מערכת סטריאו')) {
      alert('ERROR');
      return;
    }

    if (selectedProduct === 'דוד' && room.type !== 'bathroom') {
      alert('ERROR');
      return;
    }

    if (products.length >= 5) {
      alert('ERROR');
      return;
    }

    setProducts([...products, selectedProduct]);
    setSelectedProduct('');
    setShowProductForm(false);
  };

  if (!room) {
    return <div>Room not found</div>;
  }

  const turnOnOff = () => {
    if(!onOff){
        setOnOff(true)
    }if (onOff){
        setOnOff(false)
    }
    console.log(onOff)

  }

  

  return (
    <div className="room-container">
      <h1>Smart house</h1>
      <h2>Room Name: {room.name}</h2>
      <h3>Room Type: {room.type}</h3>

      {!showProductForm && (
        <button onClick={handleShowProductForm}>הוסף מוצר</button>
      )}

      {showProductForm && (
        <div>
          <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
            <option value="">בחר מוצר</option>
            <option value=" מזגן">מזגן</option>
            <option value="דוד">דוד</option>
            <option value="מערכת סטריאו">מערכת סטריאו</option>
            <option value="מנורה">מנורה</option>
          </select>
          <button onClick={addProduct}>הוסף</button>
        </div>
      )}
  
      <ul>
        {products.map((product) => (
          <li>
            <button className={onOff} onClick={turnOnOff}>{product}</button>
          </li>  
        ))}
      </ul>
    </div>
  );
}

export default Room;