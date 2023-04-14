import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'



export default function Detail() {
    const {id} = useParams()
     
    const [character,setCharacter] = useState({});
    
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
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
        <div>
      <h1 className="details"> Detalles del Personaje</h1>
      {character.name && <p className= "dtName">Nombre: {character.name}</p>}
      {character.status && <p className="dtStatus">Status: {character.status}</p>}
      {character.species && <p className="dtSpecie">Specie: {character.species}</p>}
      {character.gender && <p className="dtGender">Gender: {character.gender}</p>}
      {character.origin && <p className="dtOrigin">Origin: {character.origin.name}</p>}
      </div>
      {character.image && <img className="cardPersonaje"src={character.image} alt=""/>}
    </div>
  )
}
