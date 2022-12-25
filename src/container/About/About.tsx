import React, { useEffect, useState } from 'react';
import './about.scss';
import { images } from '../../constant';
import { AppWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';

interface Idata {
  title: string;
  description: string;
  imgUrl: string;
}

const About = () => {
  const [abouts, setAbout] = useState<Idata[]>([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbout(data));
  }, []);
  return (
    <div className='about'>
      <motion.h2
        whileInView={{
          y: [-50, 0],
          opacity: [0, 1],
          transition: { duration: 0.5 },
        }}
      >
        I Khow That <span>Good Frontend</span> Means{' '}
        <span> Good Business</span>
      </motion.h2>

      <div className='about_list'>
        {abouts.map((item) => (
          <motion.div
            key={item.title}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, type: 'tween' }}
          >
            <div>
              <img src={urlFor(item.imgUrl)} alt={item.title} />
            </div>

            <div>
              <h3>{item.title} </h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(About, 'about');
