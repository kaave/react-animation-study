// @flow

import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import './Grid.scss';

type props = {
  grids: string[],
  handleClick: () => void,
  isOpened: boolean
};

export default function Grid ({ grids, handleClick, isOpened }: props) {
  return (
    <CSSTransitionGroup
      //style={{ display: isOpened ? 'block' : 'none' }}
      component="ul"
      transitionName="grid-fade"
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={490}
    >
      {isOpened && grids.map((grid, i) => <li key={grid} className={`grid__list grid__list--${i + 1}`} onClick={handleClick} />)}
    </CSSTransitionGroup>
  );
}
