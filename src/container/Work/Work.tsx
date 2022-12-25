import React, { useEffect, useState } from 'react';
import './work.scss';
import { AppWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';
import { IoEyeSharp } from 'react-icons/io5';
import { AiFillGithub } from 'react-icons/ai';

interface Idata {
  title: string;
  description: string;
  projectLink: string;
  codeLink: string;
  imgUrl: string;
  tags: string[];
  icons: {
    _key: string;
    _type: string;
    asset: { _ref: string; _type: string };
  }[];
}

const menus = ['UI/UX', 'FullStack', 'Reactjs', 'All'];
const Work = () => {
  const [works, setWorks] = useState<Idata[]>([]);
  const [menuActive, setMenuActive] = useState('All');
  const [filterWorks, setFilterWorks] = useState<Idata[]>([]);
  const [whileInView, setWhileInView] = useState({
    opacity: 1,
    y: 0,
  });

  const handleChangeMenu = (item: string) => {
    setMenuActive(item);
    setWhileInView({ opacity: 0, y: 100 });

    setTimeout(() => {
      setWhileInView({ opacity: 1, y: 0 });
      if (item === 'All') {
        setFilterWorks(works);
      } else {
        setFilterWorks(() =>
          works.filter((x) => x.tags.includes(item))
        );
      }
    }, 500);
  };

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWorks(data);
    });
  }, []);
  return (
    <div className='work'>
      <motion.h2
        whileInView={{
          y: [-50, 0],
          opacity: [0, 1],
          transition: { duration: 0.5 },
        }}
      >
        My <span>Project</span>
      </motion.h2>

      <div className='work_tab'>
        {menus.map((item) => (
          <div
            style={
              menuActive === item
                ? { backgroundColor: '#313bac', color: '#fff' }
                : {}
            }
            onClick={() => handleChangeMenu(item)}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        className='work_list'
        animate={whileInView}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        {filterWorks.map((item, i) => (
          <div key={i}>
            <div className='img_wrap'>
              <img src={urlFor(item.imgUrl)} alt={item.title} />
              <div className='work_tag'>{item.tags[1]}</div>
              <div className='work_icon'>
                <a
                  href={item.projectLink}
                  target='_blank'
                  rel='noreferrer'
                >
                  <IoEyeSharp />
                </a>
                <a
                  href={item.codeLink}
                  target='_blank'
                  rel='noreferrer'
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>

            <div>
              <h3>{item.title} </h3>
              <p>{item.description}</p>
            </div>

            <div className='work_library'>
              {item.icons &&
                item.icons.map((icon, i) => (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    key={i}
                  >
                    <img src={urlFor(icon.asset._ref)} alt='image' />
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Work, 'work');
