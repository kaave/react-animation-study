// @flow

import React from 'react';

import './Main.scss';
import Top from './Top.jsx';

type props = {
  handleButtonClick: () => void,
  handleGridClick: (index: number) => void,
  isGridOpened: boolean,
  selectedGridIndex: number | null
};

export default function Main (mainProps: props) {
  return (
    <main id="main" className="main" role="main">
      <Top {...mainProps} />
    </main>
  );
}
