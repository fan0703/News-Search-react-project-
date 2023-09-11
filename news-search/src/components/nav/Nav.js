import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.css"

export default function Nav(props) {
  return (
    <div className='Nav'>
        <Link to="/">
            <div className='title'>FanNews</div>
        </Link> 
        <Link to="/about">
            <div className='headlines'>About</div>
        </Link>
        <Link to="/News">
            <div className='headlines'>Top-Headlines</div>
        </Link>
      
        
    </div>
  )
}
