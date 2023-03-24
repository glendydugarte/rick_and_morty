import React from 'react'
import SearchBar from "./SearchBar"
import { NavLink } from 'react-router-dom'



export default function Nav(props){
    return (
        <div className='nav'>
            <NavLink to = "/about">
            <button className = "botonAbout">About</button>
            </NavLink>
            <NavLink to = "/home">
            <button className = "botonHome">Home</button>
            </NavLink>
            <SearchBar onSearch ={props.onSearch}/>
        </div>
    )
}