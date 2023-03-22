import { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import About from './views/About';
import Detail from './components/Detail';





function App() {
   const [characters, setCharacters] = useState([]);
   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id) {
      setCharacters (characters.filter((personaje)=> personaje.id !== id))
      }


   
   return (
      <div className='App'>
         <Nav onSearch ={onSearch}/>
<Routes>
<Route path="/home" element = {<Cards characters={characters} onClose ={onClose} />}/>
<Route path="/detail/:id" element ={<Detail/>} /> 
<Route path="/about" element ={<About/>}/> 
</Routes>
      </div>
   );
}

export default App;
