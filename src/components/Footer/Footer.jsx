import React, {useEffect} from 'react';
import './Footer.scss';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
    
    useEffect(() => {
        let dayte = document.querySelector('.date');
        const newDay = new Date();
        const getYear = newDay.getFullYear();
        dayte.innerHTML = getYear;
    }, [])
    
    return (
        <>
            <footer>
                <section className='center'>
                    <div className='social-icons'>
                        <FaFacebook className='icons fa' />
                        <FaTwitter className='icons fa' />
                        <FaInstagram className='icons fa' />
                        <FaPinterest className='icons fa' />
                    </div>
                    <div className='footer-items'>
                        <div>
                            <h1>About Us</h1>
                            <ul>
                                <li><a href='#index' target='_self'>Who We Are</a></li>
                                <li><a href='#index' target='_self'>Services</a></li>
                                <li><a href='#index' target='_self'>Gallery</a></li>
                                <li><a href='#index' target='_self'>Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h1>Company</h1>
                            <ul>
                                <li><a href='#index' target='_self'>Board</a></li>
                                <li><a href='#index' target='_self'>Charter</a></li>
                                <li><a href='#index' target='_self'>Mandate</a></li>
                                <li><a href='#index' target='_self'>Partners</a></li>
                            </ul>
                        </div>
                        <div>
                            <h1>Locations</h1>
                            <ul>
                                <li><a href='#index' target='_self'>America</a></li>
                                <li><a href='#index' target='_self'>Europe</a></li>
                                <li><a href='#index' target='_self'>Africa</a></li>
                                <li><a href='#index' target='_self'>Asia</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='social-icons copy'>
                        <p className='copy'>&copy; House Finder <span className='date'></span></p>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer
