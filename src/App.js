
import './App.css';
import {WebApp} from '@grammyjs/web-app';
import { useEffect } from 'react';
import { hooks } from './hooks/hooks';
import Header from './components/button/header/header';
import {Route, Routes} from 'react-router-dom';
import ProductList from './components/button/productList/productList';
import Form from './components/button/form/form';



function App() {
  const {tg, onToggleButton, onClose} = hooks();
  useEffect(()=>{tg.ready();},[])
 
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<ProductList/>}/>
        <Route path={'form'} element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
