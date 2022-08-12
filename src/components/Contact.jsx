import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='container'>
                <div className='col col-1'>
                    <h2>Contact<span className='primary'> Us</span></h2>
                    <br></br>
                    <a href='/'><FaFacebook className='icon' /></a>
                    <a href='/'><FaTwitter className='icon' /></a>
                    <a href='/'><FaLinkedin className='icon' /></a>
                    <a href='/'><FaGithub className='icon' /></a>
                </div>
                <div className='contact-form'>
                    <form>
                        <input type="text" placeholder='Name' name='name' />
                        <input type="email" placeholder='Email' name='email' />
                        <textarea name="message" rows="6" placeholder='Message'></textarea>
                                <button className='btn'>Submit</button>
                    </form>
            
                </div>
            </div>

        </div>
    )
}

export default Contact