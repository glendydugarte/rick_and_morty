
import React, { useState } from "react";



export default function SearchBar(props) {
   const [id, setId] = useState("");
   
   const handleChange = (event)=> {
      setId ([event.target.value])

   }
   return (
      <div>
         
        <input onChange = {handleChange} type='search' />
         <button onClick={()=> props.onSearch(id)}> Agregar </button> 

      </div>
      
   );
}
