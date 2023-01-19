
import './App.css';
import {WebApp} from '@grammyjs/web-app';
import { useEffect } from 'react';
import { hooks } from './hooks/hooks';


function App() {
  const {tg, onToggleButton, onClose} = hooks();
  useEffect(()=>{tg.ready();},[])
 
  return (
    <div className="App">
      voila
      <button onClick={onToggleButton}>toggle</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
