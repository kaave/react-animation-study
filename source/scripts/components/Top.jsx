// @flow

import React from 'react';

import './Top.scss';
import Grid from './Grid.jsx';

type props = {
  handleButtonClick: () => void,
  handleGridClick: (index: number) => void,
  isGridOpened: boolean,
  selectedGridIndex: number | null
};

const grids = [
  'Football genius',
  '何を怖がっているんだ',
  '5人目まで連動',
  'エスパルス曲線'
];

export default function Top ({ handleButtonClick, handleGridClick, isGridOpened, selectedGridIndex }: props) {
  return (
    <div className="top">
      {!isGridOpened && (
        <button className="top__button" onClick={handleButtonClick}>
          <span className="fa fa-diamond" /> 遷移(予定) <span className="fa fa-diamond" />
        </button>
      )}
      <Grid isOpened={isGridOpened} grids={grids} handleClick={handleGridClick} selectedIndex={selectedGridIndex} />
    </div>
  );
}
