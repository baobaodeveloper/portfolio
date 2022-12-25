import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';

const SocialMedia = () => {
  return (
    <div className='app_social'>
      <div>
        <BsTwitter />
      </div>
      <div>
        <FaFacebookF />
      </div>
      <div>
        <AiOutlineInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
