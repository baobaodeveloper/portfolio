import React, { useState, ChangeEvent } from 'react';
import { AppWrap } from '../../wrapper';
import './footer.scss';
import { images } from '../../constant';
import { client } from '../../client';
import { motion } from 'framer-motion';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='footer'>
      <motion.h2
        whileInView={{
          y: [-50, 0],
          opacity: [0, 1],
          transition: { duration: 0.5 },
        }}
      >
        Chat With Me
      </motion.h2>

      <div className='footer_list'>
        <div>
          <img src={images.email} alt='' />
          <span>baohuynh141@gmail.com</span>
        </div>
        <div>
          <img src={images.mobile} alt='' />
          <span>0988262774</span>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className='footer_form'>
          <input
            name='name'
            value={name}
            onChange={handleChangeInput}
            type='text'
            placeholder='Your Name'
          />
          <input
            name='email'
            value={email}
            onChange={handleChangeInput}
            type='text'
            placeholder='Your Email'
          />
          <textarea
            rows={6}
            placeholder='Your Message'
            name='message'
            value={message}
            onChange={handleChangeInput}
          />

          <button onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </div>
  );
};

export default AppWrap(Footer, 'contact');
