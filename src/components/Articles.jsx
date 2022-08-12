import React from 'react'
import './Artciles.css'

import Screen from '../assets/screen.png'

const Articles = () => {
    return (
        <div className='articles'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Screen} alt='' className='image-screen'/>
                </div>

                {/* right */}
                <div className='right'>
                    <h2>We even got articles and studies for you 🎉</h2>
                    <p>Read what experts say about child development and get regular updates on research papers and studies publised. Also read blogs by subject experts so that you don't miss out anything for your child. </p>
                </div>

            </div>
        </div>
    )
}

export default Articles