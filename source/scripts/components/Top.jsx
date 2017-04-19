// @flow

import React from 'react';
import './Top.scss';

type props = {
  handleClick: () => void;
};

export default function Top ({ handleClick }: props) {
  return (
    <div className="top">
      <button className="top__button" onClick={handleClick}>
        <span className="fa fa-diamond" /> 遷移 <span className="fa fa-diamond" />
      </button>
    </div>
  );
}
