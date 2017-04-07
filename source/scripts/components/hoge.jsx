import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';

import './hoge.scss';

const classes = new BEMHelper({ name: 'hoge' });

export class Hoge extends Component {
  constructor (props) {
    super(props);
    this.state = { time: 0 };
  }

  componentDidMount () {
    this.countUp();
  }

  countUp () {
    this.setState({ time: this.state.time + 1 });
    setTimeout(this.countUp.bind(this), 333);
  }

  render () {
    return (
      <div {...classes()}>
        <div>
          COUNT: <span {...classes('bold')}>{ this.state.time }</span>
        </div>
      </div>
    );
  }
}

