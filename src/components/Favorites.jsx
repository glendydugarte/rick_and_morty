import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import { orderCards, filterCards, removeFav, reset } from '../redux/actions';
import { useState } from 'react';

const Favorites = ({onClose}) => {
    const favorites = useSelector((state)=> state.myFavorites);
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    
  function closeFav(id) {
      onClose(id)
      dispatch(removeFav(id));
    }
   const handleOrder = (e)=>{
    e.preventDefault()
    dispatch(orderCards(e.target.value))
    setAux(true);
    }

    const handleFilter = (e)=>{
      e.preventDefault()
      dispatch(filterCards(e.target.value))
      }
    
    function resetBtton() {
      dispatch(reset())
    }


  return (
    <div>
      <select onChange={handleOrder}>
      <option value="Ascendente">Ascendente</option>
      <option value="Descendente">Descendente</option>
      </select>
      <select onChange={handleFilter}>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Genderless">Genderless</option>
      <option value="unknown">unknown</option>
      </select>
      <button onClick={resetBtton}> Restart </button>
        { favorites.map(({id, name, species, gender, image})=> { 
            return ( 
                 <Card    
                    key = {id}
                    id ={id}
                    name ={name}
                    species={species}
                    gender={gender}
                    image={image}
                    onClose = {()=>{closeFav(id)}}
                    
                  />
                  ); 
                    }) }
    </div>
  );
}

export default Favorites;