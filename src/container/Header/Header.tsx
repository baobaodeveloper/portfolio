import React, { ReactNode } from 'react';
import { images } from '../../constant';
import { motion } from 'framer-motion';
import './header.scss';
import { AppWrap } from '../../wrapper';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
const Header = () => {
  return (
    <div className='app_header'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6 }}
        className='header_message'
      >
        <div>
          <span>👋</span>
          <div>
            <span>Hello,I am</span>
            <span>Huỳnh Bảo</span>
          </div>
        </div>

        <div>
          <span>WEB DEVELOPER</span>
        </div>
      </motion.div>

      <div className='header_image'>
        <motion.img
          src={images.circle}
          alt='circle'
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
        />
        <img src={images.profile} alt='profile' />
      </div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='header_library'
      >
        <div>
          <img src={images.redux} alt='redux' />
        </div>
        <div>
          <img src={images.react} alt='reactjs' />
        </div>

        <div>
          <img src={images.antd} alt='git' />
        </div>
        <div>
          <img src={images.mu5} alt='git' />
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');
