import React from 'react'
import './Contact.css'
import Reveal from '../reveal/Reveal';
import { CiMail } from "react-icons/ci";


const Contact = () => {
    return (
        <div id="contactSection" className='contactGlobalContainer'>
            <div className='contactContainer'>
                <div className='contactTitle'>
                    <h3>Contact.</h3>
                    <div className='line'></div>
                </div>
                <Reveal width="100%">

                    <p className='ContactDescription'>
                        Feel free to shoot me an <span style={{ color: "#A6A001" }}>email</span> if you’d like to connect or have any questions!
                        I’m always happy to hear from new people.
                        You can also reach out to me on <a href='https://www.linkedin.com/in/jozef-pohorelec-vi%C3%B1a-1293ab257/' target="_blank" rel="noopener noreferrer" style={{ color: "#A6A001" }}>LinkedIn</a>, where I’m active and regularly share updates.
                        Looking forward to connecting with you!
                    </p>
                </Reveal>
                <Reveal width="100%">
                    <div className='emailContainer'>
                        <CiMail size={40} color="white" />
                        <h4 className='emailDirection'>jozefpv99@gmail.com</h4>
                    </div>
                </Reveal>
            </div>
        </div>
    )
}

export default Contact
