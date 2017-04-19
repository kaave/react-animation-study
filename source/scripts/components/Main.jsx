// @flow

import React from 'react';

import './Main.scss';
import Top from './Top.jsx';

type props = {
  handleClick: () => void;
};

export default function Main ({ handleClick }: props) {
  return (
    <main id="main" className="main" role="main">
      <Top handleClick={handleClick} />
    </main>
  );
}
