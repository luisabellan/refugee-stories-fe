
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navigation.css"

const Navigation = (props) => {

    return (
    
        <div className="navigation">

            <h1>Refugee Stories</h1>
            <NavLink className="home-link" to='/' activeClassName="selected">HOME</NavLink>
            <NavLink className="stories-link" to='/Stories' activeClassName="selected">STORIES</NavLink>
            <NavLink className="sign-in-link" to='/Signin' activeClassName="selected">SIGN IN</NavLink>

        </div>
    
    )




}


export default Navigation