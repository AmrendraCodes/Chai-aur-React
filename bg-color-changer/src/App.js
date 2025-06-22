import React, { useState } from 'react';
import './App.css';

const colors = ['red', 'green', 'blue', 'yellow', 'magenta', 'orange', 'cyan'];

function App() {
  const [bgColor, setBgColor] = useState('magenta');

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <h1>Background Color Changer</h1>
      <div className="button-group">
        {colors.map((color) => (
          <button
            key={color}
            style={{ backgroundColor: color, color: color === 'yellow' || color === 'magenta' ? 'black' : 'white' }}
            onClick={() => setBgColor(color)}
          >
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;