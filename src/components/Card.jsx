
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/actions";
import { useState, useEffect} from "react";



function Card({id, name, species, gender, image, onClose, addFav, removeFav, myFavorites,}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {

      if (isFav) {
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav({id, name, species, gender, image, onClose, addFav, removeFav,});
      }
   };
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id ===id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   return (
      <div className="presentacionCard">
         {isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )}
         <button className="botonX" onClick={() => onClose(id)}>Delete</button>

         <Link to={`/detail/${id}`} >
            <h2 className="name">{name}</h2>
         </Link>
         <h2 claassName="infoSpecie">{species}</h2>
         <h2 claassName="infoGender">{gender}</h2>
         <img className="image" src={image} alt="" />
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      },
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
};


export default connect(mapStateToProps, mapDispatchToProps)(Card);