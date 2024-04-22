import React from 'react'
import {Link} from 'react-router-dom'
import {Button }from 'react-bootstrap'

import '../styles/navbar.css'

export default function Navbar(props){
    const {logout} = props
    return(
        <div className="navbar">
            <div className="nav-head">
                Recipe Logger
            </div>
            <div className="nav-links">
                <Link to ='/profile'>Profile</Link>
                <Link to="/public">Public</Link>
                <Button variant='danger' onClick={logout}>Logout</Button>
            </div>
        </div>
    )
}