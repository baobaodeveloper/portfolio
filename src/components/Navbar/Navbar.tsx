import React, { useState } from 'react';
import './navbar.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const menus = ['home', 'about', 'work', 'skills', 'contact'];
const Navbar = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div className='app_navbar'>
        <a className='app__logo' href='#home'>
          HuynhBao
        </a>

        <ul>
          {menus.map((item) => (
            <li key={item}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
        <div></div>
        <div className='navbar_icon' onClick={() => setModal(true)}>
          <GiHamburgerMenu />
        </div>
      </div>
      {modal && (
        <motion.div
          className='navbar_modal'
          whileInView={{
            x: [300, 0],
            transition: { duration: 0.5 },
          }}
        >
          <div onClick={() => setModal(false)}>
            <FaTimes />
          </div>
          <ul className='navbar_list'>
            {menus.map((item) => (
              <li onClick={() => setModal(false)} key={item}>
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
