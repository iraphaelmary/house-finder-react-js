import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import './Header.scss';

const Header = () => {
    return(
        <>
            <header>
                <section className='center'>
                    <h1 className='header-title'>Luxury Apartments at its <span>Peak</span></h1>
                    <p className='header-text'>Discover House Finder. Find Quick Results from Multiple Sources. Get House Finder. Get Instant Quality Results. Discover Quality Results.</p>
                    <form className='search-bar'>
                        <div>
                            <input type='search' placeholder='Enter Keyword...' />
                        </div>
                        <div className='radio-btn'>
                            <input type='radio' name='on' />
                            <label htmlFor='rad'>Rent</label>
                            <input type='radio' name='on' />
                            <label htmlFor='rad'>Buy</label>
                            <button type='submit'><AiOutlineSearch className='icon' /></button>
                         </div>
                    </form>
                </section>
            </header>
        </>
    )
};

export default Header;