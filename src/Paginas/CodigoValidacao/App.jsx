import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [code, setCode] = useState(new Array(6).fill(''));

  const handleChange = (e, index) => {
    if (isNaN(e.target.value)) return false;
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);

    // Focus next input
    if (e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  const handleResendCode = () => {
    // Logic to resend code
    console.log('Resend code');
  };

  return (
    <div className="container">
      <div className="code-container">
        <h2>Coloque o código abaixo</h2>
        <p>O código foi enviado por e-mail. Insira-o nos campos na ordem certa</p>
        <div className="code-inputs">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>
        <p>Se necessário, peça um novo envio do código em 30 segundos</p>
        <button onClick={handleResendCode}>Reenviar código</button>
      </div>
    </div>
  );
};

export default App;
