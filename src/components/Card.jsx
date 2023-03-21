
export default function Card({name, species, gender, image, onClose, id}) {
   return (
      <div>  
          <button onClick = {()=> onClose(id)}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{id}</h2>
         <img src={image} alt="" /> 
      </div>
   );
}
