import React from 'react';
import { render } from 'react-dom';

import { Hoge } from '../components/hoge.jsx';

export default function renderer ({ element }) {
  render(<Hoge />, element);
}

