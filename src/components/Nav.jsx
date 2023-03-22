import React from 'react'
import SearchBar from "./SearchBar"
import { NavLink } from 'react-router-dom'



export default function Nav(props){
    return (
        <div>
            <NavLink to = "/about">
            <button>About</button>
            </NavLink>
            <NavLink to = "/home">
            <button>Home</button>
            </NavLink>
            <SearchBar onSearch ={props.onSearch}/>
        </div>
    )
}