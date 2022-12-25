import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component: any, idActive: string) =>
  function HOC() {
    return (
      <div id={idActive} className='wrap_container'>
        <SocialMedia />
        <Component />
        <NavigationDots idActive={idActive} />
      </div>
    );
  };

export default AppWrap;
