import { Link } from "react-router-dom";

export default function Card({name, species, gender, image, onClose, id}) {
   return (
      <div className="presentacionCard">  
          <button className= "botonX" onClick = {()=> onClose(id)}>Delete</button>
         
          <Link to={`/detail/${id}`} >
         <h2 className="name">{name}</h2>
         </Link>
         <h2 claassName= "infoSpecie">{species}</h2>
         <h2 claassName= "infoGender">{gender}</h2>
         <h2 claassName= "infoId">{id}</h2>
         <img className= "image" src={image} alt="" /> 
      </div>
   );
}
