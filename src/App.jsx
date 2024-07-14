import { createContext, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SmartHouse from './components/SmartHouse';
import AddRoom from './components/addRoom';
import Room from './components/Room';

export const homeContext = createContext();

function App() {
  const [rooms, setRooms] = useState([]);

  const addRoom = (room) => {
    setRooms([...rooms, room]);
  };

  return (
    <homeContext.Provider value={{ rooms, addRoom }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<SmartHouse />} />
          <Route path="/addroom" element={<AddRoom />} />
          {rooms.map((room, index) => (
            <Route
              key={index}
              path={`/room${room.name}`}
              element={<Room room={room} />}
            />
          ))}
        </Routes>
      </div>
    </homeContext.Provider>
  );
}

export default App;
