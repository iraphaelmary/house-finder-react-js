import React from 'react';
import './Listing.scss';

const Listing = () => {
    return (
            <>
                <div className='listing' id='listing'>
                    <section className='center'>
                        <div className='cent'>
                            <h1 className='listing-title'>Top Listed</h1>
                            <p className='listing-text'>Selected by City, State &amp; Zip</p>
                        </div>
                        <article className='grid'>
                            <div className='showcase'>
                                <h1>Your Web Presence</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet incidunt ex voluptates cupiditate iusto totam! Molestias error voluptates deserunt, incidunt quaerat dolorum impedit odio, quae dicta, aut adipisci eos earum.</p>
                                <a href="#index" target="_blank" class="btn">More</a>
                            </div>
                            <div className='top-box a'>
                                <p class="price">$420/m</p>
                                <a href="#index" class="btn">Rent</a>
                            </div>
                            <div className='top-box b'>
                                <p class="price">$12,110</p>
                                <a href="#index" class="btn">Buy</a>
                            </div>
                            <div className='top-box c'>
                                <p class="price">$350/m</p>
                                <a href="#index" class="btn">Rent</a>
                            </div>
                            <div className='top-box d'>
                                <p class="price">$154,000</p>
                                <a href="#index" class="btn">Buy</a>
                            </div>
                        </article>

                    </section>
                </div>
            </>
        )        
};

export default Listing;