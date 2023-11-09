import React from 'react';

const ContactUs = () => {
    return (
        <div className="contact-us">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We're here to assist you. Reach out to us.</p>
            </div>
            <div className="contact-form">
                <form>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea name="txtname" placeholder="Your Message" rows={4} ></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
