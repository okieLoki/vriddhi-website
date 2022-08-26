import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='container'>
                <div className='left'>
                    <h2>Contact<span className='primary'> Us</span></h2>
                </div>
                
                <div className='contact-text'>
                    <p>● Have any issues? Don't worry you can just fill up this short form.
                    </p>
                    <p>● You can report any bugs that we have in our app.</p>
                    <p>● You can also give us suggestions for future upgrades in our app.</p>
                    <p>● Or if you face any difficulty while using our app you can still contact us.</p>
                    <br></br>
                    <a href="https://forms.gle/pTPqPJegXpwx6gg2A">
                    <button className='btn-contact'>Form Link</button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Contact