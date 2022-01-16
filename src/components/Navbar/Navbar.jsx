import React from 'react';
import { useState } from 'react';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa';
import {BsFillHouseFill} from 'react-icons/bs';
import './Navbar.scss';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const toggle = () => setClick(!click);
    return(
        <>
            <nav>
                <section className='center'>
                    <h1><BsFillHouseFill className='icons'/><span>House</span>Finder</h1>
                    <a href='#Header' className='btn' target='_blank'>Sign Up</a>
                    <ul className={click ? 'links active' : 'links'}>
                        <li className='link'><a href='index.html' target='_self'>Home</a></li>
                        <li className='link'><a href='#listing' target='self'>Listings</a></li>
                        <li className='link'><a href='#category' target='self'>Category</a></li>
                        <li className='link'><a href='##' target='_blank'>Support</a></li>
                        <a href='#listing' className='btn nav-sign-up' target='_self' style={{margin: '1rem 0 0 0', fontSize: '1.8rem'}}>Sign Up</a>
                    </ul>
                    <div className='hamburger' onClick={toggle}>
                        {click ? <FaRegTimesCircle /> : <HiOutlineMenuAlt4 className='icon' />  }
                    </div>
                </section>
            </nav>
        </>
    )
};

export default Navbar;
