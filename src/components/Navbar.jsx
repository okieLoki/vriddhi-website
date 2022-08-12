import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='header'>

            <div className='container'>

                <h2>We<span className='primary'>Care</span></h2>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to='home' smooth='true' duration={500}>Home</Link>
                    </li>
                    <li>
                    <Link to='about' smooth='true' duration={500}>About</Link>
                    </li>
                    <li>
                    <Link to='articles' smooth='true' duration={500}>Articles</Link>
                    </li>
                    <li>
                    <Link to='contact' smooth='true' duration={500}>Contact</Link>
                    </li>
                </ul>

                <div className='btn-group'>
                    <button className='btn'>Download</button>
                </div>

                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#333' }} />) : (<FaBars size={20} style={{ color: '#333' }} />)}

                </div>
            </div>


        </div>
    )
}

export default Navbar