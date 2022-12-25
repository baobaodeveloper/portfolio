import React from 'react';

const menus = ['home', 'about', 'work', 'skills', 'contact'];
const NavigationDots = ({ idActive }: { idActive: string }) => {
  return (
    <ul className='app_dots'>
      {menus.map((item) => (
        <li key={item}>
          <a
            style={
              idActive === item
                ? { backgroundColor: '#313bac' }
                : { backgroundColor: '#6b7688' }
            }
            href={`#${item}`}
          ></a>
        </li>
      ))}
    </ul>
  );
};

export default NavigationDots;
