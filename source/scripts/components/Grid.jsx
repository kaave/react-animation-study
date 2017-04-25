// @flow

import React from 'react';

import './Grid.scss';

type props = {
  grids: string[]
};

export default function Grid ({ grids }: props) {
  return (
    <ul className="grid">
      {grids.map((grid, i) => <li key={grid} className={`grid__list grid__list--${i + 1}`}>{grid}</li>)}
    </ul>
  );
}
