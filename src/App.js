
import './App.css';
import {WebApp} from '@grammyjs/web-app';
import { useEffect } from 'react';
const tg = window.Telegram.WebApp;


function App() {
  useEffect(()=>{tg.ready();},[])
 
  return (
    <div className="App">
      voila
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
