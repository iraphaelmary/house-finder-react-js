import React, {useState} from 'react';
import './Navbar.scss';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa';
import {BsFillHouseFill} from 'react-icons/bs';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    return(
        <>
            <nav className='navbar'>
                <div className='nav container'>
                    <h1><span><BsFillHouseFill className='icon'/> Rental</span> Directory</h1>
                    <button className='btn'>Sign Up</button>
                    <ul className={click ? 'menu active' : 'menu'}>
                        <li><a href='index.html' target='_self'>Home</a></li>
                        <li><a href='index.html' target='_self'>About</a></li>
                        <li><a href='index.html' target='_self'>Listings</a></li>
                        <li><a href='index.html' target='_self'>Contact Us</a></li>
                    </ul>
                    <div className='hamburger' onClick={handleClick}>
                        {click ? <FaRegTimesCircle /> : <HiOutlineMenuAlt4 />}
                    </div>
                </div>
            </nav>            
        </>
    )
};

export default Navbar;