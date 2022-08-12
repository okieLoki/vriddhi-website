import React from 'react'
import Brain from '../assets/brain.png'
import Cognitive from '../assets/cognitive.png'
import './About.css'

const About = () => {

    return (
        <div className='about'>
            <div className='container'>
                {/* Left */}
                <div className='left'>
                    <h2>What is WeCare? 🤔</h2>
                    <p>
                        WeCare is a mobile app developed for children between the age group 6-12. It provides daily interactive quizes for overall motor, psychometric and physical development with personalized reports. 
                    </p>
                    <button className='btn'>Get the App !</button>
                </div>

                {/* Right */}

                <div className='right'>
                    <div className='card'>
                        <div className='top'>
                            <h2>🧠</h2>
                        </div>
                        <div>
                            <h5>Cogntive Development</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='top'>
                            <h2>💡</h2>

                        </div>
                        <div>
                            <h5>Daily Quizzes</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='top'>
                            <h2>📈</h2>
                        </div>
                        <div>
                            <h5>Personalized Reports</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='top'>
                            <h2>💪🏻</h2>
                        </div>
                        <div>
                            <h5>Physical Development</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='top'>
                            <h2>⏰</h2>
                        </div>
                        <div>
                            <h5>Controlled Screen time</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='top'>
                            <h2>📰</h2>
                        </div>
                        <div>
                            <h5>Articles & studies</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='top'>
                            <h2>🎮</h2>
                        </div>
                        <div>
                            <h5>Interactive Games</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='top'>
                            <h2>🧏🏻</h2>
                        </div>
                        <div>
                            <h5>Support for specially abled</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='top'>
                            <h2>🗣️</h2>
                        </div>
                        <div>
                            <h5>Multilingual Support</h5>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default About