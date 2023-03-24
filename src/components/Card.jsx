import { Link } from "react-router-dom";

export default function Card({name, species, gender, image, onClose, id}) {
   return (
      <div >  
          <button className= "botonX" onClick = {()=> onClose(id)}>X</button>
         
          <Link to={`/detail/${id}`} >
         <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{id}</h2>
         <img src={image} alt="" /> 
      </div>
   );
}
