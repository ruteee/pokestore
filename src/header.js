import React from 'react'
import './header.css'
import logo from './images/logos/logo.png'

function Header(){
    return(
        <>
            <div className="pokeHeader">
                <img src={logo} alt= 'A logo for the pokestore'></img>
            </div>
            <div className="pokeClose"/> 
            <div className="pokeCloseInside"/>
        </>)
}

export default Header;