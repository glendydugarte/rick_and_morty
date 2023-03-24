import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './views/About';
import Detail from './components/Detail';
import Form from './components/Form';
import { useEffect } from 'react';


function App() {
   
   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();
  
   
   useEffect(() => {
      (!access && navigate('/'));
   },[access]);

   const EMAIL = 'glendydd@gmail.com';
   const PASSWORD = '10101010';
  
   function Login(userData){
if (userData.password === PASSWORD && userData.username === EMAIL) {
      
      setAccess(true);
      navigate("/home");
   }
   else {
      alert("Credenciales Incorrectas")
   }
}

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
      setCharacters(characters.filter((personaje) => personaje.id !== id))
   }

   


   return (
      <div className='App'>
         {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : ""}


         <Routes>
            <Route path="/" element={<Form Login={Login} />} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/about" element={<About />} />
         </Routes>
      </div>
   )


}


export default App;
