// @flow

import React from 'react';

import './Main.scss';
import Top from './Top.jsx';

type props = {
  handleButtonClick: () => void,
  handleGridClick: () => void,
  isGridOpened: boolean
};

export default function Main (mainProps: props) {
  return (
    <main id="main" className="main" role="main">
      <Top {...mainProps} />
    </main>
  );
}
