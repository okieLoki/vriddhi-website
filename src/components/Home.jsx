import React from 'react'
import './Home.css'
import Children from '../assets/children.png'

const Home = () => {
    return (
        <div className='home'>
            <div className='container'>

                {/* Left Side */}

                <div className='right'>
                    <div className='img-container'>
                        <img src={Children} alt=''/>
                    </div>
                </div>

                {/* Right Side */}
                <div className='left'>
                    <p>Worried about your child's development?</p>
                    <h1>WeCare is here to help you out 🚀</h1>
                    <p>Provides your child with daily interactive quizes for his overall motor, psychometric and physical development.</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Learn More</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home