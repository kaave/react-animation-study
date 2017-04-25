// @flow

import React, { Component } from 'react';
import { render } from 'react-dom';

import Main from '../components/Main.jsx';

type state = {
  isGridOpened: boolean
};

const initialState: state = {
  isGridOpened: false
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

  handleGridClick (_event: Event) {
    this.setState(Object.assign({}, this.state, {
      isGridOpened: false
    }));
  }

  render () {
    return <Main {...this.state} handleButtonClick={this.handleButtonClick} handleGridClick={this.handleGridClick} />;
  }
}

export default function renderer ({ element }: { element: HTMLElement }) {
  render(<Renderer />, element);
}
