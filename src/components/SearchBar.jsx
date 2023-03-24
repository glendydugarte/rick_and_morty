
import React, { useState } from "react";



export default function SearchBar(props) {
   const [id, setId] = useState("");
   
   const handleChange = (event)=> {
      setId ([event.target.value])

   }
   return (
      <div className= "componenteSeach">
         
        <input className= "barra"onChange = {handleChange} type='search' />
         <button className="botonAgregar" onClick={()=> props.onSearch(id)}> Agregar </button> 

      </div>
      
   );
}
