import React from 'react';

import styles from './hoge.css';

export class Hoge extends React.Component {
  constructor(props){
    super(props);
    this.state = {time: 0};

    this.countUp = this.countUp.bind(this);
  }

  componentDidMount(){
    this.countUp();
  }

  countUp(){
    this.setState({
      time: this.state.time + 1
    });
    setTimeout(this.countUp, 333);
  }

  render(){
    return(
      <div className={styles.test}>
        <div>
          !Time!: <span className={styles.bold}>{ this.state.time }</span>
        </div>
      </div>
    );
  }
}

