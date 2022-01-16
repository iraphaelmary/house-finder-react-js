import React from 'react';
import './Category.scss';
import Imageone from '../../assets/imageone.jpg';
import Imagethree from '../../assets/imagethree.jpg';
import Imagefour from '../../assets/imagefour.jpg';

const Category = () => {
    return(
        <>
            <div className='category' id='category'>
                <section className='center'>                   
                    <div className='flex'>
                        <h1 className='category-title'>Best Rated Properties</h1>
                        <ul>
                            <li><a href='#index' target='_self'><strong>All</strong></a></li>
                            <li><a href='#index' target='_self'>Apartments</a></li>
                            <li><a href='#index' target='_self'>Commercial</a></li>
                            <li><a href='#index' target='_self'>Office</a></li>
                            <li><a href='#index' target='_self'>Workshop</a></li>
                        </ul>
                    </div>
                    <div className='category-images'>
                        <img src={Imageone} alt='' className='img' />
                        <img src={Imagefour} alt='' className='img'/>
                        <img src={Imagethree} alt='' className='img' />
                    </div>
                    <div className='cat-btn'>
                        <a href='#index' className='btn'>View All</a>
                    </div>
                </section>
            </div>
        </>
    )
};

export default Category;