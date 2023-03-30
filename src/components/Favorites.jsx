import { useSelector } from 'react-redux';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { orderCards, filterCards } from '../redux/actions';
import { useState } from 'react';

const Favorites = () => {
    const favorites = useSelector((state)=> state.myFavorites);
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

   const handleOrder = (e)=>{
    e.preventDefault()
    dispatch(orderCards(e.target.value))
    setAux(true);
    }

    const handleFilter = (e)=>{
      e.preventDefault()
      dispatch(filterCards(e.target.value))
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
        { favorites.map(({id, name, species, gender, image,})=> { 
            return ( 
                 <Card    
                    key={id}
                    id ={id}
                    name ={name}
                    species={species}
                    gender={gender}
                    image={image}
                    
                  />
                  ); 
                    }) }
    </div>
  );
};

export default Favorites;