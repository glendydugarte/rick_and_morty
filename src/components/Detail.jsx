import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'



export default function Detail() {
    const {id} = useParams()
     
    const [character,setCharacter] = useState({});
    
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

  return (
    <div>
      <h1> Detalles del Personaje</h1>
      {character.name && <p>Nombre: {character.name}</p>}
      {character.status && <p>Status: {character.status}</p>}
      {character.species && <p>Specie: {character.species}</p>}
      {character.gender && <p>Gender: {character.gender}</p>}
      {character.origin && <p>Origin: {character.origin.name}</p>}
      {character.image && <img src={character.image} alt=""/>}
    </div>
  )
}
