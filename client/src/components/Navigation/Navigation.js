
import React from 'react'
import {Link,NavLink } from 'react-router-dom'
import "./navigation.css"

const Navigation = (props) => {

    return (
    
        <div className="navigation">

            <h1>Refugee Stories</h1>
            <NavLink exact className="home-link" to='/'activeClassName='selected'>HOME</NavLink>
            <NavLink className="stories-link" to='/stories' activeClassName="selected">STORIES</NavLink>
            <NavLink className="sign-in-link" to='/signin' activeClassName="selected">SIGN IN</NavLink>

        </div>
    
    )




}


export default Navigation