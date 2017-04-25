// @flow

import React from 'react';

import './Top.scss';
import Grid from './Grid.jsx';

type props = {
  handleClick: () => void,
  isGridOpened: boolean
};

const grids = [
  'Football genius',
  '何を怖がっているんだ',
  '5人目まで連動',
  'エスパルス曲線'
];

export default function Top ({ handleClick, isGridOpened }: props) {
  return (
    <div className="top">
      {isGridOpened ? (
        <Grid grids={grids} />
      ) : (
        <button className="top__button" onClick={handleClick}>
          <span className="fa fa-diamond" /> 遷移(予定) <span className="fa fa-diamond" />
        </button>
      )}
    </div>
  );
}
