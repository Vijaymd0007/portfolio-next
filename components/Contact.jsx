import React from 'react'
import "@/app/css/contact.css"
const Contact = () => {

    return (
        <div className='contact-container' id="contact-container">
            <h1 className='contact-header'>Contact</h1>
            <h6 >  LET&apos;S KEEP IN TOUCH</h6>
            <p>Contact me using the below form</p>

            <form
                action="https://formspree.io/f/mleyjkgb"
                method="POST"
            >
                <div className="form-container">
                    <label >
                        Your name:
                        <input id="name" type="text" name="name" />
                    </label>
                    <label >
                        Your email:
                        <input id="email" type="email" name="email" />
                    </label>
                    <label >
                        Your message:</label>
                    <textarea id="message" name="message"></textarea>


                    <div type="submit" className='btn btn-dark contact-btn' >Send</div>
                </div>
            </form>

        </div>
    )
}

export default Contact