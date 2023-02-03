import React, { useState } from 'react';
import './App.css'
function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(10);

  const generatePassword = () => {
    const possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#";
    let generatedPassword = "";

    for (let i = 0; i < length; i++) {
      generatedPassword += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="password-generator">
      <h1>Password Generator</h1>
      <div className="slider-container">
        <p className="length-label">Password Length: {length}</p>
        <input 
          type="range" 
          min="8" 
          max="20" 
          value={length} 
          onChange={(e) => setLength(e.target.value)} 
          className="length-slider" 
        />
      </div>
      <div className="password-container">
        <p className="password">{password}</p>
        <button className="generate-button" onClick={generatePassword}>Generate Password</button>
      </div>
    </div>
  );
}

export default PasswordGenerator;
