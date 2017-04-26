// @flow

import React, { Component } from 'react';
import { render } from 'react-dom';

import Main from '../components/Main.jsx';

type state = {
  isGridOpened: boolean,
  selectedGridIndex: number | null
};

const initialState: state = {
  isGridOpened: false,
  selectedGridIndex: null
};

class Renderer extends Component {
  handleButtonClick: () => void;
  handleGridClick: () => void;

  constructor (props: {}) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleGridClick = this.handleGridClick.bind(this);
    this.state = initialState;
  }

  handleButtonClick (_event: Event) {
    this.setState(Object.assign({}, this.state, {
      isGridOpened: true
    }));
  }

  handleGridClick (index: number) {
    if (this.state.selectedGridIndex === index) {
      this.setState(Object.assign({}, this.state, {
        selectedGridIndex: null,
        isGridOpened: false
      }));
    } else {
      this.setState(Object.assign({}, this.state, {
        selectedGridIndex: index
      }));
    }
  }

  render () {
    return <Main {...this.state} handleButtonClick={this.handleButtonClick} handleGridClick={this.handleGridClick} />;
  }
}

export default function renderer ({ element }: { element: HTMLElement }) {
  render(<Renderer />, element);
}
