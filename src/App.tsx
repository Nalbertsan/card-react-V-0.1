import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Cardform from './components/Cardform';
import FlippableCard from './components/FlippableCard';

function App() {
  return (
    
    <div className="App">
      <div className="payment-title">
        <h1>Informações de Pagamento</h1>
        </div>
          <div className="Cardplusform">
          <FlippableCard/>
        <Cardform/>
        </div>

    </div>
  );
}

export default App;
