// @flow

import React, { Component } from 'react';
import { render } from 'react-dom';

import Top from '../components/Main.jsx';

class Renderer extends Component {
  handleButtonClick: () => void;

  constructor (props: {}) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick (_event: Event) {
    console.log('Button clicked');
  }

  render () {
    return <Top handleClick={this.handleButtonClick} />;
  }
}

export default function renderer ({ element }: { element: HTMLElement }) {
  render(<Renderer />, element);
}
