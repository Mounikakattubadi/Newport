import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_lgce68j',        // ✅ Your Service ID
      'template_204xfaj',       // ✅ Your Template ID
      formRef.current,
      'hm0fvLW0FDsMlkx8I'       // ✅ Your Public Key
    )
    .then((result) => {
        alert('Message sent successfully!');
        e.target.reset();
    }, (error) => {
        alert('Failed to send message. Please try again.');
        console.error(error.text);
    });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="text-center">
          <span className="badge">CONTACT ME</span>
          <h2 className="contact-heading">Send Me a Message</h2>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <div className="form-row">
            <input type="text" name="from_name" placeholder="Name" required />
            <input type="email" name="from_email" placeholder="Email" required />
          </div>
          <div className="form-row">
            <input type="tel" name="phone" placeholder="Phone#" />
            <input type="text" name="budget" placeholder="Budget" />
          </div>
          <div className="form-row full-width">
            <textarea name="message" placeholder="Message" rows="5" required></textarea>
          </div>
          <button className="send-btn" type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
