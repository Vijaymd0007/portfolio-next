import React from 'react'
const Contact = () => {
    return (
        <div >
            <h1>CONTACT</h1>
            <h6>  LET&apos;S KEEP IN TOUCH</h6>
            <p>Contact me using the below form</p>

            <form
                action="https://formspree.io/f/mleyjkgb"
                method="POST"
            >
                <label for="name">
                    Your name:
                    <input id="name" type="text" name="name" />
                </label>
                <label for="email">
                    Your email:
                    <input id="email" type="email" name="email" />
                </label>
                <label for="message">
                    Your message:</label>
                <textarea id="message" name="message"></textarea>


                <button type="submit">Send</button>
            </form>

        </div>
    )
}

export default Contact