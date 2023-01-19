
import './App.css';
import {WebApp} from '@grammyjs/web-app';
import { useEffect } from 'react';
import { hooks } from './hooks/hooks';
import Header from './components/button/header/header';
import './components/button/header/header.css';


function App() {
  const {tg, onToggleButton, onClose} = hooks();
  useEffect(()=>{tg.ready();},[])
 
  return (
    <div className="App">
      <Header/>
      voila
      <button onClick={onToggleButton}>toggle</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
