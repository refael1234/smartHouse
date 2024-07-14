import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddRoom.css';
import { homeContext } from '../App';

function AddRoom() {
  const [roomType, setRoomType] = useState('');
  const [roomName, setRoomName] = useState('');
  const [roomColor, setRoomColor] = useState('');
  const navigate = useNavigate();
  const { addRoom } = useContext(homeContext);

  const handleRoomTypeChange = (e) => setRoomType(e.target.value);
  const handleRoomNameChange = (e) => setRoomName(e.target.value);
  const handleRoomColorChange = (e) => setRoomColor(e.target.value);

  const handleSubmit = () => {
    if (!roomType || roomName.length === 0) {
      alert('ERROR');
      return;
    }
    addRoom({ type: roomType, name: roomName, color: roomColor });
    navigate('/');
  };

  return (
    <div className="add-room-container">
      <h1>Smart house</h1>
      <div>
        <label>
          בחר חדר חדש
          <select value={roomType} onChange={handleRoomTypeChange}>
            <option value="">Choose a room</option>
            <option value="bedroom">חדר שינה</option>
            <option value="bathroom">חדר אמבטיה</option>
            <option value="kitchen">מטבח</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          שם החדר
          <input
            type="text"
            value={roomName}
            onChange={handleRoomNameChange}
            maxLength="9"
          />
        </label>
      </div>
      <div>
        <label>
          צבע החדר
          <input
            type="text"
            value={roomColor}
            onChange={handleRoomColorChange}
          />
        </label>
      </div>
      <button onClick={handleSubmit}>צור</button>
    </div>
  );
}

export default AddRoom;
