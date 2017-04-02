import React from 'react';
import BEMHelper from 'react-bem-helper';

import './hoge.css';

const classes = new BEMHelper({
  name: 'hoge'
});

export class Hoge extends React.Component {
  constructor (props) {
    super(props);
    this.state = { time: 0 };

    this.countUp = this.countUp.bind(this);
  }

  componentDidMount () {
    this.countUp();
  }

  countUp () {
    this.setState({
      time: this.state.time + 1
    });
    setTimeout(this.countUp, 333);
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

