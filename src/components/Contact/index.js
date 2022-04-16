import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('Please enter a valid email!');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Your ${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

    return (
        <section className="flex-row justify-center vw100">
            <div className="w75 bg-dark section-container">
                <h2 className="text-center mb-2">Contact<span className="text-primary">  DCA</span></h2>
                <p class="mb-2">
                    Do you have comments or suggestions?<a
                        href="danielchristohperallen@gmail.com"> danielchristohperallen@gmail.com</a> or use the form below!
                </p>
                <form action="https://formspree.io/f/mleopwev" method="POST">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Your name" onBlur={handleChange} />
                    <label className="form-label" htmlFor="email">Email</label>
                    <input type="text" className="form-control" id="email" name="email" placeholder="Your email" onBlur={handleChange} />
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" name="message" placeholder="Leave a message!" onBlur={handleChange} ></textarea>
                    {errorMessage && (
                        <div>
                            <p>{errorMessage}</p>
                        </div>
                    )}
                    {!errorMessage && (
                        <button className="btn" type="submit">SEND</button>
                    )}
                </form>
            </div>
        </section>
    );
}

export default Contact;