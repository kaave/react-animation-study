import React, { Component } from 'react';
import { format } from 'date-fns';
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
          <span className="rendered-date">{format(new Date(), 'YYYY-MM-DD HH:mm:ss.SSS')}</span>
          <span className="fa fa-heart" /> COUNT: <span {...classes('bold')}>{ this.state.time }</span>
        </div>
      </div>
    );
  }
}

