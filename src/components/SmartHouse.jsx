import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { homeContext } from '../App';



function Home() {
  const { rooms } = useContext(homeContext);
  const navigate = useNavigate();

  const goToAddRoom = () => {
    navigate('/addroom');
  };

  const goToRoom = (roomName) => {
    navigate(`/room${roomName}`);
  };

  return (
    <div className="home-container">
      <h1>Smart house</h1>
      <div className="rooms-container">
        {rooms.map((room) => (
          <button className="room-square" style={{ backgroundColor: room.color }} onClick={() => goToRoom(room.name)}>
            {room.name[0] + room.name[1] || ''}
          </button>
        ))}
      <button className="circle-button" onClick={goToAddRoom}>
        +
      </button>
    </div>
    </div>  
  );
}

export default Home;
