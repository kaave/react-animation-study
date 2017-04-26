// @flow

import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import './Grid.scss';

type gridListProps = {
  index: number,
  onClick: (index: number) => void,
  selected: boolean | null
};

class GridList extends React.Component {
  props: gridListProps;
  state: {};
  handleClick: (event: Event) => void;

  constructor (props: gridListProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isOpenChildren: false };
  }

  handleClick (_event: Event) {
    this.props.onClick(this.props.index);
  }

  getVisibleClassName (isSelected: boolean | null): string {
    if (isSelected === null) {
      return '';
    }

    return isSelected ? 'visible' : 'invisible';
  }

  render () {
    const { handleClick, props: { index, selected } } = this;

    return (
      <li
        className={`
          grid__list
          grid__list--${index + 1}
          ${this.getVisibleClassName(selected)}
        `}
        onClick={handleClick}
      />
    );
  }
}

type gridProps = {
  grids: string[],
  handleClick: (index: number) => void,
  isOpened: boolean,
  selectedIndex: number | null
};

export default function Grid ({ grids, isOpened, handleClick, selectedIndex }: gridProps) {
  return (
    <CSSTransitionGroup
      component="ul"
      transitionName="grid-fade"
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={495}
    >
      {
        isOpened &&
        grids.map((grid, i) => (
          <GridList
            key={grid}
            index={i}
            onClick={handleClick}
            selected={selectedIndex === null ? null : selectedIndex === i}
          >
            {grid}
          </GridList>
        ))
      }
    </CSSTransitionGroup>
  );
}
