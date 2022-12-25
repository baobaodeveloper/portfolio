import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../../client';
import { AppWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import './skill.scss';

interface Idata {
  name: string;
  bgColor: string;
  icon: { asset: { _ref: string; _type: string }; _type: string };
}

const Skills = () => {
  const [skills, setSkills] = useState<Idata[]>([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query).then((data) => setSkills(data));
  }, []);
  return (
    <div className='skill'>
      <motion.h2
        whileInView={{
          y: [-50, 0],
          opacity: [0, 1],
          transition: { duration: 0.5 },
        }}
      >
        Skills
      </motion.h2>

      <div className='skill_list'>
        {skills.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <div className='skill_img'>
              <img
                src={urlFor(item.icon.asset._ref)}
                alt={item.name}
              />
            </div>
            <span>{item.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(Skills, 'skills');
